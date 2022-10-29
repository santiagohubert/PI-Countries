const axios = require('axios');
const { Country, Activity } = require('../db');
require("dotenv").config();

 const getApiCountry = async(req, res) => {
    try{
        const infoDB = await Country.findAll()
        // console.log(await Country.findAll(), "soy feli")
        if(!infoDB.length){
        const apiUrl = await axios.get('https://restcountries.com/v3/all')
        console.log(apiUrl,"soy tito")
        const apiInfoJs = await apiUrl.data.map((e) => {
            return {
                id: e.cca3,
                name: e.name.common? e.name.common: 'No se encontró el nombre del pais',
                flag: e.flags[1],
                continents: e.continents,
                capital: e.capital? e.capital[0]: 'No se encontró la capital del pais',
                subregion: e.subregion? e.subregion : "No existe",
                area: e.area,
                population: e.population,
            }
        });
        apiInfoJs.forEach(e => {
            Country.findOrCreate({
                where: {
                    id: e.id,
                    name: e.name,
                    flag: e.flag,
                    continents: e.continents,
                    capital: e.capital,
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population,
                },
            })
        });
        return apiInfoJs;
        } else {
            return infoDB;
        }
    } catch(error) {
       console.log(error)
     } 
}

const getCountryName = async (req,res) => {
    const { name } =req.query
    const countries = await Country.findAll({
        include: [
            {
                model: Activity,
                attributes: ['name'],
                through: { attributes: [] },
            }
        ],
    });
    const allCountries = countries.map(e => {
        return {
            id: e.id,
            name: e.name,
            flag: e.flag,
            continents: e.continents,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
            activities: e.activities.map(e => e.name)
        }
    })
    if(name) {
        let countryName = allCountries.filter(e => e.name.toLowerCase().includes(name.toLowerCase())
    );
    countryName.length? res.status(200).send(countryName): res.status(404).send("No existe dicho país")
    } else {
        res.status(200).send(allCountries);
    };
};

const getCountryId = async (req, res) => {
     const { id } = req.params
     if(id) {
        let country = await Country.findOne({
            where: {
                id
            },
            include: {
                model: Activity,
                attributes: ["name","difficulty","duration","season"],
                through: { attributes: [] },
            }
        });
        if(country) {
            return res.send(country)
        } else {
            return res.status(404).send("Lo siento, no se halló, intente nuevamente...");
        }
     } 
}


module.exports = { getApiCountry, getCountryName, getCountryId }
