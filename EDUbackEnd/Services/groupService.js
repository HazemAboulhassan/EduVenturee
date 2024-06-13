const Group = require("../models/Group");
const Counter = require("../models/Counter");

// Function to get the next sequence number
const getNextSequence = async(sequenceName) => {
    const counter = await Counter.findByIdAndUpdate(
        sequenceName, { $inc: { seq: 1 } }, { new: true, upsert: true }
    );
    return counter.seq;
};

// Function to add a new group with a unique ID
const addGroup = async(groupDetails) => {
    try {
        const newId = await getNextSequence("groupId");
        const newGroup = new Group({
            groupId: newId,
            ...groupDetails
        });
        await newGroup.save();
        return newGroup;
    } catch (error) {
        console.error("Error adding group:", error);
        throw error;
    }
};

module.exports = {
    addGroup
};