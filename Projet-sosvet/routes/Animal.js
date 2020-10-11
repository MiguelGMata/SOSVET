const express = require('express');
const models = require('../models');
const moment = require('moment');
const jwt = require('jsonwebtoken');


const { User } = models;

module.exports = {

    animalAdd: async (req, res, next) => {
        const animalData = {
            userId: req.body.userId,
            nom: req.body.nom,
            espece: req.body.espece,
            race: req.body.race,
            couleur: req.body.couleur,
            sexe: req.body.sexe,
            poids: req.body.poids,
            sterilisation: req.body.sterilisation,
            information: req.body.information,
            date_naissance: moment().unix(),
            //createAt: moment().add(5, 'minutes').unix()
        }


        if (!animalData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })

        } else {
            await models.Animal.create(animalData)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.json('Erreur : ' + err)
                })
        }
    },



    animals: async (req, res) => {
        await models.Animal.findAll({
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name"],
                },
            ],
        })
            .then(animals => {
                res.json(animals)
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },

    animal: async (req, res, next) => {
        await models.Animal.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name"],
                },
            ],
        })
            .then(animal => {
                if (animal) {
                    res.json(animal)
                } else {
                    res.send("L'animal n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },


    animalDelete: async (req, res, next) => {
        await models.Animal.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.json({ status: 'Animal supprimé!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    },

    animalPut: async (req, res, next) => {
        {
            const { id } = req.params;
            const animalData = {
                nom: req.body.nom,
                espece: req.body.espece,
                race: req.body.race,
                couleur: req.body.couleur,
                sexe: req.body.sexe,
                poids: req.body.poids,
                sterilisation: req.body.sterilisation,
                information: req.body.information,
                date_naissance: req.body.date_naissance,
            }
            if (!animalData) {
                res.status(400)
                res.json({
                    error: 'Mauvaises données'
                })
            } else
                await models.Animal.update(
                    animalData,
                    { where: { id } }
                )
                    .then(() => {
                        res.json({ status: 'Animal mise à jour!' })
                    })
                    //.catch(err => handleError(err))
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        }
    }
}


/**
 *  aniAdd: async (request, response) => {
        const userId = jwt.verify(request.headers['authorization'], process.env.SECRET_KEY);

        const {
            nom,
            espece,
            race,
            couleur,
            sexe,
            poids,
            sterilisation,
            information,
            date_naissance,
        } = request.body;

        const user = await User.findByPk(userId, {
            include: [
                {
                    models: User,
                    as: "user",
                    attributes: ["id", "firstName", "lastName"],
                },
            ]
        });

        const Animal = await Animal.create({
            userId,
            nom,
            espece,
            race,
            couleur,
            sexe,
            poids,
            sterilisation,
            information,
            date_naissance,
        });

        return response.status(OK).json({
            user: user.id,
            nom,
            espece,
            race,
            couleur,
            sexe,
            poids,
            sterilisation,
            information,
            date_naissance,
        });
    },

 */