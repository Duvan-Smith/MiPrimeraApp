import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  const onIncrementar = () => {
    setContador(contador + 1);
  };

  const onDecrementar = () => {
    setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <Fab title="-1" position="bl" onPress={onDecrementar} />
      <Fab title="+1" onPress={onIncrementar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
