import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  caja1: {
    // flex: 3, // 3 + 2 + 1 = 6, toma el 0.3 de 6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
    // alignSelf: 'flex-start',
  },
  caja2: {
    // flex: 2, // 3 + 2 + 1 = 6, toma el 0.2 de 6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
    // alignSelf: 'center',
  },
  caja3: {
    // flex: 1, // 3 + 2 + 1 = 6, toma el 0.1 de 6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
    // alignSelf: 'flex-end',
  },
});
