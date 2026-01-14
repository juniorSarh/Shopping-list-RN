import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem, ShoppingItem as ItemType, toggleItem } from '../redux/actions';
import EditItemModal from './EditItemModal';

interface Props {
  item: ItemType;
}

const ShoppingItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleEdit = () => {
    setIsEditModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsEditModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.leftSection}>
            <Switch
              value={item.purchased}
              onValueChange={() => dispatch(toggleItem(item.id) as any)}
              trackColor={{ false: '#e5e7eb', true: '#3b82f6' }}
              thumbColor={item.purchased ? '#ffffff' : '#f3f4f6'}
            />
            
            <View style={styles.textContainer}>
              <Text style={[styles.itemText, item.purchased && styles.purchasedText]}>
                {item.name}
              </Text>
              <Text style={[styles.quantityText, item.purchased && styles.purchasedText]}>
                Qty: {item.quantity}
              </Text>
            </View>
          </View>
          
          <View style={styles.rightSection}>
            <TouchableOpacity 
              style={[styles.button, styles.editButton]} 
              onPress={handleEdit}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.deleteButton]} 
              onPress={() => dispatch(deleteItem(item.id) as any)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <EditItemModal
        visible={isEditModalVisible}
        item={item}
        onClose={handleCloseModal}
      />
    </>
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