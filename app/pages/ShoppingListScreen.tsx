import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import AddItemForm from '../components/AddItemForm';
import ShoppingItem from '../components/ShoppingItem';
import { RootState } from '../redux/store';

const ShoppingListScreen = () => {
  const shoppingList = useSelector((state: RootState) => state.shoppingList);

  return (
    <View style={styles.container}>
      <AddItemForm />
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ShoppingItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
});

export default ShoppingListScreen;