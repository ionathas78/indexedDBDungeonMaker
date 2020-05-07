function Lock(id, name, descr, cond, difficulty) {
    return {
        id: id,
        name: name,
        description: descr,
        condition: cond,
        difficulty: difficulty
    }
}

Lock.prototype.unlock = function() {
    if (this.canLock) this.isLocked = false;
    return this.isLocked;
}
Lock.prototype.lock = function(difficulty = "") {
    if (this.canLock) {
        this.isLocked = true;
        if (difficulty && difficulty !== "") {
            this.lockDifficulty = difficulty;
        }
    }
    return this.isLocked;
}
