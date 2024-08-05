import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'


export const LOG = (props) => {
  const [name,setName]=useState("")
    const [age,setAge]=useState("")
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>LOG IN </Text>
        <TextInput style={{borderColor:"darkgreen", borderWidth:5,borderRadius:20, fontSize:22}} placeholder='enter name'
        onChangeText={(name)=>{setName(name)}}/>
          <TextInput style={{borderColor:"darkgreen", borderWidth:5,borderRadius:20, fontSize:22}} placeholder='enter age'
        onChangeText={(age)=>{setAge(age)}}/>
        <Button title='go to home page' onPress={() => props.navigation.navigate("HOME",{name,age})} />
      </View>
    )
  }
