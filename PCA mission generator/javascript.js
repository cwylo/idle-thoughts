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
    "take and hold a town",
    "rescue hostages",
    "retrieve intel",
    "destroy assets",
    "eliminate an HVT",
    "stage an ambush",
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

function pickString(somelist) {
    let randomNumber = Math.floor(Math.random() * (somelist.length));
    return randomNumber;
};

function newMission() {
//Pick something for each array and store it.
let missionArray = [
    bluforTypes[pickString(bluforTypes)],
    opforTypes[pickString(opforTypes)],
    terrainTypes[pickString(terrainTypes)],
    objectiveTypes[pickString(objectiveTypes)],
    gimmickTypes[pickString(gimmickTypes)],
];

//Display it as a formatted HTML block.
    document.getElementById('missionDisplay').innerHTML =  `<p>Players are a <em>${missionArray[0]}</em>, fighting <em>${missionArray[1]}</em>. This takes place on <em>${missionArray[2]}</em> terrain. Their main objective is to <em>${missionArray[3]}</em>. This mission\'s gimmick is that <em>${missionArray[4]}</em>.`;

};