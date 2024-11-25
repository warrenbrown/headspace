import { Stack } from "expo-router";
import React from "react";

// Import your global CSS file
import "../../global.css";

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
