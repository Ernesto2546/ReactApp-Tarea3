import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="sumadora"
        options={{
          title: 'Sumadora',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="add" color={color} />,
        }}
      />

      <Tabs.Screen
        name="traductor"
        options={{
          title: 'traductor',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="language" color={color} />,
        }}
      />

      <Tabs.Screen
        name="tablaMultiplicar"
        options={{
          title: 'Tablas',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calculate" color={color} />,
        }}
      />

      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="videocam" color={color} />,
        }}
      />
    </Tabs>
  );
}
