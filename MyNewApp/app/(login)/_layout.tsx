import React from 'react';
import { Stack } from 'expo-router';

const login = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default login;
