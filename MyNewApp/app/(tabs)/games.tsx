import { Text, View } from 'react-native';
import React from 'react';

type Games = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};
const Games = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-3xl">Games are fun</Text>
    </View>
  );
};

export default Games;
