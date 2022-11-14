import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const S1 = () =>{
  return (
    <View style={styles.container}>
      <View style={{flex:3,backgroundColor:'red'}}>
      <Text>hi</Text>
      </View>

      <View style={{flex:2,alignContent:'Center'}}>

      <Text>Sign up/ Sign in Using</Text>
      <Image 
            style={styles.image} 
            source={require('./assets/google-logo.png')} 
      />
      <Text>_________________________</Text>
      </View>

      <View flex >
        <Text style={{ textAlign:'right',}}>
          If you are a relationship Manager,Login Here
        </Text>
        <Text>Privacy policy and terms of service.</Text>
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
  image:{
    justifyContent: "center",
    height: 45,
    width: 285,
    // left: 10,
    right:70,
    top: 10,
    // borderRadius:100,
  },
});

export default S1;