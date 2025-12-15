import React from 'react';
import { Box, HStack, VStack, Text, Image, Button, useColorMode } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleFavorite } from '../store/slices/favoritesSlice';

interface Props {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: { name: string };
  location: { name: string };
}

export default function CharacterCard(props: Props) {
  const { colorMode } = useColorMode();
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((s) => s.favorites.characterIds.includes(props.id));

  const statusColor = {
    Alive: 'green.500',
    Dead: 'red.500',
    unknown: 'gray.500',
  }[props.status] || 'gray.500';

  return (
    <Box
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      rounded="lg"
      overflow="hidden"
      mb={4}
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      borderWidth={1}
    >
      <Image source={{ uri: props.image }} alt={props.name} w="100%" h={250} />
      <VStack p={4} space={2}>
        <HStack justifyContent="space-between">
          <Text fontSize="lg" fontWeight="bold" flex={1}>{props.name}</Text>
          <Button
            size="sm"
            bg={isFavorite ? 'red.500' : 'gray.500'}
            onPress={() => dispatch(toggleFavorite(props.id))}
          >
            {isFavorite ? '❤️' : '🤍'}
          </Button>
        </HStack>
        <HStack space={1}>
          <Box w={3} h={3} borderRadius="full" bg={statusColor} />
          <Text fontSize="sm">{props.status} - {props.species}</Text>
        </HStack>
        <Text fontSize="xs">{props.origin.name}</Text>
      </VStack>
    </Box>
  );
}