/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components'

import { SignIn } from './src/screens/SignIn'
import theme from './src/theme'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
