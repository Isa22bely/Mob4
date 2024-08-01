import { View, Text, FlatList } from "react-native";
import { styles } from ".//styles";
import React from "react";
import { useEffect, useState } from "react";
import { apiMessage } from "../../services/data";
import { IResponseMessage } from "../../services/data/Message";
import { useAuth } from "../../hook/auth";

export function Mensagem(){
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        loadMessage()
    }, [])

    interface itemMessage{
        item: IResponseMessage
    }

    const renderItem = (({ item }: itemMessage) => {
        return(
            <View style={styles.item}>
                <Text style={styles.itemText}>Título: {item.title}</Text>
                <Text style={styles.itemText}>Mensagem: {item.message}</Text>
            </View>
        )
    })
    return(
        <View style={styles.container}>
            {
                message.length > 0 && (
                    <FlatList
                        data={message}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
                        />
                )
            }
        </View>
    )
}