import React from "react";
import { Image, Text, View } from "react-native";
import { ButtonX } from "swxform";
import { showModal } from "swxnavigation";
import LoginForm from "../components/LoginForm";

export class Home extends React.Component {
    render(): React.ReactNode {
        return <View style={{ flex: 1 ,alignItems:"center",justifyContent:"center"}}>
            <ButtonX onPress={() => { showModal({ content: <LoginForm />, style: { paddingVertical: 20 } }) }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ height: 30, width: 30 }} source={require('../../assets/images/sm.png')} />
                    <Text style={{ marginLeft: 10, fontSize: 14 }}>Show Login Modal</Text>
                </View>
            </ButtonX>
        </View>
    }
}