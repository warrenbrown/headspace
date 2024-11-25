import { StyleSheet, Text, View, FlatList } from "react-native";
import { meditations } from "@/data";
import MeditationItem from "@/components/MeditationItem";

const meditation = meditations[0];

export default function Page() {
  return (
    <FlatList
      data={meditations}
      contentContainerClassName="gap-5 p-3 bg-white"
      renderItem={({ item }) => <MeditationItem meditation={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
