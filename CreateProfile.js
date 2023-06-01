import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
 
export default function CreateProfile({navigation}) {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [weight, setweight] = useState("");
  const [conditions, setconditions] = useState("");
  const [textcolor, setcolor] = useState('white');
  const [username, setusername] = useState(global.usrename);
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.bold}>Create Your Profile</Text>
 
      <TextInput style={styles.email} 
      placeholder='name' 
      onChangeText={(val)=>setname(val)}>
      </TextInput>
 
      <TextInput style={styles.email} 
      placeholder='age' 
      onChangeText={(val)=>setage(val)}>
      </TextInput>
 
      <TextInput style={styles.email}
      placeholder='weight' 
      onChangeText={(val)=>setweight(val)}>
      </TextInput>
 
      <TextInput style={styles.email}
      placeholder='Conditions (e.g. Diabetes Arthritis)' 
      onChangeText={(val)=>setconditions(val)}>
      </TextInput>
 
      <Pressable
      onPressOut={() => {
        sendinfo(name, age, weight)
        .then((success) => {
          if (success) {
            // bring user to goals page
            navigation.navigate('Goals');
          } else {
            setcolor('red');
          }
        })
      }}
      style={styles.createButton}>
      <Text style={styles.bold}>Create Profile</Text>
    </Pressable>
 
    <Text style={{color: textcolor}}>Something went wrong please try again</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 
export async function sendinfo (name, age, weight) {
  const state = { isTrue: true };
  console.log("inside of sendinfo");
  const us = global.usrename;
  console.log(us);
  console.log(name);
  console.log(age);
  console.log(weight);
  try {
    const response = await fetch("https://madhacksbackend.fly.dev/addUserData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ us, name, age, weight})
    });
    console.log(response.status);
    console.log(response.headers);
    const result = await response.json();
    //console.log("results ft wooooohooo");
    console.log(result);
    if (result.status != 200) {
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
