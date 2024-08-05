import { View, Text, Button, TextInput } from 'react-native'


export const LOG = (props) => {
    const name='BAQAR HUSSAIN'
    const age=50
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>LOG IN </Text>
        <Button title='go to home page' onPress={() => props.navigation.navigate("HOME",{name,age})} />
      </View>
    )
  }
