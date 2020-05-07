function Exit(id, direction, descr, portal, originId, connectId) {
    return {
        id: id,
        description: descr,
        direction: direction,
        portal: portal,
        originRoom: originId,
        connectingRoom: connectId
    }
}
