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

    const [name, setName] = useState(params.params?.name)
    const [email, setEmail] = useState(params.params?.email)
    const [avatarUrl, setAvatarUrl] = useState(params.params?.avatarUrl)

    const user = {
        name: name,
        email: email,
        avatarUrl: avatarUrl
    }

    return(
        <View style={styles.form}>
            <Text style={styles.title}>Name</Text>
            <TextInput style={styles.input} onChangeText={name => setName(name)} value={name} placeholder="Informe o Nome" />
            <Text style={styles.title} >Email</Text>
            <TextInput style={styles.input} onChangeText={email => setEmail(email)} value={email} placeholder="Informe o seu Email" />
            <Text style={styles.title} >Avatar</Text>
            <TextInput style={styles.input} onChangeText={url => setAvatarUrl(url)} value={avatarUrl} placeholder="Informe a URL do seu Avatar" />
            <Button title="Salvar" onPress={()=>navigation.goBack()}/>
        </View>
        
    )
}