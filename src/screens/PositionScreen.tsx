import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cagaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 400,
    height: 400,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    top: 50,
    left: 100,
  },
  cagaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    top: -10,
  },
});
