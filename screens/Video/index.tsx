import React, { useState, useCallback, useRef, useEffect } from "react";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";

import { Button, View, Alert, Dimensions, SafeAreaView } from "react-native";
import { Divider, Layout, TopNavigation } from "@ui-kitten/components";
import Rating from "./rating";
import Sections from "./sections";
export default function Video() {
  const [playing, setPlaying] = useState(false);
  const [height, setHeight] = useState<number>(200);
  const videoId = "KebDXhyhjd4";
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  useEffect(() => {
    // getYoutubeMeta(videoId).then((meta) => {
    //   setHeight(meta.height);
    // });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          height: Dimensions.get("screen").height,
        }}
      >
        <YoutubePlayer
          height={height}
          videoId={videoId}
          onChangeState={onStateChange}
        />
        <Rating />
        <Sections />
      </Layout>
    </SafeAreaView>
  );
}
