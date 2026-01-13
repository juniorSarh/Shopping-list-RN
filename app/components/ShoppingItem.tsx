import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
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

  return (
    <View style={styles.item}>
      <Switch
        value={item.purchased}
        onValueChange={() => dispatch(toggleItem(item.id) as any)}
      />
      {isEditing ? (
        <>
          <TextInput value={name} onChangeText={setName} style={styles.input} />
          <TextInput value={quantity} onChangeText={setQuantity} style={styles.input} />
          <Button title="Save" onPress={handleSave} />
        </>
      ) : (
        <>
          <Text style={item.purchased ? styles.purchased : styles.text}>
            {item.name} ({item.quantity})
          </Text>
          <Button title="Edit" onPress={() => setIsEditing(true)} />
        </>
      )}
      <Button title="Delete" onPress={() => dispatch(deleteItem(item.id) as any)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
  },
  text: { fontSize: 16 },
  purchased: { fontSize: 16, textDecorationLine: 'line-through', color: 'gray' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 6,
    marginBottom: 6,
    borderRadius: 4,
  },
});

export default ShoppingItem;