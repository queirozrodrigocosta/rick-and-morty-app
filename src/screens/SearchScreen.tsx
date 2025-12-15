import React, { useState } from 'react';
import { VStack, Input, Button, Text, FormControl, useColorMode } from 'native-base';
import AppHeader from '../components/AppHeader';
import { useAppSelector } from '../store/hooks';
import CharacterCard from '../components/CharacterCard';

export default function SearchScreen() {
  const { colorMode } = useColorMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const characters = useAppSelector((s) => s.characters.items);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError('Nome obrigatório');
    } else {
      setError('');
    }
  };

  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <VStack flex={1} bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}>
      <AppHeader title="Buscar" />
      <VStack p={4} space={3} flex={1}>
        <FormControl isInvalid={!!error}>
          <FormControl.Label>Buscar Personagem</FormControl.Label>
          <Input
            placeholder="Digite o nome"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {error && <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>}
        </FormControl>
        <Button bg="blue.600" onPress={handleSearch}>Buscar</Button>
        {filtered.map((c) => <CharacterCard key={c.id} {...c} />)}
      </VStack>
    </VStack>
  );
}