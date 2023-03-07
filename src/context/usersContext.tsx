import React, {createContext} from "react";
import users from "../data/users";

type tipoContext = {
    children: string | JSX.Element | JSX.Element[]
}

const UsersContext = createContext({})

export const UsersProvider = (props:tipoContext) => {
    return(
        <UsersContext.Provider value={{
            state:{
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext