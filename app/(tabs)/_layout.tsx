import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />


      <Tabs.Screen
      name="rewards"
      options={{
        title: 'Rewards',
        tabBarIcon: ({ color }) => <FontAwesome6 name="diamond" size={28} color={color} />,
      }}
      />

      <Tabs.Screen
      name="finance"
      options={{
        title: 'Finance',
        tabBarIcon: ({ color }) => <FontAwesome6 name="chart-line" size={28} color={color} />,
      }}
      />

      <Tabs.Screen
      name="cards"
      options={{
        title: 'Cards',
        tabBarIcon: ({ color }) => <FontAwesome6 name="credit-card" size={28} color={color} />,
      }}
      />

      <Tabs.Screen
      name="me"
      options={{
        title: 'Me',
        tabBarIcon: ({ color }) => <FontAwesome6 name="circle" size={28} color={color}  />,
      }}
      />


    </Tabs>
  );
}
