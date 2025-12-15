import React, { useEffect } from 'react';
import { VStack, FlatList, Spinner, Center, useColorMode } from 'native-base';
import { useQuery } from '@apollo/client';
import AppHeader from '../components/AppHeader';
import CharacterCard from '../components/CharacterCard';
import { GET_CHARACTERS } from '../services/rickandmorty.graphql';
import { useAppDispatch } from '../store/hooks';
import { setCharacters } from '../store/slices/charactersSlice';

export default function CharactersScreen() {
  const { colorMode } = useColorMode();
  const dispatch = useAppDispatch();
  const { loading, data } = useQuery(GET_CHARACTERS, { variables: { page: 1 } });

  useEffect(() => {
    if (data?.characters?.results) {
      dispatch(setCharacters(data.characters.results));
    }
  }, [data, dispatch]);

  return (
    <VStack flex={1} bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}>
      <AppHeader title="Personagens" />
      {loading ? (
        <Center flex={1}><Spinner color="blue.500" /></Center>
      ) : (
        <FlatList
          data={data?.characters?.results || []}
          keyExtractor={(i: any) => i.id.toString()}
          renderItem={({ item }: { item: any }) => <CharacterCard {...item} />}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </VStack>
  );
}