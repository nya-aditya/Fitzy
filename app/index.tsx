import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Ambient background glows for dark-mode depth */}
      <View style={styles.ambientGlowTop} />
      <View style={styles.ambientGlowBottom} />

      {/* Centered Brand Content */}
      <View style={styles.content}>
        {/* Minimal Brand Monogram Badge */}
        <View style={styles.emblemContainer}>
          <View style={styles.emblemInner}>
            <Text style={styles.emblemText}>F</Text>
          </View>
        </View>

        {/* Brand Name with Accent Indicator */}
        <View style={styles.brandRow}>
          <Text style={styles.brand}>FITZY</Text>
          <View style={styles.accentDot} />
        </View>

        {/* Minimal Accent Divider */}
        <View style={styles.accentDivider} />

        {/* Brand Tagline */}
        <Text style={styles.tagline}>Track. Train. Eat. Improve.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090D16',
    position: 'relative',
    overflow: 'hidden',
  },
  ambientGlowTop: {
    position: 'absolute',
    top: '22%',
    alignSelf: 'center',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(34, 197, 94, 0.08)',
  },
  ambientGlowBottom: {
    position: 'absolute',
    bottom: '22%',
    alignSelf: 'center',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(16, 185, 129, 0.04)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    zIndex: 1,
  },
  emblemContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  emblemInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(34, 197, 94, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.28)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emblemText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F8FAFC',
    letterSpacing: 0.5,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  brand: {
    fontSize: 46,
    fontWeight: '900',
    letterSpacing: 8,
    color: '#FFFFFF',
  },
  accentDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#22C55E',
    marginLeft: 2,
    marginBottom: 4,
  },
  accentDivider: {
    width: 36,
    height: 2,
    borderRadius: 1,
    backgroundColor: 'rgba(34, 197, 94, 0.45)',
    marginVertical: 18,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '500',
    color: '#94A3B8',
    letterSpacing: 1.6,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

