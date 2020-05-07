

//      **      Declarations

let _floor = null;
let _currentId = {
    room: -1,
    exit: -1,
    trap: -1,
    feature: -1,
    item: -1,
    creature: -1
}

//  This random distribution will favor the upper conditions, except the very top. That way, you won't have as many destroyed objects.
const randomCondition = () => Conditions[Math.floor(Math.sqrt(Math.random() * (Conditions.length ** 2 - 6)))];
//  This random distribution favors the upper conditions, especially the top. Hence: more healthy creatures than dead ones.
const randomHealth = () => Healths[Math.floor(Math.sqrt(Math.random() * (Healths.length ** 2)))];
//  This random distribution favors the lower values, except the very bottom. That way, you have very few unique items but not terribly many worthless ones.
const randomWorth = () => Worths[Math.floor(Worths.length - Math.sqrt(Math.random() * (Worths.length ** 2 - 6)))];
//  This random distribution favors the middle. Less extremely high or low results.
const randomLevel = () => Levels[Math.floor((Math.random() * Levels.length + Math.random() * Levels.length) / 2)];
//  This random distribution favors the middle. Less extremely high or low results.
const randomDifficulty = () => Difficulties[Math.floor((Math.random() * Difficulties.length + Math.random() * Difficulties.length) / 2)];
//  Flip the direction index, using modulus to overflow high results.
const oppositeDirection = direction => Directions[(Directions.indexOf(direction) + 8) % 16];

//      **      Function

function main() {
    const request = window.indexedDB.open("indexedDBTest", 1);
    
    request.onerror = ({ target }) => {
        console.error("Database error: " + target.errorCode);
    }

    request.onupgradeneeded = ({ target }) => {
        
    }
}

//      **      Secondary Functions

function makeFloor() {


}

function makeRoom(entrance = null, maxExits = 4, chanceForFeature = 0.2) {
    _currentId.room++;
    let newRoom = new Room(_currentId.room, "", "", [], "", "", [], []);
    describeRoom(newRoom);
    let newDirection = 0;
    let directionMod = 1;

    if (entrance) {
        newDirection = oppositeDirection(entrance.direction);
        let newExit = makeExit(Directions[newDirection], entrance.id);

        entrance.connectionId = newExit.id;

        newExit.description = entrance.description;
        newExit.material = entrance.material;
        newExit.lock = entrance.lock;
        newExit.condition = entrance.condition;
        newExit.canOpenClose = true;
        newExit.isOpen = true;

        newRoom.exits.push(newExit);
        maxExits--;
    }

    let numOfExits = Math.floor(Math.random() * maxExits) + 1;
    if (newDirection > Directions.length / 2) {
        directionMod = -1;
    }
    for (let i = 0; i < numOfExits; i++) {
        let dirAdjustment = Math.floor(Math.random() * (Directions.length - newDirection)) + 1;
        newDirection += dirAdjustment * directionMod;
        if (newDirection > Directions.length || newDirection < 0) {
            break;
        }
        let addExit = makeExit(Directions[newDirection]);
        describeDoor(addExit);
        newRoom.exits.push(addExit);
    }

    while (Math.random() <= chanceForFeature) {
        let newFeature = makeFeature();
        describeFeature(newFeature);

        newRoom.features.push(newFeature);
    }

    return newRoom;
}

function makeExit(direction = "", connectionId = -1) {
    _currentId.exit++;
    let newExit = new Portal(_currentId, direction, connectionId, "", "", "", true, false, null, null);
    describeDoor(newExit);
    newExit.condition = randomCondition();
    
    return newExit;
}

function makeTrap() {
    _currentId.trap++;
    let newTrap = new Trap(_currentId.trap, "", "", "", true, "", "", "", "", "");
    describeTrap(newTrap);
    newTrap.condition = randomCondition();

    return newTrap;
}

function makeFeature() {
    _currentId.feature++;
    let newFeature = new Feature(_currentId.feature, "", "", "", [], null, null);
    describeFeature(newFeature);
    newFeature.condition = randomCondition();

    return newFeature;
}

function makeItem() {
    _currentId.item++;
    let newItem = new Item(_currentId.item, "", "", "", "", "");
    describeItem(newItem);
    newItem.condition = randomCondition();
    newItem.worth = randomWorth();

    return newItem;
}

