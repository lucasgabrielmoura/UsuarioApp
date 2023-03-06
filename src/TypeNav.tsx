import { NavigationProp } from "@react-navigation/native";

export type propsNavigationStack = {
    UserList: undefined,
    UserForm: {
        id?: number,
        name?: string,
        email?: string,
        avatarUrl?: string
    } | undefined
}

export type propsStack = NavigationProp<propsNavigationStack>;