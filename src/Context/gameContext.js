import {createContext} from "react";

console.log('in context')

const gameContext = createContext({
    game: {},
    gameSetter: (obj) => {}
}) 

export default gameContext