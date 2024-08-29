// levels.js
const level1 = {
    levelNumber: 1,
    background: "Style/source/Background.png",
    enemies: [
        {
            type: "Vader",
            health: 100,
            image: "Style/source/Enemy/vader.png"
        },
        {
            type: "troll",
            health: 200,
            image: "Style/source/Enemy/Troll.png"
            // Add image paths if needed
        },
        {
            type: "dragon",
            health: 500,
            image: "Style/source/Enemy/Dragon.png"
            // Add image paths if needed
        }
    ],
    objectives: [
        "defeat all enemies",
        "find the hidden treasure"
    ]
};

const levels = [level1];


