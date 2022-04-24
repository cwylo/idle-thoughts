var bluforTypes = [
    "state force",
    "militia band",
    "paramilitary organization",
    "cool criminal gang"
];

var opforTypes = [
    "government forces",
    "occupying forces",
    "insurgents",
    "separatists",
    "uncool criminals",
    "cops",
];

var terrainTypes = [
    "forest",
    "mountain",
    "urban",
    "desert",
    "jungle",
    "open"
];

var objectiveTypes = [
    "take and hold a site",
    "rescue hostages",
    "retrieve intel",
    "destroy assets",
    "eliminate an HVT",
    "stage an ambush",
    "take out enemy artillery"
];

var gimmickTypes = [
    "it's nighttime and players have NVGs",
    "it's nighttime and no one has NVGs",
    "players get CAS",
    "oh no TAAAAAANKS",
    "players are out-geared",
    "no one has armor",
    "everyone has motorbikes only",
    "it's in the McMCU",
    "it's super foggy",
    "there's a mission timer",
    "there are civilians in the AO",
    "the players get a mortar",
    "the players are getting mortared"
];

var constraintTypes = [
    "the mission takes place on only 1km x 1km of terrain",
    "players must fight in low-visibility environments",
    "key points throughout are heavily fortified by the enemy",
    "players don't know the precise location of the objective",
    "players have very limited supplies",
    "players have a restrictive ROE",
    "all the obvious entry points are heavily fortified and patrolled"
];

function pickString(somelist) {
    let randomNumber = Math.floor(Math.random() * (somelist.length));
    return randomNumber;
};

function newSillyMission() {
//Pick something for each array and store it.
let missionArraySilly = [
    bluforTypes[pickString(bluforTypes)],
    opforTypes[pickString(opforTypes)],
    terrainTypes[pickString(terrainTypes)],
    objectiveTypes[pickString(objectiveTypes)],
    gimmickTypes[pickString(gimmickTypes)],
];

//Display it as a formatted HTML block.
    document.getElementById('missionDisplaySilly').innerHTML =  `<p>Players are a <em>${missionArraySilly[0]}</em>, fighting <em>${missionArraySilly[1]}</em>. This takes place on <em>${missionArraySilly[2]}</em> terrain. Their main objective is to <em>${missionArraySilly[3]}</em>. This mission\'s gimmick is that <em>${missionArraySilly[4]}</em>.`;

};

//Duplicate, but for serious mission types.

function newSrsMission() {
    //Pick something for each array and store it.
    let missionArraySrs = [
        bluforTypes[pickString(bluforTypes)],
        opforTypes[pickString(opforTypes)],
        terrainTypes[pickString(terrainTypes)],
        objectiveTypes[pickString(objectiveTypes)],
        constraintTypes[pickString(constraintTypes)],
    ];
    
    //Display it as a formatted HTML block.
        document.getElementById('missionDisplaySrs').innerHTML =  `<p>Players are a <em>${missionArraySrs[0]}</em>, fighting <em>${missionArraySrs[1]}</em>. This takes place on <em>${missionArraySrs[2]}</em> terrain. Their main objective is to <em>${missionArraySrs[3]}</em>. This mission\'s constraint is that <em>${missionArraySrs[4]}</em>.`;
    
    };