import {
  Card,
  Icon,
  Layout,
  Text,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
const user = [
  {
    name: "Justin Case",
    comment: "id eu nisl nunc mi ipsum faucibus vitae",
  },
  {
    name: "Quiche Hollandaise",
    comment: "faucibus pulvinar elementum integer enim",
  },
  {
    name: "Desmond Eagle",
    comment: "aliquam sem et tortor consequat id porta nibh",
  },
  {
    name: "Burgundy Flemming",
    comment: "id eu nisl nunc mi ipsum faucibus vitae",
  },
  {
    name: "Jone Gordon",
    comment: "odio euismod lacinia at quis risus sed vulputate",
  },
  {
    name: "Sir Cumference",
    comment: "feugiat pretium nibh ipsum consequat nisl vel pretium",
  },
  {
    name: "Russell Sprout",
    comment: "tincidunt lobortis feugiat vivamus at augue eget arcu",
  },
  {
    name: "Richard Tea",
    comment: "cursus vitae congue mauris rhoncus aenean vel elit",
  },
  {
    name: "Norman Gordon",
    comment: "quam quisque id diam vel quam elementum pulvinar",
  },
];
export default function CommentsView() {
  //theme['background-basic-color-1']
  const styles = useStyleSheet(themedStyles);
  const Comment = ({
    index,
    item: i,
  }: {
    index: number;
    item: { name: string; comment: string };
  }) => (
    <Layout level="2" style={styles.commentContainer}>
      <Layout level="2">
        <Icon style={[styles.commentIcon]} fill="#fff" name="person" />
      </Layout>

      <Layout level="3" style={styles.comment}>
        <Text>{i.name}</Text>
        <Text category="label">{i.comment} </Text>
      </Layout>
    </Layout>
  );
  return (
    <Layout level="2" style={styles.container}>
      <FlatList
        data={user}
        renderItem={Comment}
        keyExtractor={({ name }) => name}
      />
    </Layout>
  );
}
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    minHeight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  comment: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  commentContainer: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    marginVertical: 5,
  },
  commentIcon: {
    width: 32,
    height: 32,
    backgroundColor: "background-basic-color-4",
    borderRadius: 50,
  },
});
