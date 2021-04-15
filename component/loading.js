import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Overlay } from 'react-native-elements'

export default function loading({isVisible, Text }) {
    return (
       <Overlay
            isVisible = {isVisible}
            windowBackgoundColor = "rgba(0,0,0,0.5)"
            overlayBackgroundColor= "trasparen"
            overlayStyle={styles.Overlay}
            >
            <View>
                <ActivityIndicator/>
                {
                text && <Text>{text}</Text>
                 }
             </View>

        </Overlay>

    )
}

const styles = StyleSheet.create({
    Overlay : {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#3db5e3",
        borderWidth: 2,
        borderRadius: 10
    }

})

