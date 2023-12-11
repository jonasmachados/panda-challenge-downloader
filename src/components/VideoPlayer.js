import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";

const VideoPlayer = ({ videoURL }) => {
  const [webViewUrl, setWebViewUrl] = useState(videoURL);

  useEffect(() => {
    setWebViewUrl(videoURL);
  }, [videoURL]);

  if (Platform.OS === "web") {
    return (
      <iframe
        title="Panda Video"
        width="560"
        height="315"
        src={videoURL}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <View style={styles.container}>
      <WebView source={{ uri: webViewUrl }} style={styles.video} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: 300,
    height: 200,
  },
});

export default VideoPlayer;