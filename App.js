import React, { useCallback, useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold }
  from '@expo-google-fonts/montserrat';


import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratReguar": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await SplashScreen.preventAutoHideAsync();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  /*
    if (!fonteCarregada) {
      <SplashScreen />
    }
  */

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}


