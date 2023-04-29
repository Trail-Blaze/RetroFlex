var GameMode = {CREATIVE: 'GameModeCreative', SAVETHEWORLD: 'GameModeStw', BATTLEROYALE: 'GameModeBr', LOBBY: 'GameModeLobby'};
var FWorld = {
    pawnList: [],
    damage: true,
    state: 'disengaged', // 'engaged' or 'disengaged' or 'inProgress'
    game_mode: GameMode.LOBBY,
    inDebugMode: false
}
function sendDebugMessage(message) {
    if(FWorld.inDebugMode) {
        console.log('[DBG] RetroFlex | ' + message);
    }
}
class Pawn {
    username = '';
    uid = '';
    constructor(username, uid) {
        this.username = username;
        this.uid = uid;
    }

    move(x, y, z) {
        sendDebugMessage('Pawn#MOVE not implemented.');
    }

    costume(skin) {
        sendDebugMessage('Pawn#COSTUME not implemented.');
    }

    kill() {
        sendDebugMessage('Pawn#KILL not implemented.');
    }
}

export default {
    PAWN,
    FWorld,
    GameMode,
    sendDebugMessage,
    getProperty: (prop = "") => {
        if (prop) {
            // return the specified property
            return FWorld[prop];
        } else {
            // return all properties
            return FWorld;
        }
    },

    setProperty: (prop, value) => {
        // set the specified property
        FWorld[prop] = value;
    },

    getPawnList: () => {
        // return the list of all pawns
        return FWorld.pawnList;
    },

    getPawnByUsername: (username) => {
        // return the pawn with the specified username
        return FWorld.pawnList.find((pawn) => pawn.username === username);
    }
};