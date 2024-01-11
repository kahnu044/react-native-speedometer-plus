import React, { Component } from 'react';
import {
  View,
  Image,
  Animated,
  Easing,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

// Utils
import { calculateDegreeFromLabels, calculateLabelFromValue, limitValue, validateSize } from './utils';

// Style
import style, { width as deviceWidth } from './style';

class SpeedometerPlus extends Component {
  constructor(props) {
    super(props);
    this.SpeedometerPlusValue = new Animated.Value(props.defaultValue);
  }

  render() {
    const {
      value,
      size,
      minValue,
      maxValue,
      easeDuration,
      allowedDecimals,
      labels,
      needleImage,
      wrapperStyle,
      outerCircleStyle,
      halfCircleStyle,
      imageWrapperStyle,
      imageStyle,
      innerCircleStyle,
      labelWrapperStyle,
      labelStyle,
      labelNoteStyle,
      useNativeDriver,
    } = this.props;
    const degree = 180;
    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(
      limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue,
    );
    Animated.timing(
      this.SpeedometerPlusValue,
      {
        toValue: limitValue(value, minValue, maxValue, allowedDecimals),
        duration: easeDuration,
        easing: Easing.linear,
        useNativeDriver,
      },
    ).start();

    const rotate = this.SpeedometerPlusValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg'],
    });

    const currentSize = validateSize(size, deviceWidth - 20);

    return (
      <View style={[style.wrapper, {
        width: currentSize,
        height: currentSize / 2,
      }, wrapperStyle]}
      >
        <View style={[style.outerCircle, {
          width: currentSize,
          height: currentSize / 2,
          borderTopLeftRadius: currentSize / 2,
          borderTopRightRadius: currentSize / 2,
        }, outerCircleStyle]}
        >
          {labels.map((level, index) => {
            const circleDegree = 90 + (index * perLevelDegree);
            return (
              <View
                key={level.name}
                style={[style.halfCircle, {
                  backgroundColor: level.activeBarColor,
                  width: currentSize / 2,
                  height: currentSize,
                  borderRadius: currentSize / 2,
                  transform: [
                    { translateX: currentSize / 4 },
                    { rotate: `${circleDegree}deg` },
                    { translateX: (currentSize / 4 * -1) },
                  ],
                }, halfCircleStyle]}
              />
            );
          })}

          {/* NeedleIconImage */}
          <Animated.View style={[style.imageWrapper,
          {
            top: -(currentSize / 15),
            transform: [{ rotate }],
          },
            imageWrapperStyle]}
          >
            <Image
              style={[style.image,
              {
                width: currentSize,
                height: currentSize,
              }, imageStyle]}
              source={needleImage}
            />
          </Animated.View>

          {/* Inner Circle */}
          <View style={[style.innerCircle, {
            width: currentSize * 0.9,
            height: (currentSize / 2) * 0.9,
            borderTopLeftRadius: currentSize / 2,
            borderTopRightRadius: currentSize / 2,
          }, innerCircleStyle]}
          />

        </View>

        {/* Inside circle 2 */}
        <View style={{
          top: ((currentSize * 0.9) / 9) * 2,
          left: (((currentSize * 0.9) / 9) * 2) - 4.5,
          position: "absolute",
          backgroundColor: "#FFFFFF",
          // opacity: 0.5,
          width: (((currentSize * 0.9) / 9) * 6) + 10,
          height: (((currentSize * 0.9) / 9) * 6) + 10,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center"
        }} >

          <View style={[style.labelWrapper, labelWrapperStyle]}>
            <Text style={
              [style.label, labelStyle, { color: label.labelColor }]}
            >
              {limitValue(value, minValue, maxValue, allowedDecimals)}
            </Text>
            <Text style={
              [style.labelNote, labelNoteStyle]}
            >
              {label.name}
            </Text>
          </View>
        </View>

      </View>
    );
  }
}

SpeedometerPlus.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  allowedDecimals: 0,
  labels: [
    {
      name: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      name: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      name: 'So-so',
      labelColor: '#f4ab44',
      activeBarColor: '#f4ab44',
    },
    {
      name: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      name: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      name: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  needleImage: require('./images/line-needle.png'),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
  useNativeDriver: true,
};

SpeedometerPlus.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  size: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  easeDuration: PropTypes.number,
  allowedDecimals: PropTypes.number,
  labels: PropTypes.array,
  needleImage: PropTypes.any,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  halfCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object,
  useNativeDriver: PropTypes.bool,
};

export default SpeedometerPlus;
