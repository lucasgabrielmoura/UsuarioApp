import React from "react";
import { ListItem, Avatar } from "@rneui/base";
import { View, FlatList, ListRenderItem } from "react-native";
import users from "../data/users";
import { useNavigation } from "@react-navigation/native";
import { propsStack, propsNavigationStack } from "../TypeNav";

type usuarioTipo = {
    id: number,
    name: string,
    email: string,
    avatarUrl: string
}


export default function UserList(){

    const navigation = useNavigation<propsStack>();

    const produtosTipado: ListRenderItem<usuarioTipo> = ({item:pessoa}) => (
        <ListItem key={pessoa?.id} bottomDivider onPress={() => navigation.navigate("UserForm", {name: pessoa.name})}>
            <Avatar rounded source={{uri: pessoa?.avatarUrl}} />
            <ListItem.Content>
                <ListItem.Title style={{ color: '#000'}}>
                    {pessoa?.name}
                </ListItem.Title>
                <ListItem.Subtitle>
                        {pessoa?.email}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );

    return(
        <View>
            <FlatList renderItem={produtosTipado} data={users} />
        </View>
    )
}