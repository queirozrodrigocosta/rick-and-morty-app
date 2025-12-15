import { Box, ScrollView, Text, useColorMode, VStack } from 'native-base';
import React from 'react';
import AppHeader from '../components/AppHeader';
import { useAppSelector } from '../store/hooks';

export default function HomeScreen() {
  const { colorMode } = useColorMode();
  const characterCount = useAppSelector((s) => s.characters.items.length);
  const favoriteCount = useAppSelector((s) => s.favorites.characterIds.length);

  return (
    <ScrollView flex={1} bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}>
      <AppHeader title="Rick and Morty" />
      <VStack p={4} space={4}>
        <Box bg={colorMode === 'dark' ? 'gray.800' : 'white'} rounded="lg" p={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>Bem-vindo!</Text>
          <Text color="gray.500">Explore personagens do Rick and Morty</Text>
        </Box>
        <Box bg="blue.600" rounded="lg" p={4}>
          <Text color="white" fontSize="md" fontWeight="bold" mb={1}>Personagens: {characterCount}</Text>
          <Text color="white">Favoritos: {favoriteCount}</Text>
        </Box>
      </VStack>
    </ScrollView>
  );
}