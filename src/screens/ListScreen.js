import { StyleSheet, Text, View, FlatList, Button, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

const ListScreen = ({navigation}) => {
    const friends = [
        {name: "friend 1",
        age: "20"
        },
        {name: "friend 2",
        age: "24"
        },
        {name: "friend 3",
        age: "65"
        },
        {name: "friend 4",
        age: "80"
        },
        {name: "friend 5",
        age: "34"
        },
        {name: "friend 6",
        age: "16"
        },
        {name: "friend 7",
        age: "98"
        },
        {name: "friend 8",
        age: "54"
        },
        {name: "friend 9",
        age: "66"
        },  
    ];


  return (
    <SafeAreaView>
        <FlatList data={friends}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={friend => friend.name}
                    renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}/>
        <Button
            title="Go to Components"
            onPress={() => navigation.navigate("Components")}
        />
    </SafeAreaView>  
    );
};




const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginLeft: 10,
    }
})

export default ListScreen