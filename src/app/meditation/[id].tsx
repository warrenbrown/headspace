import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome";
import { meditations } from "@/data";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import audio from "../../../assets/meditations/audio1.mp3";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

const MeditationDetails = () => {
  const formatSeconds = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const { id } = useLocalSearchParams();
  const meditation = meditations.find((m) => m.id === Number(id));
  const { top } = useSafeAreaInsets();
  const player = useAudioPlayer({
    uri: "http://webaudioapi.com/samples/audio-tag/chrono.mp3",
  });
  const status = useAudioPlayerStatus(player);
  if (!meditation)
    return <Text className="text-2xl"> Meditation not found!</Text>;

  return (
    <SafeAreaView className=" bg-orange-400 flex-1 p-2 justify-between">
      <View className=" flex-1">
        {/* Header */}
        <View className="flex-row items-center  justify-between p-10">
          <AntDesign name="infocirlceo" size={24} color="black" />
          <View className="bg-zinc-900 justify-center p-2 rounded-md ">
            <Text className=" text-zinc-100 font-semibold">
              Todays Meditation
            </Text>
          </View>

          <AntDesign
            onPress={() => router.back()}
            name="close"
            size={24}
            color="black"
          />
        </View>

        <View className="mt-20">
          <Text className=" text-center text-2xl font-bold text-zinc-800 ">
            {meditation.title}
          </Text>
        </View>
      </View>
      {/* Play Pause button */}
      <View className=" items-center justify-center bg-zinc-800 self-center w-20 aspect-square rounded-full">
        <FontAwesome6
          name={status.playing ? "pause" : "play"}
          size={24}
          color="snow"
          onPress={() => (player.playing ? player.pause() : player.play())}
        />
      </View>

      {/* Bottom part of screen */}
      <View className=" flex-1">
        <View className=" flex-row justify-between p-5 mt-auto">
          <MaterialCommunityIcons
            name="radio-tower"
            size={24}
            color="#3a3937"
          />
          <MaterialCommunityIcons
            name="cog-outline"
            size={24}
            color="#3a3937"
          />
        </View>
        <View className="px-5">
          <Slider
            style={{ width: "100%", height: 40 }}
            value={status.currentTime / status.duration}
            minimumValue={0}
            maximumValue={1}
            onSlidingComplete={(value) =>
              player.seekTo(value * status.duration)
            }
            minimumTrackTintColor="#3a3937"
            maximumTrackTintColor="#3a393755"
            thumbTintColor="#3a3937"
          />
        </View>
        <View className="flex-row justify-between p-5">
          <Text>{formatSeconds(status.currentTime)}</Text>
          <Text>{formatSeconds(status.duration)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MeditationDetails;
