import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useColorMode } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import CharactersScreen from '../screens/CharactersScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import LocationsScreen from '../screens/LocationsScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const { colorMode } = useColorMode();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            const icons: any = {
              Home: 'home',
              Characters: 'people',
              Episodes: 'play-circle',
              Locations: 'location-on',
              Search: 'search',
            };
            return <MaterialIcons name={icons[route.name]} size={24} color={color} />;
          },
          tabBarActiveTintColor: colorMode === 'dark' ? '#00bcd4' : '#2196f3',
          tabBarInactiveTintColor: colorMode === 'dark' ? '#666' : '#999',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Characters" component={CharactersScreen} />
        <Tab.Screen name="Episodes" component={EpisodesScreen} />
        <Tab.Screen name="Locations" component={LocationsScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}