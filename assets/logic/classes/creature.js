function Creature(id, type, name, descr, health, armor = null, weapons = null, gear = null) {
    return {
        id: id,
        type: type,
        name: name,
        description: descr,
        health: health,
        armor: armor,
        weapons: weapons,
        gear: gear
    }
}

Creature.prototype.wound = function() {
    let conditionLevel = Healths.indexOf(this.health);
    if (conditionLevel > 0) {
        conditionLevel--;
        this.health = Healths[conditionLevel];
    }
    return this.health;
}

Creature.prototype.heal = function() {
    let conditionLevel = Healths.indexOf(this.health);
    if (conditionLevel < Healths.length - 1) {
        conditionLevel++;
        this.health = Healths[conditionLevel];
    }
    return this.health;
}