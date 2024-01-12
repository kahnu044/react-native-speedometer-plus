# React Native Speedometer Plus

[![npm version](https://badge.fury.io/js/react-native-speedometer-plus.svg)](https://github.com/kahnu044/react-native-speedometer-plus)


## Description

React Native Speedometer Plus is a customizable speedometer component for your React Native applications. Easily integrate a sleek and visually appealing speedometer to display values in a user-friendly way.

## Installation

```bash
npm install react-native-speedometer-plus
```

## Usage
```bash
import React from 'react';
import { View } from 'react-native';
import {SpeedoMeterPlus} from 'react-native-speedometer-plus';

const YourComponent = () => {
  return (
    <View>
      {/* Your other components */}
      <SpeedoMeterPlus
        value={50}
        size={200}
        minValue={0}
        maxValue={100}
        // Customize other props as needed
      />
      {/* Your other components */}
    </View>
  );
};

export default YourComponent;
```
## Props
`value` (number, required): The current value to display on the speedometer.

`size` (number): The size of the speedometer. Default is 200.

`minValue` (number): The minimum value of the speedometer. Default is 0.

`maxValue` (number): The maximum value of the speedometer. Default is 100.

`lables` (array): The labels prop allows you to customize the appearance of different levels on the speedometer.


`allowedDecimals` (number): Set the number of allowed decimal places for the displayed value.

`labelStyle` (object): Style object for the labels. For example, you can customize the font size using the `fontSize` property.

`wrapperStyle` (object): Style object for the outer wrapper of the speedometer. Use this to adjust the spacing or margins around the speedometer.

`innerCircleStyle` (object): Style object for the inner circle of the speedometer. You can customize the background color using the `backgroundColor` property.

`innerFullCircleStyle` (object): Style object for the full inner circle of the speedometer. Customize the background color using the `backgroundColor` property.

`showInnerLabelNote` (boolean): Set to `true` to display an inner label note.

`innerLabelNoteValue` (string): The value to be displayed as the inner label note.

`innerLabelNoteStyle` (object): Style object for the inner label note. Customize properties like `color` and `fontSize`.

`innerFullCircleValuePrefix` (string): Prefix for the value displayed on the full inner circle.

`innerFullCircleValueSuffix` (string): Suffix for the value displayed on the full inner circle.

## Labels

The `labels` prop allows you to customize the appearance of different levels on the speedometer. It should be an array of objects, where each object represents a level and has the following properties:

- `name` (string, required): The label or name associated with the level.
- `labelColor` (string, required): The color of the label text for that level.
- `activeBarColor` (string, required): The color of the active bar or segment of the speedometer for that level.

### Example:

```jsx
const allLabels = [
  {
    name: 'Test1',
    labelColor: 'blue',
    activeBarColor: 'blue',
  },
  {
    name: 'Test2',
    labelColor: '#fff590',
    activeBarColor: '#fff590',
  },
  {
    name: 'Test3',
    labelColor: '#ff7590',
    activeBarColor: '#ff7590',
  },
];

<SpeedoMeterPlus
  // Other props...
  labels={allLabels}
/>
```

## Additional Props Example:


```jsx
<SpeedoMeterPlus
  // Other props...
  allowedDecimals={1}
  labelStyle={{ fontSize: 20 }}
  wrapperStyle={{ marginBottom: 70 }}
  innerCircleStyle={{ backgroundColor: '#e0e9f7' }}
  innerFullCircleStyle={{ backgroundColor: 'green' }}
  showInnerLabelNote={false}
  innerLabelNoteValue="IDX"
  innerLabelNoteStyle={{ color: 'black', fontSize: 23 }}
  innerFullCircleValuePrefix="Y"
  innerFullCircleValueSuffix="%"
/>
```

We will update all other props.


## Author

- [Kahnu Charan Swain](https://github.com/kahnu044)