# make a new expo app

```sh
yarn global add expo-cli
expo init
```

### see also

- [expo sdks](https://docs.expo.dev/versions/latest/sdk/webview/)
- [config files](https://docs.expo.dev/versions/v42.0.0/config/app/)
- [react-native components](https://docs.expo.dev/versions/v42.0.0/react-native/flatlist/)

# add [ui kitten](https://akveo.github.io/react-native-ui-kitten/docs/guides/getting-started#getting-started)

```sh
expo install @ui-kitten/eva-icons @eva-design/eva @ui-kitten/components react-native-svg
```

### [top taps](https://akveo.github.io/react-native-ui-kitten/docs/components/top-tabs/overview#tabbar)

```js
import React from "react";
import { Tab, TabBar } from "@ui-kitten/components";

export const TabBarSimpleUsageShowcase = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabBar
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tab title="USERS" />
      <Tab title="ORDERS" />
      <Tab title="TRANSACTIONS" />
    </TabBar>
  );
};
```

### [view pager](https://akveo.github.io/react-native-ui-kitten/docs/components/view-pager/overview#viewpager)

```js
const ViewPagerLazyLoadingShowcase = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent} // for lazy loading
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Layout level="2" style={styles.tab}>
        <Text category="h5">Tab 1</Text>
      </Layout>
      <Layout level="2" style={styles.tab}>
        <Text category="h5">Tab 2</Text>
      </Layout>
    </ViewPager>
  );
};
```

# [react-native-youtube-iframe](https://lonelycpp.github.io/react-native-youtube-iframe/install)

```sh
expo install react-native-webview
yarn add react-native-youtube-iframe
```

### example

```js
import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}
```
