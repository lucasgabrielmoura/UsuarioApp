import { color } from "@rneui/base";
import React, { useState } from "react";
import { ScrollView, Text , TextInput, TouchableOpacity, StyleSheet, StatusBar, Alert } from "react-native";

type userDateType = {
    user: string | undefined,
    password: string | undefined,
}

export default function Login(){

    const [nome, setNome] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [checker, setChecker] = useState<boolean>();

    const dadosUser = {
        user: nome,
        password: senha
    }

    function handleLogin(data:userDateType) {
        if(nome === "" || senha === ""){
            Alert.alert("Aviso","Verifique se todos os campos foram preenchidos")
        }else{
            alert(JSON.stringify(data))
        }
    }
    
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.label}>
                Usuário
            </Text>
            <TextInput style={styles.input}  onChangeText={(nome)=>setNome(nome)} placeholder="Digite seu usuário"/>
            <Text style={styles.label}>
                Senha
            </Text>
            <TextInput style={styles.input} textContentType="password"  secureTextEntry={true} onChangeText={(senha)=>setSenha(senha)} placeholder="Digite sua Senha"/>
            <TouchableOpacity style={styles.botao} onPress={()=>handleLogin(dadosUser)}>
                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: StatusBar.currentHeight? StatusBar.currentHeight + 10 : 30,
    },
    label: {
        fontSize: 15,


    },
    botao: {
        width: "100%",
        backgroundColor: "#345cab",
        paddingVertical: 10,
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 5,
    },
    input: {
        padding: 13,
        backgroundColor: "#efefef",
        marginVertical: 10,
        borderRadius: 10,
    }
})