import React from "react";
import { ViewPager, Layout, Text, TabBar, Tab } from "@ui-kitten/components";
import { Dimensions, StyleSheet } from "react-native";
import CommentsView from "./comments";
import Questions from "./Q&A";
const ViewPagerLazyLoadingShowcase = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index: number) => index === selectedIndex;

  return (
    <Layout
      style={{
        flex: 1,
      }}
    >
      <TabBar
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={{
          height: 40,
        }}
      >
        <Tab title="Comments" />
        <Tab title="Q&A" />
      </TabBar>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={{
          flex: 1,
          maxHeight: Dimensions.get("window").height * (1 / 3) + 10,
        }}
      >
        <CommentsView />
        <Questions />
      </ViewPager>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    flex: 1,
    minHeight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewPagerLazyLoadingShowcase;
