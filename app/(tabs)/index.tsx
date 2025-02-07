import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenidos a mi App con React Native {'\n'}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Perfil {'\n'}</ThemedText>
          <Image source={require('@/assets/images/FT.jpg')} style={styles.foto}/> 
        <ThemedText style={styles.estiloTexto}>     
              Ernesto Saviñon {'\n'}
              ernestonicolas2546@gmail.com {'\n'}
          <ThemedText type="defaultSemiBold">
              Diseñador Web {'\n'}
          </ThemedText>
        </ThemedText>
      </ThemedView>
      
      <ThemedView><ThemedText><HelloWave /></ThemedText></ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  stepContainer: {
    gap: 3,
    marginBottom: 8,
    width: '102%',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  foto: {
    width: 110,
    height: 110,
    right: 0,
    top: 0,
    position: 'absolute',
    borderRadius: 10,
  },
  estiloTexto: {
    fontSize: 16,
  }
});
