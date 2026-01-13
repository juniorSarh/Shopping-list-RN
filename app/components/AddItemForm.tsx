import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

const AddItemForm: React.FC = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name && quantity) {
      dispatch(addItem({
        id: Date.now(),
        name,
        quantity,
        purchased: false,
      }) as any);
      setName('');
      setQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Item Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item name..."
            value={name}
            onChangeText={setName}
            placeholderTextColor="#9ca3af"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Quantity</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter quantity..."
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Add to List" 
          onPress={handleAdd}
          color="#ffffff"
          disabled={!name || !quantity}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  buttonContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#3b82f6',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default AddItemForm;