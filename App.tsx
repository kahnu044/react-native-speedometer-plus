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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Speedometer
          value={65}
          size={240}
          // labelStyle={{ fontSize: 24 }}
          // minValue={1}
          // maxValue={6}
          labels={[
            {
              name: 'BPM',
              labelColor: '#cadee4',
              activeBarColor: '#cadee4',
            },
            {
              name: 'Very weak',
              labelColor: '#40d371',
              activeBarColor: '#40d371',
            },
            {
              name: 'So-so',
              labelColor: '#fbde42',
              activeBarColor: '#fbde42',
            },
          ]}
          innerCircleStyle={{
            backgroundColor: '#e0e9f7',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
