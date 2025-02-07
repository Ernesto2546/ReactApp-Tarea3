import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    setResultado(parseFloat(num1) + parseFloat(num2));
  };

  return (
      <View style={styles.container}>
        <Text>Ingrese dos números:</Text>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="Número 1" value={num1} onChangeText={setNum1} />
        <TextInput style={styles.input} keyboardType="numeric" placeholder="Número 2" value={num2} onChangeText={setNum2} />
        <Button title="Sumar" onPress={sumar} />
        {resultado !== null && <Text style={styles.resultado}>Resultado: {resultado}</Text>}
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
  },
  colorText: {
    color: 'white', 
  },
  resultado: {
    color: 'white',
    textAlign: 'center',
    margin: 20,
  },
});

export default Sumadora;
