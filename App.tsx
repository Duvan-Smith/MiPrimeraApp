import {SafeAreaView} from 'react-native';
import {PositionScreen} from './src/screens/PositionScreen';

const App = () => {
  return (
    // <SafeAreaView style={{height: 400, width: 300}}>
    <SafeAreaView style={{flex: 1}}>
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
