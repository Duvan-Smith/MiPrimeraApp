import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';

const App = () => {
  return (
    // <SafeAreaView style={{height: 400, width: 300}}>
    <SafeAreaView style={{flex: 1}}>
      <DimensionesScreen />
    </SafeAreaView>
  );
};

export default App;
