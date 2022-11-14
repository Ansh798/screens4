import React from 'react';
import { StyleSheet, Text, View,Image,Modal, } from 'react-native';
const S4 = () =>{
  return (
   <View 
//    style={styles.centeredView}
   >
    {/* <Text>new text</Text> */}
    <Modal  transparent={true} visible={true}>
        <View style={{backgroundColor:"#000000aa",flex:1}}>
        <View style={styles.modal}>
            <View style={{flex:1,}}>
                <Image 
                style={styles.imageStyle}
                source={require("./assets/sad-smiley.jpg")} 
                /> 
            </View>
            <View style={{flex:1}}>
            <Text style={{textAlign:"center"}}>
                Sorry, the email address you provided is not an RM email address. Please check your email address. 
            </Text>
            </View>
        </View>
        </View>
    </Modal>

   </View>
  );
}

const styles = StyleSheet.create({
    // centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 99,
    //   },
    imageStyle:{
        justifyContent:"center",
        textAlign:"center",
        height: 57.5,
        width: 57.5,
        left: 75.75,
        top: 130.75,
        borderRadius: 28.75,
        resizeMode:"center",
    },
    modal:{
        flex:1,
        // textAlign:"center",
        justifyContent:"center",
        margin:70,
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        padding:40,
        height: 486,
        width: 290,
        right: 35,
    }
});

export default S4;