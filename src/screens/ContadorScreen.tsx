import {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Contador: {contador}
      </Text>

      <Button
        onPress={() => setContador(contador + 1)}
        title="Contar"
        color="#841584"
      />
    </View>
  );
};
