import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, Animated, ImageBackground, SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Progress from 'react-native-progress';






export default function UploadImage() {
    const [image, setImage] = useState(null);
 
    const addImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
 
      console.log(result);
 
      if (!result.canceled) {
        setImage(result.assets[0].uri);
        sendimage(image).then((success) => {
          if (!success) {
            console.log("unsuccessful homie");
          }
        })
      }
    };
    const [image2, setPost] = useState(null);
    const addPost = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
   
        console.log(result);
   
        if (!result.canceled) {
          //upload post
          setPost(result.assets[0].uri);
          sendimage(image2).then((success) => {
            if (!success) {
              console.log("unsuccessful homie");
            }
          })
        }
      };
  return (
    
    
    <View >
      

        <View style={progressBar1.container}> 
        <Progress.Bar Animated={true} indeterminateAnimationDuration={1000}  animationConfig={{}} progress={.5} width={200} height={15}/>
        </View>

        <View style={progressBar2.container}> 
        <Progress.Bar Animated={true} indeterminateAnimationDuration={1000}  animationConfig={{}} progress={.3} width={200} height={15}/>
        </View>

        <View style={progressBar3.container}> 
        <Progress.Bar Animated={true} indeterminateAnimationDuration={1000}  animationConfig={{}} progress={.7} width={200} height={15}/>
        </View>

            <View style={imageUploaderStyles.container}>
           
                {
                    
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                    
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    
            </View>

            <View style={postUploaderStyles.container}>
           
                {
                    image2  && <Image source={{ uri: image2 }} />
                    
                }
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                    
                        <TouchableOpacity onPress={addPost} style={imageUploaderStyles.uploadBtn} >
                        <Text style={postUploaderStyles.setFontSizeThree}>
                            <Text>{image2 ? 'Post' : 'Upload'} Image</Text>
                            </Text>
                            <AntDesign name="camera" size={16} color="black" />
                        </TouchableOpacity>
                    </View>
                    
            </View>


<View style={box.container}>
    <Text style={goalText.container} >
        <Text style={goalText.setFontSizeOne}>
        <Text style={{fontWeight: 'bold'}}>Goal 1: Do 25 push-ups </Text>
        </Text>
     </Text>
     <Text style={goalText.setFontSizeTwo}>
        <Text style={{fontWeight: 'bold'}}>Goal 2: Run 1-mile </Text>
        </Text>
</View>


    
            </View>
  );
}
 
 
export async function sendimage (image) {
  console.log("cboys");
  const state = { isTrue: true };
  try {
    const response = await fetch("https://madhacksbackend.fly.dev/picture", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image })
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



const goalText=StyleSheet.create({
    container: {
        top: 3,
        left: 48
    },
    setFontSizeOne: {
        fontSize: 20 
      },
      setFontSizeTwo: {
        fontSize: 20,
        top: 3,
        left: 48
      }
})

const box=StyleSheet.create({
container: {
    width: 300,
    height: 210,
    backgroundColor: '#1e90ff',
    left: 50,
    top: 180,

}

})

const progressBar1=StyleSheet.create({
    container: {
        top: 350,
        left: 100,
        
    }
})
const progressBar2=StyleSheet.create({
    container: {
        top: 375,
        left: 100,
        
    }
})

const progressBar3=StyleSheet.create({
    container: {
        top: 400,
        left: 100,
        
    }
})
const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:200,
        width:200,
        left: 100,
        top: 75,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.9,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
        
    },
    
    
})
const postUploaderStyles=StyleSheet.create({
    container:{
        
        height:120,
        width:200,
        left: 100,
        top: 140,
        position:'relative',
       
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:.9,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
        
    },
   setFontSizeThree: {
    fontSize: 12
   }
    
    
})