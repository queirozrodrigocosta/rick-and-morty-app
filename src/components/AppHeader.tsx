import React from 'react';
import { HStack, Switch, Text, Box, useColorMode } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function AppHeader({ title }: { title: string }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box safeAreaTop bg={colorMode === 'dark' ? 'gray.900' : 'blue.600'} px={4} py={3}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold" color="white">{title}</Text>
        <HStack space={2} alignItems="center">
          <MaterialIcons
            name={colorMode === 'dark' ? 'light-mode' : 'dark-mode'}
            size={20}
            color="white"
          />
          <Switch isChecked={colorMode === 'dark'} onToggle={toggleColorMode} />
        </HStack>
      </HStack>
    </Box>
  );
}