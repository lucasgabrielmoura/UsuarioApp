import React, {createContext, useReducer, useState} from "react";
import users from "../data/users";

//só exemplo de uso do Context, não muito usado em dados descentralizados


type usuarioTipo = {
    id: number,
    name: string,
    email: string,
    avatarUrl: string
}[]


type tipoContext = {
    children: string | JSX.Element | JSX.Element[]
}

const UsersContext = createContext({} as usuarioTipo)

export const UsersProvider = (props:tipoContext) => {

    const [usuarios, setUsuarios] = useState<usuarioTipo>(users)

    return(
        <UsersContext.Provider value={usuarios}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext