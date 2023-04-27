import { createContext } from "react";

const authContext = createContext({
    credentials: {authenticated: false, user: {}},
    setCredentials: (boo) => {}
})

export default authContext