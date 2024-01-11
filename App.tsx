/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import ColoredText from 'react-native-colored-text';

import Speedometer from './react-native-speedometer-plus/src';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello, World!</Text>
      <ColoredText textColor="red">This text hhh is red!</ColoredText>

      <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
        <Speedometer
          value={65}
          size={240}
          // labelStyle={{ fontSize: 24 }}
          // minValue={1}
          // maxValue={6}
          labels={[
            {
              name: 'BPM',
              labelColor: '#CBDFE5',
              activeBarColor: '#CBDFE5',
            },
            {
              name: 'Very weak',
              labelColor: '#22C65F',
              activeBarColor: '#22C65F',
            },
            {
              name: 'So-so',
              labelColor: '#FBDE42',
              activeBarColor: '#FBDE42',
            },
          ]}
          innerCircleStyle={{
            backgroundColor: '#E3ECFA',
          }}
        />

        {/* <Speedometer
          value={80}
          size={150}
          // labelStyle={{ fontSize: 24 }}
          // minValue={1}
          // maxValue={6}
          labels={[
            {
              name: 'Pathetically',
              labelColor: '#CBDFE5',
              activeBarColor: '#CBDFE5',
              color: "red"
            },
            {
              name: 'Very weak',
              labelColor: '#22C65F',
              activeBarColor: '#22C65F',
            },
            {
              name: 'So-so',
              labelColor: '#FBDE42',
              activeBarColor: '#FBDE42',
            },
          ]}
          innerCircleStyle={{
            backgroundColor: '#E3ECFA',
          }}
          // labelStyle= {{
          //   color: "blue"
          // }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;