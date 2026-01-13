import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import ShoppingListScreen from './pages/ShoppingListScreen';
import store from './redux/store';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.iconContainer}>
              <View style={styles.icon}>
                <View style={styles.iconLine} />
                <View style={styles.iconLine} />
                <View style={styles.iconLine} />
              </View>
            </View>
            <View>
              <View style={styles.titleContainer}>
                <View style={styles.titleLine} />
                <View style={styles.titleLine} />
              </View>
              <View style={styles.subtitleContainer}>
                <View style={styles.subtitleLine} />
                <View style={styles.subtitleLine} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Provider store={store}>
            <ShoppingListScreen />
          </Provider>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3b82f6',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 16,
  },
  icon: {
    width: 64,
    height: 64,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  iconLine: {
    width: 32,
    height: 3,
    backgroundColor: '#3b82f6',
    marginVertical: 4,
    borderRadius: 2,
  },
  titleContainer: {
    marginBottom: 8,
    alignItems: 'center',
  },
  titleLine: {
    width: 120,
    height: 8,
    backgroundColor: '#ffffff',
    marginVertical: 2,
    borderRadius: 4,
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  subtitleLine: {
    width: 80,
    height: 4,
    backgroundColor: '#93c5fd',
    marginVertical: 1,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
});