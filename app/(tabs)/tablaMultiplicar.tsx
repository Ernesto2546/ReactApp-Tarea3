import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TablaMultiplicar: React.FC = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState<string[]>([]);

  const calcularTabla = () => {
    const num = parseInt(numero);
    if (!isNaN(num)) {
      const tabla = Array.from({ length: 13 }, (_, i) => `${num} x ${i + 1} = ${num * (i + 1)}`);
      setResultado(tabla);
    }
  };

  return (
      <View style={styles.container}>
        <Text style={styles.colorText}>Ingrese un número:</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={numero} onChangeText={setNumero} />
        <Button title="Calcular" onPress={calcularTabla} />
        {resultado.map((linea, index) => (
          <Text style={styles.colorText} key={index}>{linea}</Text>
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        width: '80%',
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
      },
      colorText: {
        color: 'white', 
        textAlign: 'center',
        margin: 10,
      },
    
  });
  

export default TablaMultiplicar;
