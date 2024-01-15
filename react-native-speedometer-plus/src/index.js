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

class SpeedoMeterPlus extends Component {
  constructor(props) {
    super(props);
    this.SpeedoMeterPlusValue = new Animated.Value(props.defaultValue);
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
      innerFullCircleStyle,
      innerFullCircleLabelWrapperStyle,
      innerFullCircleValueStyle,
      innerFullCircleValuePrefix,
      innerFullCircleValueSuffix,
      showInnerLabelNote,
      innerLabelNoteValue,
      innerLabelNoteStyle,
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
      this.SpeedoMeterPlusValue,
      {
        toValue: limitValue(value, minValue, maxValue, allowedDecimals),
        duration: easeDuration,
        easing: Easing.linear,
        useNativeDriver,
      },
    ).start();

    const rotate = this.SpeedoMeterPlusValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg'],
    });

    const currentSize = validateSize(size, deviceWidth - 20);

    return (
      <View style={[style.wrapper, {
        width: currentSize,
        height: currentSize / 1.15,
      }, wrapperStyle]}
      >
        <View style={[style.outerCircle, {
          width: currentSize,
          height: currentSize / 2,
          borderTopLeftRadius: currentSize / 2,
          borderTopRightRadius: currentSize / 2,
        }, outerCircleStyle]}
        >
          {/* Coloring */}
          {labels.map((level, index) => {
            const circleDegree = 90 + (index * perLevelDegree);
            return (
              <View
                key={index}
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
            top: -(currentSize / 55),
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

          {/* innerHalfCircle */}
          <View style={[style.innerHalfCircle, {
            width: currentSize * 0.9,
            height: (currentSize / 2) * 0.9,
            borderTopLeftRadius: currentSize / 2,
            borderTopRightRadius: currentSize / 2,
          }, innerCircleStyle]}
          />
        </View>

        {/* innerFullCircle */}
        <View style={[style.innerFullCircle, {
          top: currentSize * 0.2,
          left: (((currentSize * 0.9) / 9) * 2),
          width: currentSize * 0.6,
          height: currentSize * 0.6,
          borderRadius: currentSize / 2,
        }, innerFullCircleStyle]} >

          <View style={[style.innerFullCircleLabelWrapper, innerFullCircleLabelWrapperStyle]}>
            <Text style={
              [style.innerLabelValue, { color: label.labelColor }, innerFullCircleValueStyle]}
            >
              {`${innerFullCircleValuePrefix}${limitValue(value, minValue, maxValue, allowedDecimals)}${innerFullCircleValueSuffix}`}
            </Text>

            {showInnerLabelNote && (label.name || innerLabelNoteValue) && (
              <Text style={
                [style.innerLabelNote, { color: label.labelColor }, innerLabelNoteStyle]}
              >
                {innerLabelNoteValue ? innerLabelNoteValue : label.name}
              </Text>
            )}

          </View>
        </View>
      </View>
    );
  }
}

SpeedoMeterPlus.defaultProps = {
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
  needleImage: require('./images/arrow-needle.png'),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  innerFullCircleStyle: {},
  labelWrapperStyle: {},
  innerFullCircleLabelWrapperStyle: {},
  innerFullCircleValueStyle: {},
  innerFullCircleValuePrefix: "",
  innerFullCircleValueSuffix: "",
  showInnerLabelNote: true,
  innerLabelNoteValue: "",
  innerLabelNoteStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
  useNativeDriver: true,
};

SpeedoMeterPlus.propTypes = {
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
  innerFullCircleStyle: PropTypes.object,
  innerFullCircleLabelWrapperStyle: PropTypes.object,
  innerFullCircleValueStyle: PropTypes.object,
  innerFullCircleValuePrefix: PropTypes.string,
  innerFullCircleValueSuffix: PropTypes.string,
  showInnerLabelNote: PropTypes.bool,
  innerLabelNoteValue: PropTypes.string,
  innerLabelNoteStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object,
  useNativeDriver: PropTypes.bool,
};

export { SpeedoMeterPlus };