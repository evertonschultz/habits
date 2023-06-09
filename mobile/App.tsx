import './src/lib/dayjs'

import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <NativeBaseProvider>
      <AuthContextProvider>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
