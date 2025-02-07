import { StyleSheet, View, Image, Platform, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      <ThemedView>
        <ThemedText style={styles.title} type="title">Experiencia</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText style={styles.estiloTexto}>Un video Sobre mi experiencia Personal.</ThemedText>
      </ThemedView>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  estiloTexto: {
    textAlign: 'center',
    padding: 10,
  }
});
