import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Box Object Model</Text>
      <Text style={styles.description}> Box Object Model description</Text>
      <Text style={styles.buttoms}> Boton derecho</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
  },
  title: {
    // backgroundColor: 'red',
    fontSize: 20,
    // width: 150,
    borderWidth: 10,
    padding: 10,
    margin: 10,
  },
  description: {
    backgroundColor: 'white',
    fontSize: 10,
    borderWidth: 10,
    paddingHorizontal: 50,
    paddingVertical: 50,
    margin: 10,
  },
  buttoms: {
    borderWidth: 10,
    padding: 5,
    position: 'absolute',
    left: 5,
    bottom: 5,
    borderRadius: 30,
  },
});
