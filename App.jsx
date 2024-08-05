import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './components/Home'
import { LOG } from './components/Login'
import { Nizami } from './components/PlaceHolder'
const Stack = createNativeStackNavigator()

const App = () => {
  const btnAction = () => {
    console.warn("button pressed")
  }
  return (
    <NavigationContainer >

      <Stack.Navigator>
        <Stack.Screen name='LOG IN' component={LOG}
          options={{
            headerTitle: () => <Button onPress={btnAction} title='left' />,
            headerRight: () => <Nizami />,
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTitleStyle: {
              fontSize: 25
            },
            headerTintColor: 'white'
          }} />
        <Stack.Screen name='HOME' component={Home} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}



export default App
