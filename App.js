/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 const App: () => Node = () => {
   return (
       <View style = {styles.container}>
           <Text style = {styles.hello}>ReactNative_WorkHealth_Proejct</Text>
       </View>
   );
 };
 
 const styles = StyleSheet.create({
     container : {
       flex : 1, //View의 전체 영역을 말한다.
       justifyContent : 'center', // 가로 영역 센터
       alignItems : 'center' //세로 영역 센터
     },
     hello : {
       color : 'blue'
     }
 });
 
 export default App;
 