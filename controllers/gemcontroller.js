const express = require('express');
const router = express.Router();
const Gem = require('../db').import('../models/gem'); 


//allows user to create gem
router.post('/', (req, res) => {
    const gemFromRequest = {
        locationType : req.body.locationType,
        locationAddress : req.body.locationAddress,
        locationCoordinates : req.body.locationCoordinates,
        description : req.body.description,
        owner : req.user.id,
        userId: req.user.id
    } 

   Gem.create(gemFromRequest)
        .then(gem => res.status(200).json(gem))
        .catch(err => res.json({
            error: err
        }));
});

//should find all gems under user
router.get('/', (req, res) => {
    console.log(req.user.id)
    Gem.findAll({
    //     where: {
    //         owner: req.user.id}
    // }
    })
        .then(gem => res.status(200).json(gem))
        .catch(err => res.status(500).json({
            error : err
        }))
});

//gets individual gems by id for an individual user
router.get('/:id', (req, res) => {
    Gem.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(gem => res.status(200).json(gem))
    .catch(err => res.status(500).json({
         error: err
     }))
});

//allows individual gems to be updated by a user
router.put('/:id', (req, res) =>{
    Gem.update(req.body, {
        where: {
            id: req.params.id,
            userId: req.user.id
        }
    })
    .then(gem => res.status(200).json(gem))
    .catch(err => res.json(req.errors))
});

//allows individual gems to be deleted by a user
router.delete('/:id', (req, res) => {
    Gem.destroy({
        where: {
            id: req.params.id,
            userId: req.user.id
        }
    })
    .then(gem => res.status(200).json(gem))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router;