import React, { useState } from "react";
import { Text } from "@rneui/base";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { propsNavigationStack, propsStack } from "../TypeNav";
import { View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
        fontSize: 16
    },
    form: {
        padding: 12,

    },
    input: {
        height: 30,
        borderColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 20,
    }
})


export default function UserForm(){

    type routeParam = RouteProp<propsNavigationStack, "UserForm">
    const navigation = useNavigation<propsStack>();

    const params = useRoute<routeParam>();

    const [email, setEmail] = useState(params.params?.id)
    const [avatarUrl, setAvatarUrl] = useState(params.params?.height)


    return(
        <View style={styles.form}>
            <Text style={styles.title} >Estado</Text>
            <TextInput style={styles.input} onChangeText={email => setEmail(email)} value={email} placeholder="Informe o Estado" />
            <Text style={styles.title} >Quantidade</Text>
            <TextInput keyboardType={"numeric"} style={styles.input} onChangeText={number => setAvatarUrl(parseFloat(number))} value={avatarUrl?.toString()} placeholder="Informe o UF" />
            <Button title="Salvar" onPress={()=>navigation.goBack()}/>
        </View>
        
    )
}