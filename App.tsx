import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/pages/UserList';
import UserForm from './src/pages/UserForm';
import { Button, Icon } from '@rneui/base';
import { propsNavigationStack, propsStack } from './src/TypeNav';
import { UsersProvider } from './src/context/usersContext';
import Login from './src/pages/Login';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Login/>
  );
}


//Isso Estava no Return

{/* <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='UserList' screenOptions={{
          headerStyle:{
            backgroundColor: "#345cab"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
        }}>
          <Stack.Screen name='UserList' component={UserList} options={({navigation}) =>{
            return {
              title: "Lista de Usuários",
              headerRight: ()=> (<Button onPress={()=>navigation.navigate("UserForm")} type='clear' icon={<Icon name='add' size={25} color={"#fff"} />}/>)
            }
          }} />
          <Stack.Screen name='UserForm' component={UserForm} options={{title: "Formulário de Usuários"}} />
    </Stack.Navigator>
  </NavigationContainer>
</UsersProvider> */}

