import { View, Text } from "react-native";
import { styles } from "./styles";
import { useAuth } from "../../hook/auth";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonInterface } from "../../components/ButtonInterface";
import React from "react";

export function Perfil(){
    const { user, signOut } = useAuth()
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <ButtonInterface title="Sair" type="primary"
            onPressI={async () => await signOut()}/>
        </View>
    )
}