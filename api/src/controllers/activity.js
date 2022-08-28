const axios = require('axios');
const { Country, Activity } = require('../db');
require("dotenv").config();

const postActivities = async (req, res) => {
     try { 
        let { name, difficulty, duration, season, country } = req.body
         if (name && difficulty && duration && season && country) {
        let newActivity = {
            name,
            difficulty,
            duration,
            season
        }
        const activityCreated = await Activity.create(newActivity)
        let traerPaises = await Country.findOne({
            where: { name: country }
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

module.exports = { postActivities }