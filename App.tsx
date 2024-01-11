/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';

import ColoredText from 'react-native-colored-text';

import Speedometer from './react-native-speedometer-plus/src';

import HeartIcon from './assets/HeartIcon';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#f3f7fd',
            height: 320,
            width: 340,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            <Text style={{color: '#000B20'}}>Heart Rate Variability</Text>

            <Image
              source={require('./react-native-speedometer-plus/src/images/Heart.png')}
              style={styles.image}
            />
          </View>

          <Speedometer
            value={56}
            size={230}
            wrapperStyle={{
              marginBottom: 70,
            }}
            // labelStyle={{ fontSize: 24 }}
            // minValue={1}
            // maxValue={6}
            labels={[
              {
                name: 'BPM',
                labelColor: '#EC635F',
                activeBarColor: '#EC635F',
              },

              {
                name: 'So-so',
                labelColor: '#fbde42',
                activeBarColor: '#fbde42',
              },
              {
                name: 'MS',
                labelColor: '#40d371',
                activeBarColor: '#40d371',
              },
            ]}
            innerCircleStyle={{
              backgroundColor: '#e0e9f7',
            }}
          />
        </View>
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
  image: {
    width: 30,
    height: 30,
  },
});
