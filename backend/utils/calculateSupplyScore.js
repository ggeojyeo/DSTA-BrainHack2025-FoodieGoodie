//utils/calculateSupplyScore.js

const HomeQues = require('../models/HomeQues');

exports.getRecommendedSupply = ({ seniors = 0, adults = 0, children = 0, pets = false }) => {
    return {
        milk: seniors * 7 + adults * 10 + children * 7 + (pets ? 2 : 0),
        bread: seniors * 3 + adults * 4 + children * 3,
        rice: seniors * 2 + adults * 4 + children * 2.5,
        eggs: seniors * 12 + adults * 20 + children * 14,
        snacks: seniors * 5 + adults * 7 + children * 6,
        beverage: seniors * 5 + adults * 10 + children * 5,
        "cleaning supplies": 1, // fixed per household
    };
}

exports.calculateSupplyScore = (recommendedSupply, supplyQues) => {
    let total = 0;
    let matched = 0;

    for (let item in recommendedSupply) {
        const requiredAmount = recommendedSupply[item];
        const userAmount = supplyQues[item] || 0;

        total += requiredAmount;
        matched += Math.min(userAmount, requiredAmount); // cap at recommended
    }

    const score = total > 0 ? matched / total * 100 : 0;
    return Math.round(score); //returns percentage rounded to nearest integer
}