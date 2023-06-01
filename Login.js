import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
 
export default function GetStarted({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [textcolor, setcolor] = useState('white');
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Log In</Text>
 
      <TextInput style={styles.email} 
      placeholder='Username or Email' 
      onChangeText={(val)=>setEmail(val)}>
      </TextInput>
 
      <TextInput style={styles.email} 
      placeholder='Password' 
      onChangeText={(val)=>setPassword(val)}>
      </TextInput>
 
      <Pressable 
      onPressOut={() => {
        console.log("pp");
        console.log(!login(email, password));
        /*if (!login(email, password)) {
          console.log("falseeee");
          setcolor('red');
        } else {
          console.log("ayyyyyy");
          setcolor('white');
        }*/
        login(email, password)
  .then((isLoggedIn) => {
    console.log(`User is logged in: ${isLoggedIn}`);
    if(isLoggedIn) {
      navigation.navigate('BottemTab');
    } else {
      setcolor('red');
    }
  })
  .catch((error) => {
    console.log(`Error logging in: ${error}`);
  });
      }}
      style={styles.createButton}>
        <Text style={styles.bold}>Log In</Text>
      </Pressable>
 
      <Text style={{color: textcolor}}>Invalid Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export async function login (email, password) {
  console.log("cboys");
  const state = { isTrue: true };
  try {
    const response = await fetch("https://madhacksbackend.fly.dev/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    console.log(response.status);
    console.log(response.headers);
    const result = await response.json();
    //console.log("results ft wooooohooo");
    console.log(result);
    if (result.message === "username or passsword is incorrect") {
      //console.log(!state.isTrue);
      return !state.isTrue;
    }
    //console.log(state.isTrue);
    //console.log("my guy");
    return state.isTrue;
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
    return !state.isTrue;
  }
}
 
const styles = StyleSheet.create({
  invisible: {
    color: "white"
  },
  bold: {
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "25%"
  },
  email: {
    borderColor: "#00bfff",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 250
  },
  createButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 200,
    marginBottom: 200
  }
});