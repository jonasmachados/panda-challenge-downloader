import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import videoListStyles from "../styles/videoListStyles";
import commonStyles from "../styles/commonStyles";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const VideoList = ({ videos, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Video", { selectedVideo: item })}
    >
      <View style={videoListStyles.itemContainer}>
        <Icon
          name="playcircleo"
          size={30}
          color={ConstantsToStyle.PRIMARY_COLOR}
        />

        <View style={videoListStyles.textContainer}>
          <Text style={videoListStyles.itemTitle}>{item.title}</Text>

          <Text
            style={videoListStyles.itemText}
          >{`Size: ${item.storage_size}`}</Text>

          <Text
            style={videoListStyles.itemText}
          >{`Time: ${item.created_at}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={videoListStyles.videoListContainer}>
      <View style={commonStyles.titleContainer}>
        <MaterialIcons
          name="library-music"
          size={30}
          color={ConstantsToStyle.PRIMARY_COLOR}
          padidindRight={40}
        />

        <Text style={commonStyles.title}>Sua PlayList</Text>
      </View>

      <FlatList
        data={videos}
        keyExtractor={(video) => video.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default VideoList;
