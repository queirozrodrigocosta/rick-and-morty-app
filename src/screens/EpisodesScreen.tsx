import React from 'react';
import { VStack, Text, useColorMode } from 'native-base';
import AppHeader from '../components/AppHeader';

export default function EpisodesScreen() {
  const { colorMode } = useColorMode();
  return (
    <VStack flex={1} bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}>
      <AppHeader title="Episódios" />
      <Text p={4}>Em breve</Text>
    </VStack>
  );
}