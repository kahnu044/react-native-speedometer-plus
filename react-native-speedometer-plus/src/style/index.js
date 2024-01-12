import { StyleSheet, Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    alignSelf: 'center',
  },
  circleWrapper: {
    overflow: 'hidden',
  },
  outerCircle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: '#ffffff',
    backgroundColor: '#e6e6e6',
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  imageWrapper: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
  },
  image: {
    resizeMode: 'stretch',
    height: width - 10,
    width: width - 20,
  },
  innerHalfCircle: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: width * 0.6,
    height: (width / 2) * 0.6,
    borderTopLeftRadius: width / 2 - 10,
    borderTopRightRadius: width / 2 - 10,
  },
  innerFullCircle: {
    position: 'absolute',
    backgroundColor: "#FFFFFF",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  innerFullCircleLabelWrapper: {
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  innerLabelValue: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  innerLabelNote: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#000000",
    textTransform: "uppercase",
  },
  labelWrapper: {
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  labelNote: {
    fontSize: 10,
    fontWeight: 'bold',
    color: "#555D6B",
    textTransform: "uppercase",
  },
});