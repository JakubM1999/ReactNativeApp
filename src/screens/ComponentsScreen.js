import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ComponentsScreen = ({navigation}) => {
  const name = "Jakub"
    return(
        <View>
            <Text style={styles.textStyles}>The react native is great!</Text>
            <Text style={styles.subHeader}>My name is {name}</Text>
            <Button title="Go back home" onPress={() => navigation.navigate("Home")}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 40,
    },
    subHeader: {
        fontSize: 20
    }
})

export default ComponentsScreen