/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';

import ColoredText from 'react-native-colored-text';

import { SpeedoMeterPlus } from './react-native-speedometer-plus';

import HeartIcon from './react-native-speedometer-plus/src/images/heart-icon.png';

const App = () => {
  const getBreathingValue = () => {
    const GraphData = {
      vitals: {
        heartRate: [],
        breathing: [],
        systolic: [],
        diastolic: [],
      },
      physiological: {
        heartRateVariability: [],
        cardiacWorkLoad: [],
      },
      mental: {
        mental: [],
      },
      physical: {
        bodyMassIndex: [],
        waistHeight: [],
        bodyShape: [],
      },
      risks: {
        cvdRisk: [],
        heartAttack: [],
        riskStroke: [],
      },
    };

    //pushing colors to breathing============
    GraphData.vitals.breathing.push({
      name: '',
      labelColor: '#fff567',
      activeBarColor: '#fff567',
    });
    for (let i = 1; i <= 5; i++) {
      GraphData.vitals.breathing.push({
        name: '',
        labelColor: '#9efb59',
        activeBarColor: '#9efb59',
      });
    }
    for (let i = 1; i <= 1; i++) {
      GraphData.vitals.breathing.push({
        name: '',
        labelColor: '#fff567',
        activeBarColor: '#fff567',
      });
    }

    return GraphData.vitals.breathing;
  };

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

          <SpeedoMeterPlus
            value={14.7}
            size={190}
            minValue={6}
            maxValue={46}
            allowedDecimals={1}
            labelStyle={{fontSize: 20}}
            wrapperStyle={{
              marginBottom: 70,
            }}
            // labelStyle={{ fontSize: 24 }}
            // minValue={1}
            // maxValue={6}
            labels={getBreathingValue()}
            innerCircleStyle={{
              backgroundColor: '#e0e9f7',
            }}
            // innerFullCircleStyle={{
            //   backgroundColor: '#e0e9f7',
            // }}
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
