import { NavigationProp } from "@react-navigation/native";

export type propsNavigationStack = {
    UserList: undefined,
    UserForm: {
        id?: string,
        url?: string,
        height?: number
    } | undefined
}

export type propsStack = NavigationProp<propsNavigationStack>;