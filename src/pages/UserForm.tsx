import React from "react";
import { Text } from "@rneui/base";
import { RouteProp, useRoute } from "@react-navigation/native";
import { propsNavigationStack } from "../TypeNav";

export default function UserForm(){

    type routeParam = RouteProp<propsNavigationStack, "UserForm">

    const params = useRoute<routeParam>();

    return(
        <>
            <Text>{params.params?.name}</Text>
            <Text>{params.params?.email}</Text>
            <Text>{params.params?.avatarUrl}</Text>
            <Text>{params.params?.id}</Text>
        </>
        
    )
}