function describeRoom(targetRoom, chanceForRoomDescriptor = 0.2) {
    let roomShape = roomsJSON.shapes[Math.floor(Math.random() * roomsJSON.shapes.length)];
    let roomType = roomsJSON.types[Math.floor(Math.random() * roomsJSON.types.length)];
    let roomFloors = roomsJSON.floors[Math.floor(Math.random() * roomsJSON.floors.length)];
    let roomWalls = roomsJSON.walls[Math.floor(Math.random() * roomsJSON.walls.length)];

    let roomDescription = roomShape + " " + roomType;
    if (Math.random <= chanceForRoomDescriptor) {
        if (Math.random <= 0.5) {
            roomDescription = roomsJSON.prefixes[Math.floor(Math.random() * roomsJSON.prefixes.length)] + " " + roomDescription;
        } else {
            roomDescription += " " + roomsJSON.suffixes[Math.floor(Math.random() * roomsJSON.suffixes.length)];
        }
    }

    targetRoom.description = roomDescription;
    targetRoom.floors = roomFloors;
    targetRoom.walls = roomWalls;
    return true;
}

function describeFeature(targetFeature, chanceForDescriptor = 0.2, chanceForContents = 0.2, maxNumItems = 4, chanceForTrap = 0.1) {
    let featureType = featuresJSON.types[Math.floor(Math.random() * featuresJSON.types.length)];
    let featureAdjective = featuresJSON.adjectives[Math.floor(Math.random() * featuresJSON.adjectives.length)];
    
    let featureDescription = featureAdjective + " " + featureType;
    if (Math.random() <= chanceForDescriptor) {
        featureDescription = featuresJSON.descriptors[Math.floor(Math.random() * featuresJSON.descriptors.length)] + " " + featureDescription;
    }

    if (Math.random() <= chanceForContents) {
        let numItems = Math.floor(Math.random() * maxNumItems);
        targetFeature.contents = [];

        for (let i = 0; i < numItems; i++) {
            let newItem = makeItem();
            describeItem(newItem);

            targetFeature.contents.push(newItem);
        }
    }

    if (Math.random() <= chanceForTrap) {
        let newTrap = makeTrap();
        describeTrap(newTrap);
        
        targetFeature.trap = newTrap;
    }
    targetFeature.description = featureDescription;
    return true;
}

function describeItem(targetItem, chanceMagical = 0.05) {
    // console.log(itemsJSON);
    let itemCat = Object.keys(itemsJSON)[Math.floor(Math.random() * Object.keys(itemsJSON).length)];
    // console.log(itemCat);
    let itemClass = Object.keys(itemsJSON[itemCat])[Math.floor(Math.random() * Object.keys(itemsJSON[itemCat]).length)];
    // console.log(itemClass);
    let itemType = itemsJSON[itemCat][itemClass]["types"][Math.floor(Math.random() * itemsJSON[itemCat][itemClass]["types"].length)];
    let itemMaterial = null;
    if (itemsJSON[itemCat][itemClass]["materials"]) {
        itemMaterial = itemsJSON[itemCat][itemClass]["materials"][Math.floor(Math.random() * itemsJSON[itemCat][itemClass]["materials"].length)];
    }

    let itemDescription;
    if (!itemMaterial) {
        itemDescription = itemType;
    } else {
        itemDescription = itemMaterial + " " + itemType;
    }

    targetItem.type = itemType;
    targetItem.description = itemDescription;
    if (Math.random() <= chanceMagical) {
        targetItem.secret = "Magical";
    }

    return true;
}

function describeTrap(targetTrap, chanceTrapDisarmed = 0.05) {
    let trapType = trapsJSON.types[Math.floor(Math.random() * trapsJSON.types.length)];
    let trapTrigger = trapsJSON.triggers[Math.floor(Math.random() * trapsJSON.triggers.length)];
    let trapEffects = trapsJSON.effects[Math.floor(Math.random() * trapsJSON.effects.length)];
    
    targetTrap.description = trapType;
    targetTrap.trigger = trapTrigger;
    targetTrap.effect = trapEffects;

    targetTrap.spotDifficulty = randomLevel();
    targetTrap.disarmDifficulty = randomLevel();
    targetTrap.avoidDifficulty = randomLevel();
    targetTrap.isArmed = (Math.random() > chanceTrapDisarmed);

    return true;
}

function describeDoor(targetDoor, chanceForDescriptor = 0.2, chanceForTrap = 0.2) {
    let doorType = portalsJSON.types[Math.floor(Math.random() * portalsJSON.types.length)];
    let doorMaterial = portalsJSON.materials[Math.floor(Math.random() * portalsJSON.materials.length)];
    let doorColor = portalsJSON.colors[Math.floor(Math.random() * portalsJSON.colors.length)];
    
    let doorDescription = doorColor + " " + doorType;
    if (Math.random() <= chanceForDescriptor) {
        doorDescription = portalsJSON.descriptors[Math.floor(Math.random() * portalsJSON.descriptors.length)] + " " + doorDescription;
    }

    if (Math.random() <= chanceForTrap) {
        let newTrap = makeTrap();
        describeTrap(newTrap);
        
        targetDoor.trap = newTrap;
    }

    targetDoor.description = doorDescription;
    targetDoor.material = doorMaterial;
    return true;
}

    
//      **      Logic

main();
