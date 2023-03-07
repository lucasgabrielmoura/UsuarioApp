import React, { useContext, useState, useEffect } from "react";
import { ListItem, Avatar } from "@rneui/base";
import { View, FlatList, ListRenderItem, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack, propsNavigationStack } from "../TypeNav";
import { Icon } from "@rneui/themed";
import UsersContext from "../context/usersContext";
import users from "../data/users";
import apiCat from "../service/apiCat";
import { ScrollView } from "react-native-gesture-handler";

type usuarioTipo = {
    id: string,
    url: string,
    height: number
}

export default function UserList(){

    const navigation = useNavigation<propsStack>();

    const [usuarios, setUsuarios] = useState<usuarioTipo[]>([{
        id: "",
        url: "",
        height: 0,
    }])

    useEffect(()=>{
        apiCat.get("").then(res => {
            setUsuarios(res.data)
        }).catch()
    },[])

    //Caixa para modal
    function deleteUser(user:usuarioTipo){
        Alert.alert("Excluir Usuário", "Você quer mesmo excluir o usuário: " + user.id + "?", [
            {
                text: "Sim",
            },{
                text: "Não"
            }
        ])
    }

    const produtos = usuarios.map((item:usuarioTipo) => {
        return(
        <ListItem key={item?.id} bottomDivider onPress={() => navigation.navigate("UserForm", {url: item?.url, id: item?.id , height: item?.height})}>
            <Avatar rounded source={{uri: item?.url || "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"}} />
            <ListItem.Content>
                <ListItem.Title style={{ color: '#000'}}>
                    {item?.id}
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: '#345cab90'}}>
                        {item?.height}
                </ListItem.Subtitle>
            </ListItem.Content>
            <Icon type="antdesign" name="edit" style={{padding: 8, borderRadius: 10}} color={"orange"} onPress={() => navigation.navigate("UserForm", {url: item?.url, id: item?.id , height: item?.height})}/>
            <Icon type="font-awesome" name="trash" style={{padding: 8, borderRadius: 10}} color={"red"} onPress={() => deleteUser(item)} />
        </ListItem>
        )
    })

    return(
        <ScrollView>
            {produtos}
            {produtos}
        </ScrollView>
    )
}