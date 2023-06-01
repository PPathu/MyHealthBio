import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
const pressGetStarted = () => {
  navigation.navigate('GetStarted')
}
const pressLogin = () => {
  navigation.navigate('Login')
}


return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Welcome To MyHealth</Text>
      <Text></Text>

      <View style={styles.buttonContainer}>
      
      <Button title='Get Started' onPress={pressGetStarted}></Button>
      <Button title='Login' onPress={pressLogin}></Button>
      
      
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

boldText: {
  fontWeight: '800',
  marginTop: 120
},

buttonContainer: {
  marginBottom: 400
}
});
