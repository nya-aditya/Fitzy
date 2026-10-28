import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HomeHeaderProps {
  name: string;
  greeting?: string;
  subtitle?: string;
}

export default function HomeHeader({
  name,
  greeting = 'GOOD AFTERNOON',
  subtitle = 'Your next move.',
}: HomeHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      {/* Top Greeting with Minimal Status Accent */}
      <View style={styles.greetingRow}>
        <View style={styles.accentDot} />
        <Text style={styles.greetingText}>{greeting}</Text>
      </View>

      {/* Primary Athlete Name */}
      <Text style={styles.nameText}>{name}</Text>

      {/* Secondary Philosophy Line */}
      <Text style={styles.subtitleText}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  accentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
    marginRight: 8,
  },
  greetingText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.5,
    color: '#64748B',
    textTransform: 'uppercase',
  },
  nameText: {
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: '#FFFFFF',
    marginBottom: 6,
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: '#94A3B8',
  },
});
