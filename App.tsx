import {SafeAreaView} from 'react-native';
import {FlexScreen} from './src/screens/FlexScreen';

const App = () => {
  return (
    // <SafeAreaView style={{height: 400, width: 300}}>
    <SafeAreaView style={{flex: 1}}>
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
