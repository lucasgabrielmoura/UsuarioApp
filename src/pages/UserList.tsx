import React, { useContext } from "react";
import { ListItem, Avatar } from "@rneui/base";
import { View, FlatList, ListRenderItem, Alert } from "react-native";
import users from "../data/users";
import { useNavigation } from "@react-navigation/native";
import { propsStack, propsNavigationStack } from "../TypeNav";
import { Icon } from "@rneui/themed";
import UsersContext from "../context/usersContext";

type usuarioTipo = {
    id: number,
    name: string,
    email: string,
    avatarUrl: string
}


export default function UserList(){

    const navigation = useNavigation<propsStack>();

    useContext(UsersContext)

    //Caixa para modal
    function deleteUser(user:usuarioTipo){
        Alert.alert("Excluir Usuário", "Você quer mesmo excluir o usuário: " + user.name + "?", [
            {
                text: "Sim",
                onPress(){
                    console.warn("delete", user.id)
                }
            },{
                text: "Não"
            }
        ])
    }

    const produtosTipado: ListRenderItem<usuarioTipo> = ({item:pessoa}) => (
        <ListItem key={pessoa?.id} bottomDivider onPress={() => navigation.navigate("UserForm", {name: pessoa.name, id: pessoa.id, email: pessoa.email, avatarUrl: pessoa.avatarUrl})}>
            <Avatar rounded source={{uri: pessoa?.avatarUrl}} />
            <ListItem.Content>
                <ListItem.Title style={{ color: '#000'}}>
                    {pessoa?.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: '#345cab90'}}>
                        {pessoa?.email}
                </ListItem.Subtitle>
            </ListItem.Content>
            <Icon type="antdesign" name="edit" style={{padding: 8, borderRadius: 10}} color={"orange"} onPress={() => navigation.navigate("UserForm", {name: pessoa.name, id: pessoa.id, email: pessoa.email, avatarUrl: pessoa.avatarUrl})}/>
            <Icon type="font-awesome" name="trash" style={{padding: 8, borderRadius: 10}} color={"red"} onPress={() => deleteUser(pessoa)} />
        </ListItem>
    );

    return(
        <View>
            <FlatList renderItem={produtosTipado} data={users} />
        </View>
    )
}