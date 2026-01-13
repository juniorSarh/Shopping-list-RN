import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import AddItemForm from '../components/AddItemForm';
import ShoppingItem from '../components/ShoppingItem';
import { RootState } from '../redux/store';

const ShoppingListScreen = () => {
  const shoppingList = useSelector((state: RootState) => state.shoppingList);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Shopping List</Text>
        <Text style={styles.headerSubtitle}>
          {shoppingList.length === 0 
            ? 'Start adding items to your list' 
            : `${shoppingList.length} item${shoppingList.length === 1 ? '' : 's'} in your list`
          }
        </Text>
      </View>
      
      <View style={styles.formContainer}>
        <AddItemForm />
      </View>
      
      <View style={styles.listContainer}>
        {shoppingList.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <View style={styles.emptyLine} />
              <View style={styles.emptyLine} />
              <View style={styles.emptyLine} />
            </View>
            <Text style={styles.emptyText}>Your shopping list is empty</Text>
            <Text style={styles.emptySubtext}>Add your first item above to get started</Text>
          </View>
        ) : (
          <FlatList
            data={shoppingList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ShoppingItem item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '400',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#ffffff',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyLine: {
    width: 40,
    height: 3,
    backgroundColor: '#d1d5db',
    marginVertical: 3,
    borderRadius: 2,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default ShoppingListScreen;