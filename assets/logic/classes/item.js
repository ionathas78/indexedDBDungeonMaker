function Item(id, type, name, descr, cond, secret, value) {
    return {
        id: id,
        type: type,
        name: name,
        description: descr,
        condition: cond,
        secret: secret,
        worth: value
    }
}

Item.prototype.damage = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel > 0) {
        conditionLevel--;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}

Item.prototype.repair = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel < Conditions.length - 2) {
        //      Since you can't repair something back to perfect condition
        conditionLevel++;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}