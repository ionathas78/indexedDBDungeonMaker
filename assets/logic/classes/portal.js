function Portal(id, direction, connectsTo, descr, material, cond, canOpenClose = true, open = false, lock = null, trap = null) {
    return {
        id: id,
        direction: direction,
        connectionId: connectsTo,
        description: descr,
        material: material,
        condition: cond,
        canOpenOrClose: canOpenClose,
        isOpen: open,
        lock: lock,
        trap: trap
    }
}

Portal.prototype.open = function() {
    if (this.canOpenOrClose && (!this.lock || !this.lock.isLocked)) {
        this.isOpen = true;
    }
    return this.isOpen;
}

Portal.prototype.close = function() {
    if (this.canOpenOrClose) {
        this.isOpen = false;
    }
    return this.isOpen;
}

Portal.prototype.block = function() {
    if (this.canOpenClose && this.isOpen) {
        this.canOpenClose = false;
    }
    return this.canOpenClose;
}

Portal.prototype.unblock = function() {
    if (!this.canOpenOrClose && !this.isOpen) {
        this.canOpenClose = true
    }
    return this.canOpenClose;
}

Portal.prototype.damage = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel > 0) {
        conditionLevel--;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}

Portal.prototype.repair = function() {
    let conditionLevel = Conditions.indexOf(this.condition);
    if (conditionLevel < Conditions.length - 2) {
        //      Since you can't repair something back to perfect condition
        conditionLevel++;
        this.condition = Conditions[conditionLevel];
    }
    return this.condition;
}