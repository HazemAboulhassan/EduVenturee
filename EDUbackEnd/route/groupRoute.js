const express = require("express");
const router = express.Router();
const groupService = require("../Services/groupService");


router.post("/", async(req, res) => {
    try {
        const newGroup = await groupService.addGroup(req.body);
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;