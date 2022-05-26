import React from 'react';
import { useState } from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  const [counter, setCount] = useState(0);
  return (
    <View style={styles.center}>
    <Text style={styles.text}>Hello world!</Text>
    <Button 
      onPress={() => navigation.navigate("List")}
      title="Go to List Demo"
    />
    <TouchableOpacity style ={styles.customButton} onPress={() => alert("Yoo!")}>
      <Text style={styles.headline}>Go to List demo</Text>
    </TouchableOpacity>

    <TouchableOpacity style ={styles.customButton} onPress={() => setCount(counter + 1)}>
      <Text style={styles.headline}>You've pressed me {counter}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center:{
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "space-around"
  },
  text: {
    fontSize: 30,
  },
  customButton: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#007AFF",
    justifyContent: "center"
  },
  headline: {
    textAlign: 'center', // <-- the magic
    color: "white",
    fontSize: 18,
    marginTop: 0,
    width: 200,
  }
});

export default HomeScreen;