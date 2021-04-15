import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account() {
  
  return (
        <UserGuest/>
    )
    //return <loading isVisible={true} text="Cargando"/>
    return login ? <UserLogged/> :<UserGuest/>
}

const styles = StyleSheet.create({})