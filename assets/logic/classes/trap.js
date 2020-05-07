function Trap(id, descr, cond, armed, spotDiff, avoidDiff, disarmDiff, trigger, effect) {
    return {
        id: id,
        description: descr,
        condition: cond,
        isArmed: armed,
        spotDifficulty: spotDiff,
        avoidDifficulty: avoidDiff,
        disarmDifficulty: disarmDiff,
        trigger: trigger,
        effect: effect
    }
}

Trap.prototype.arm = function(trigger = "", effect = "") {
    this.isArmed = true;
    if (trigger && trigger !== "") {
        this.trigger = trigger;
    }
    if (effect && effect !== "") {
        this.effect = effect;
    }
    return this.isArmed;
}

Trap.prototype.disarm = function() {
    this.isArmed = false;
    return this.isArmed;
}

Trap.prototype.trigger = function() {
    return this.effect;
}

Trap.prototype.damage = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel > 0) {
        conditionLevel--;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}

Trap.prototype.repair = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel < Conditions.length - 2) {
        //      Since you can't repair something back to perfect condition
        conditionLevel++;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}