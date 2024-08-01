import { useState } from "react";
import { MessageTypes } from "../../navigations/message.navigation";
import { Alert, KeyboardAvoidingView, Text, TextInput, View } from "react-native"
import { styles } from ".//styles";
import { colors } from "../../styles/colors";
import { ButtonInterface } from "../../components/ButtonInterface";
import { apiMessage } from "../../services/data";
import { IMessage} from "../../services/data/Message";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";


