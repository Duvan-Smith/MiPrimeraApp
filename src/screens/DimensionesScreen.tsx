import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width: widthUse, height: heightUse} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cagaMorada,
            width: widthUse * 0.3,
          }}
        />
        <View style={styles.cagaNaranja} />
      </View>
      <Text style={styles.title}>W sin girar pantalla: {width}</Text>
      <Text style={styles.title}>H sin girar pantalla: {height}</Text>
      <Text style={styles.titleHook}>W con girar pantalla: {widthUse}</Text>
      <Text style={styles.titleHook}>H con girar pantalla: {heightUse}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cagaMorada: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  cagaNaranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  titleHook: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
});
