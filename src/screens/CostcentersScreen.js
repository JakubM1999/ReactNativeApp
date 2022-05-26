//npm install --save react-native-autocomplete-dropdown
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

console.log(AutocompleteDropdown)

const dataList = [
    {id: "1",
    title: "Þurfa"},
    {id: "2",
    title: "Éta"},
    {id: "3",
    title: "Ferðast"},
    {id: "4",
    title: "Borða"},
    {id: "5",
    title: "Æfa"},
    {id: "6",
    title: "Qka"},
    {id: "8",
    title: "342"},
    {id: "12",
    title: "!$$%%&"},
    {id: "13",
    title: "Boo"},
    {id: "14",
    title: "Pizza"},
    {id: "15",
    title: "Azzip"},
    {id: "16",
    title: "blabla"}

]

const CostcentersScreen = () => {
    const [selectedItem, setSelectedItem] = useState(null);
  return (
    <View>
      <AutocompleteDropdown 
      clearOnFocus={false}
      clearOnBlur={true}
      dataSet={dataList}
      onSelectItem={setSelectedItem}
      suggestionsListMaxHeight={200}
      textInputProps={{
            placeholder: "hello There",
      }}
      />
    </View>
  )
}

export default CostcentersScreen

const styles = StyleSheet.create({})