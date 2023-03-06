import React from "react";
import { Text } from "@rneui/base";
import { RouteProp, useRoute } from "@react-navigation/native";
import { propsNavigationStack } from "../TypeNav";

export default function UserForm(){

    type routeParam = RouteProp<propsNavigationStack, "UserForm">

    const params = useRoute<routeParam>();

    return(
        <Text>{params.params?.name}</Text>
    )
}