import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem, editItem, ShoppingItem as ItemType, toggleItem } from '../redux/actions';

interface Props {
  item: ItemType;
}

const ShoppingItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleSave = () => {
    dispatch(editItem({ ...item, name, quantity }) as any);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(item.name);
    setQuantity(item.quantity);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <Switch
            value={item.purchased}
            onValueChange={() => dispatch(toggleItem(item.id) as any)}
            trackColor={{ false: '#e5e7eb', true: '#3b82f6' }}
            thumbColor={item.purchased ? '#ffffff' : '#f3f4f6'}
          />
          
          {isEditing ? (
            <View style={styles.editContainer}>
              <TextInput
                value={name}
                onChangeText={setName}
                style={[styles.input, styles.nameInput]}
                placeholder="Item name"
                placeholderTextColor="#9ca3af"
              />
              <TextInput
                value={quantity}
                onChangeText={setQuantity}
                style={[styles.input, styles.quantityInput]}
                placeholder="Quantity"
                keyboardType="numeric"
                placeholderTextColor="#9ca3af"
              />
            </View>
          ) : (
            <View style={styles.textContainer}>
              <Text style={[styles.itemText, item.purchased && styles.purchasedText]}>
                {item.name}
              </Text>
              <Text style={[styles.quantityText, item.purchased && styles.purchasedText]}>
                Qty: {item.quantity}
              </Text>
            </View>
          )}
        </View>
        
        <View style={styles.rightSection}>
          {isEditing ? (
            <View style={styles.editButtons}>
              <TouchableOpacity 
                style={[styles.button, styles.saveButton]} 
                onPress={handleSave}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, styles.cancelButton]} 
                onPress={handleCancel}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity 
              style={[styles.button, styles.editButton]} 
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={[styles.button, styles.deleteButton]} 
            onPress={() => dispatch(deleteItem(item.id) as any)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  quantityText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  purchasedText: {
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
  editContainer: {
    flex: 1,
    marginLeft: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  nameInput: {
    flex: 2,
    marginRight: 8,
  },
  quantityInput: {
    flex: 1,
    minWidth: 80,
  },
  editButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#f3f4f6',
    marginBottom: 8,
  },
  editButtonText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#10b981',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#f3f4f6',
  },
  cancelButtonText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#ef4444',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ShoppingItem;