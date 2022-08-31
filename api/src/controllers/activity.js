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

module.exports = { postActivities }