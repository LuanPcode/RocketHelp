import { NativeBaseProvider, Box } from 'native-base';
import {Signin} from './src/screens/Signin'

import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Signin />
    </NativeBaseProvider>
    
  );
}

