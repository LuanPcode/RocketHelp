import { NativeBaseProvider, Box, StatusBar } from 'native-base';
import {Signin} from './src/screens/Signin'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/loading';

import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      
      {fontsLoaded ? <Signin /> : <Loading />}
    </NativeBaseProvider>

  );
}

