import React, { useState } from "react";
import { Icon, Layout, Text, useTheme } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const theme = useTheme();
  return (
    <Layout level="1" style={styles.container}>
      <Text category="h3">rating</Text>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Icon
            key={i.toString()}
            fill={
              rating <= i
                ? theme["text-basic-color"]
                : theme["color-warning-500"]
            }
            style={styles.icon}
            name={"star"}
            onPress={() => setRating(i + 1)}
          />
        ))}
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    maxHeight: 70,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
