import { Card, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
const Questions = [
  {
    Q: "What is Deep Learning?",

    A: "If you are going for a deep learning interview, you definitely know what exactly deep learning is. However, with this question the interviewee expects you to give an in-detail answer, with an example. Deep Learning involves taking large volumes of structured or unstructured data and using complex algorithms to train neural networks. It performs complex operations to extract hidden patterns and features (for instance, distinguishing the image of a cat from that of a dog).",
  },
  {
    Q: "Can you assign an anonymous function to a variable and pass it as an argument to another function?",

    A: `Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function.

In case you are facing any challenges with these JavaScript Interview Questions, please comment on your problems in the section below.`,
  },
  {
    Q: "What is argument objects in JavaScript & how to get the type of arguments passed to a function?",
    A: "JavaScript variable arguments represents the arguments that are passed to a function. Using typeof operator, we can get the type of arguments passed to a function.",
  },
];
export default function QuestionsComponent() {
  return (
    <Layout
      level="2"
      style={styles.tab}
      onLayout={(e) => {
        var { x, y, width, height } = e.nativeEvent.layout;
        console.log(`x is %d y is %d width %d,Hight %d`, x, y, width, height);
        console.log(Dimensions.get("window"));
      }}
    >
      <ScrollView style={styles.container}>
        {Questions.map(({ Q, A }, i) => (
          <Card
            style={styles.card}
            key={i.toString()}
            header={<Text category="p1">{Q}</Text>}
          >
            <Text>{A}</Text>
          </Card>
        ))}
      </ScrollView>
    </Layout>
  );
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    minWidth: Dimensions.get("window").width,
  },
  card: {
    margin: 10,
  },
});
/*

*/
