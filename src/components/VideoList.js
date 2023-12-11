import React from "react";
import VideoPlayer from "./VideoPlayer";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const VideoList = ({ videos, navigation }) => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>

      <VideoPlayer videoURL={item.video_player} />

      <TouchableOpacity
        onPress={() => navigation.navigate("Video", { selectedVideo: item })}
      >
        <Text>Ir para Video Screen</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={videos}
      keyExtractor={(video) => video.id.toString()}
      renderItem={renderItem}
    />
  );
  
};

export default VideoList;
