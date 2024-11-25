import React from "react";
import { View, Text } from "react-native";
import { Meditation } from "@/types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
interface MeditationItemProps {
  meditation: Meditation;
}

const MeditationItem = ({ meditation }: MeditationItemProps) => {
  return (
    <View className="flex-row items-center gap-3">
      <View>
        <AntDesign name="checkcircle" size={24} color="green" />
      </View>
      <View className="p-5 rounded-2xl border-2 py-8 border-gray-300 flex-1">
        <Text className="font-semibold text-2xl">{meditation.title}</Text>
        <View className="flex-row items-center gap-1">
          <FontAwesome6 name="clock" size={16} color="#6B7280" />
          <Text className="text-gray-600">{meditation.duration} min</Text>
        </View>
      </View>
    </View>
  );
};

export default MeditationItem;
