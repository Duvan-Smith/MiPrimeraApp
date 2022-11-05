import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';

const App = () => {
  return (
    // <SafeAreaView style={{height: 400, width: 300}}>
    <SafeAreaView style={{flex: 1}}>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
