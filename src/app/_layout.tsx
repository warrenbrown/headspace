import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Meditations", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};

export default RootLayout;
