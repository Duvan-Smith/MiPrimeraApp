import {SafeAreaView} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';

const App = () => {
  return (
    // <SafeAreaView style={{height: 400, width: 300}}>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#28425B', //Se agrega para que sea visible el color en pantalla cortada
      }}>
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
