import { FWorld } from "../index";

// Get world properties (state, game_mode, playlist, damage)
// state could have the following values: "disengaged", "engaged", "inProgress"
// disengaged -> Inactive, engaged -> On spawn island, inProgress -> The game is in progress

FWorld.getProperty(); // No argument means get all properties. Providing a string will search through the properties and return the one you specified

// Disable fall damage
FWorld.setProperty("damage", false);

// Move all pawns to (x, y)
FWorld.getPawnList().forEach((pawn) => {
    pawn.move(70, 70, 70); // x, y. z
});

// Move one pawn
const myPawn = FWorld.getPawnByUsername("Array0x");

myPawn.move(600, 600, 600); // x, y, z
myPawn.costume("CID_016_Athena_Commando_F"); // Set the skin (changes the value in the profile's directory as well)
myPawn.kill(); // Kick the pawn from the world