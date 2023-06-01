import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {AsyncStorage} from 'react-native';


export default function GetStarted({navigation}) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [textcolor, setcolor] = useState('white');
  return (
   

    <View style={styles.container}>
      <Text style={styles.bold}>Create an Account</Text>

      <TextInput style={styles.email} 
      placeholder='please enter email' 
      onChangeText={(val)=>setEmail(val)}>
      </TextInput>

      <TextInput style={styles.email} 
      placeholder='type password' 
      onChangeText={(val)=>setPassword(val)}>
      </TextInput>

      <TextInput style={styles.email} 
      placeholder='re-type password' 
      onChangeText={(val)=>setPassword2(val)}>
      </TextInput>

      <Pressable 
      onPressOut={() => {
        if (!check(email, password, password2)) {
          console.log("false");
          setcolor('red');
          navigation.navigate('CreateProfile');
          
        } else {
          setcolor('white');
          console.log(global.usrename);
          navigation.navigate('CreateProfile');
        }
      }}
      style={styles.createButton}>
        <Text style={styles.bold}>Create Account</Text>
      </Pressable>

      <Text style={{color: textcolor}}>Passwords do not match</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}



export function check (emails, passwordd, password2) {
  state = {isTrue: true};
  console.log(passwordd === password2 && passwordd !== "" && emails !== "");
  if (passwordd === password2 && passwordd !== "" && emails !== "") {
    // make the account
 
    console.log("2");
    fetch("https://madhacksbackend.fly.dev/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: emails, password: passwordd})
    }).then(res => {
      console.log("in");
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    }).then(
      (result) => {
        console.log(result);
        global.usrename = result.email;
        console.log("result");
      },
      (error) => {
        console.log(error);
        console.log("something went wrong");
      }
    );
  } else {
    // tell the user that the passwords do not match
    console.log("passwords do not match");
    return !state.isTrue;
  }
 
  return state.isTrue;
};

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
