import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import UserLogged from './UserLogged'

export default function UserGuest() {
    return (
        <ScrollView
            centerContent
            style = {styles.viewBody}
        >
            <Image
               source={require("../../assets/logo.png")} 
               resizeMode="contain"
               style={styles.image}
            />
            <Text style = {styles.title}>Accede a tu cuenta para continuar</Text>
            <Button
               buttonStyle={styles.button}
               title="Iniciar sesión"
               //onPress={() => console.log('UserLogged')}
               onPressIn={UserLogged}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal:30
    },
    image:{
        height: 250,
        width: "100%",
        marginBottom: 40,
        marginVertical: 20
    
    },
    title:{

        fontWeight:"bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign:"center",
        color: "#3db5e3",
        marginBottom: 40,

    },
    button:{
        backgroundColor: "#494f56",
        marginHorizontal: 40,

    }
})

