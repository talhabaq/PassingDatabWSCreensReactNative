import { View, Text, Button, TextInput } from 'react-native'


export const Home = (props) => {
  const {name , age}=props.route.params
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>HOME</Text>
        <Text style={{ fontSize: 30 }}>NAME: {name}</Text>
        <Text style={{ fontSize: 30 }}>AGE: {age}</Text>
      </View>
    )
  }
  
