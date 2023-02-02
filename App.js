import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Appbar,
  Button,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import SahaFormu from './src/OwnerInterface/SahaFormu';

export default function App() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    "colors": {
      "primary": "rgb(0, 109, 59)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(153, 247, 181)",
      "onPrimaryContainer": "rgb(0, 33, 14)",
      "secondary": "rgb(79, 99, 83)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(210, 232, 212)",
      "onSecondaryContainer": "rgb(13, 31, 19)",
      "tertiary": "rgb(58, 100, 111)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(190, 234, 246)",
      "onTertiaryContainer": "rgb(0, 31, 38)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(251, 253, 248)",
      "onBackground": "rgb(25, 28, 25)",
      "surface": "rgb(251, 253, 248)",
      "onSurface": "rgb(25, 28, 25)",
      "surfaceVariant": "rgb(221, 229, 219)",
      "onSurfaceVariant": "rgb(65, 73, 66)",
      "outline": "rgb(113, 121, 113)",
      "outlineVariant": "rgb(192, 201, 191)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(46, 49, 46)",
      "inverseOnSurface": "rgb(240, 241, 236)",
      "inversePrimary": "rgb(125, 218, 155)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(238, 246, 239)",
        "level2": "rgb(231, 242, 233)",
        "level3": "rgb(223, 237, 227)",
        "level4": "rgb(221, 236, 225)",
        "level5": "rgb(216, 233, 222)"
      },
      "surfaceDisabled": "rgba(25, 28, 25, 0.12)",
      "onSurfaceDisabled": "rgba(25, 28, 25, 0.38)",
      "backdrop": "rgba(43, 50, 44, 0.4)"
    }
  };
  return (
    <PaperProvider theme={theme}>
        <Appbar elevated>
          <Appbar.Content title="Halı Saha Kayıt" />
        </Appbar>
        <SahaFormu/>     
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: 'center',

  },
});
