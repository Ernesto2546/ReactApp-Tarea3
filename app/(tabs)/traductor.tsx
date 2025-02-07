import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Función para convertir números a letras
const convertirNumeroALetras = (num: number): string => {
  const unidades = [
    '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
  ];
  const decenas = [
    '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
  ];
  const centenas = [
    '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
  ];

  if (num < 20) return unidades[num];
  if (num < 100) return `${decenas[Math.floor(num / 10)]} ${unidades[num % 10]}`.trim();
  if (num < 1000) return `${centenas[Math.floor(num / 100)]} ${convertirNumeroALetras(num % 100)}`.trim();
  if (num === 1000) return 'mil';

  return 'Número fuera de rango';
};

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const traducir = () => {
    const num = parseInt(numero);
    if (!isNaN(num) && num >= 1 && num <= 1000) {
      setResultado(convertirNumeroALetras(num));
    } else {
      setResultado('Número fuera de rango');
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.colorText}>Ingrese un número (1-1000):</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={numero} onChangeText={setNumero} />
        <Button title="Traducir" onPress={traducir} />
        {resultado && <Text style={styles.resultado}>Resultado: {resultado}</Text>}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white', 
    textAlign: 'center',
  },
  colorText: {
    color: 'white', 
    textAlign: 'center',
    margin: 10,
  },
  resultado: {
    color: 'white',
    textAlign: 'center',
    margin: 20,
  },
});

export default Traductor;
