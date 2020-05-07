function Room(id, name, descr, exits, walls = "", floor = "", features = null, traps = null) {
    return {
        id: id,
        name: name,
        description: descr,
        exits: exits,  
        walls: walls,
        floor: floor,
        features: features,
        traps: traps
    }
}
