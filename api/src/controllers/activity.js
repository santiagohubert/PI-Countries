const axios = require('axios');
const { Country, Activity } = require('../db');
require("dotenv").config();

const postActivities = async (req, res) => {
     try { 
        let { name, difficulty, duration, season, countries } = req.body
         if (name && difficulty && duration && season && countries) {
        let newActivity = {
            name,
            difficulty,
            duration,
            season
        }
        const activityCreated = await Activity.create(newActivity)
        let traerPaises = await Country.findAll({
            where: { name: countries }
        })
        activityCreated.addCountry(traerPaises)
        return res.status(200).send("¡Actividad creada con éxito!");
     } 

     } catch (error) {
        return res
        .status(400)
        .json({ message: "No se ha podido crear la actividad" })
    } 
}

const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll({
            include: [
                {
                    model: Country,
                    attributes: ['name'],
                    through: { attributes: [] },
                }
            ],
        })
        res.status(200).send(activities)
    } catch (error) {
        res.status(400).send('no funca')
    }
}

module.exports = { postActivities, getActivities }