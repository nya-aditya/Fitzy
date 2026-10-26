import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.brand}>FITZY</Text>
        <Text style={styles.tagline}>Track. Train. Eat. Improve.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    fontSize: 44,
    fontWeight: '800',
    letterSpacing: 4,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '500',
    color: '#94A3B8',
    letterSpacing: 1.2,
    textAlign: 'center',
  },
});
