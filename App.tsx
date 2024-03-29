import { NativeBaseProvider, Box, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

import { Loading } from './src/components/loading';
import { Routes } from './src/routes/index';

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
      
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>

  );
}

