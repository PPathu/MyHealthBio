import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
 
export default function Goals({navigation}) {
  const [buttoncolor1, setbuttoncolor1] = useState('white');
  const [textcolor1, settextcolor1] = useState('black');
  const [buttoncolor2, setbuttoncolor2] = useState('white');
  const [textcolor2, settextcolor2] = useState('black');
  const [buttoncolor3, setbuttoncolor3] = useState('white');
  const [textcolor3, settextcolor3] = useState('black');
  const [invalidcolor, setinvalidcolor] = useState('white');
  const [goal1, setgoal1] = useState('Easy: Eat less carbs');
  const [goal2, setgoal2] = useState('Medium: Eat more carbs');
  const [goal3, setgoal3] = useState('Hard: Eat more sugar');
  const [warningtext, setwarningtext] = useState('');
  return (
 
    <View style={styles.container}>
      <Text style={styles.bold}>Recommended Goals</Text>
      <Pressable
      onPressOut={() => {
        if (buttoncolor1 === 'white') {
          setbuttoncolor1('#00bfff');
          settextcolor1('white');
        } else {
          setbuttoncolor1('white');
          settextcolor1('black');
        }
        setbuttoncolor2('white');
        settextcolor2('black');
        setbuttoncolor3('white');
        settextcolor3('black');
      }}
      style={[styles.boxes, {backgroundColor: buttoncolor1}]}><Text style={[{color: textcolor1}, {fontWeight: 'bold'}]}>{goal1}</Text></Pressable>
      <Pressable
      onPressOut={() => {
        if (buttoncolor2 === 'white') {
          setbuttoncolor2('#00bfff');
          settextcolor2('white');
        } else {
          setbuttoncolor2('white');
          settextcolor2('black');
        }
        setbuttoncolor1('white');
        settextcolor1('black');
        setbuttoncolor3('white');
        settextcolor3('black');
      }}
      style={[styles.boxes, {backgroundColor: buttoncolor2}]}><Text style={[{color: textcolor2}, {fontWeight: 'bold'}]}>{goal2}</Text></Pressable>
      <Pressable
      onPressOut={() => {
        if (buttoncolor3 === 'white') {
          setbuttoncolor3('#00bfff');
          settextcolor3('white');
        } else {
          setbuttoncolor3('white');
          settextcolor3('black');
        }
        setbuttoncolor2('white');
        settextcolor2('black');
        setbuttoncolor1('white');
        settextcolor1('black');
      }}
      style={[styles.boxes, {backgroundColor: buttoncolor3}]}><Text style={[{color: textcolor3}, {fontWeight: 'bold'}]}>{goal3}</Text></Pressable>
      <Pressable 
      onPressOut={() => {
        if (buttoncolor1 === '#00bfff') {
          sendgoal(goal1).then((success) => {
            if (success) {
              // navigate to main page
              navigation.navigate('BottemTab');
            } else {
              setwarningtext('Failed to save goal please try again');
              setinvalidcolor('red');
            }
          })
        } else if (buttoncolor2 === '#00bfff') {
          sendgoal(goal2).then((success) => {
            if (success) {
              // navigate to main page
              navigation.navigate('BottemTab');
            } else {
              setwarningtext('Failed to save goal please try again');
              setinvalidcolor('red');
            }
          })
        } else if (buttoncolor3 === '#00bfff') {
          sendgoal(goal3).then((success) => {
            if (success) {
              // navigate to main page
              navigation.navigate('BottemTab');
            } else {
              setwarningtext('Failed to save goal please try again');
              setinvalidcolor('red');
            }
          })
        } else {
          setwarningtext('Please choose a goal');
          setinvalidcolor('red');
        }
      }}
      style={styles.createButton}>
      <Text>Submit</Text>
      </Pressable>
     <Text style={{color: invalidcolor}}>{warningtext}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 
export async function sendgoal (goal) {
  console.log("cboys");
  const state = { isTrue: true };
  try {
    const response = await fetch("https://madhacksbackend.fly.dev/goal", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goal })
    });
    console.log(response.status);
    console.log(response.headers);
    const result = await response.json();
    //console.log("results ft wooooohooo");
    console.log(result);
    if (result.message === "unsuccessful") {
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
  boxes: {
    backgroundColor: "white",
    borderColor: "#00bfff",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    width: 200,
    marginTop: 20,
    marginBottom: 20
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