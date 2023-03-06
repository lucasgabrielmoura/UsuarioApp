import { NavigationProp } from "@react-navigation/native";

export type propsNavigationStack = {
    UserList: undefined,
    UserForm: {
        name?: string,
    } | undefined
}

export type propsStack = NavigationProp<propsNavigationStack>;