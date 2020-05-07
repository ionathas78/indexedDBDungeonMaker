function Feature(id, name, descr, cond, contents = null, lock = null, trap = null) {
    return {
        id: id,
        name: name, 
        description: descr,
        condition: cond,
        contents: contents,
        lock: lock,
        trap: trap
    }
}

Feature.prototype.damage = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel > 0) {
        conditionLevel--;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}

Feature.prototype.repair = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel < Conditions.length - 2) {
        //      Since you can't repair something back to perfect condition
        conditionLevel++;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}