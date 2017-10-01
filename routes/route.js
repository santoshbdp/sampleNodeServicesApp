const express = require("express");
const router = express.Router();

const Contact = require("../models/contacts");
const Player = require("../models/players");

router.get("/players", (req, res, next)=>{
    Player.find((err, players)=>{
        res.json(players);
    });
});

//add contact
router.post("/player", (req, res, next)=>{
    let newPlayer = new Player({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newPlayer.save((err, player)=>{
        if(err) {
            res.json({msg: "Failed to add contact"});
        } 
        else {
            res.json({msg: "Player Added Succesfully"});
        }
    });

});

//add contact
router.delete("/players/:id", (req, res, next)=>{
    Player.remove({_id: req.params.id}, (err, result)=>{
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

// //add contact
// router.post("/contact", (req, res, next)=>{
    
// });

// //add contact
// router.post("/contact", (req, res, next)=>{
    
// });

module.exports = router;