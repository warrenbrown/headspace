import React from "react";
import { View, Text } from "react-native";
import { Meditation } from "@/types";

interface MeditationItemProps {
  meditation: Meditation;
}

const MeditationItem = ({ meditation }: MeditationItemProps) => {
  return (
    <View className="p-5 rounded-2xl border-2 border-gray-300">
      <Text className="font-semibold text-2xl">{meditation.title}</Text>
    </View>
  );
};

export default MeditationItem;
