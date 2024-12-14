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
      <Stack.Screen
        name="meditation/[id]"
        options={{
          title: "Details",
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
