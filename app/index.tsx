import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Fitzy Brand Mark: Kinetic Upward Monogram */}
        <View style={styles.brandMark}>
          <View style={styles.kineticSymbol}>
            <View style={styles.symbolStem} />
            <View style={styles.symbolTopWing} />
            <View style={styles.symbolMidWing} />
          </View>
        </View>

        {/* FITZY Wordmark */}
        <Text style={styles.wordmark}>FITZY</Text>

        {/* Primary Tagline */}
        <Text style={styles.primaryTagline}>YOUR NEXT MOVE.</Text>

        {/* Athletic Precision Divider */}
        <View style={styles.divider} />

        {/* Supporting Tagline */}
        <Text style={styles.supportingTagline}>Track. Train. Eat. Improve.</Text>

        {/* Enter App Navigation CTA */}
        <Link href="/(tabs)" asChild>
          <Pressable style={styles.enterButton}>
            <Text style={styles.enterButtonText}>ENTER FITZY</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08090C',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  brandMark: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#0C0E14',
    borderWidth: 1,
    borderColor: '#181E2B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
  },
  kineticSymbol: {
    width: 28,
    height: 28,
    position: 'relative',
  },
  symbolStem: {
    position: 'absolute',
    left: 4,
    top: 2,
    width: 4.5,
    height: 24,
    borderRadius: 2.25,
    backgroundColor: '#FFFFFF',
  },
  symbolTopWing: {
    position: 'absolute',
    left: 5,
    top: 3,
    width: 18,
    height: 4.5,
    borderRadius: 2.25,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '-25deg' }],
  },
  symbolMidWing: {
    position: 'absolute',
    left: 5,
    top: 12,
    width: 13,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#10B981',
    transform: [{ rotate: '-25deg' }],
  },
  wordmark: {
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 8,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  primaryTagline: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: '#E2E8F0',
    textAlign: 'center',
  },
  divider: {
    width: 24,
    height: 1,
    backgroundColor: '#1E293B',
    marginVertical: 18,
  },
  supportingTagline: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1.5,
    color: '#64748B',
    textAlign: 'center',
  },
  enterButton: {
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 20,
    backgroundColor: '#0C0E14',
    borderWidth: 1,
    borderColor: '#181E2B',
  },
  enterButtonText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#10B981',
  },
});



