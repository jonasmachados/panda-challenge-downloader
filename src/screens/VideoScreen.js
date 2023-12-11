import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import VideoPlayer from "../components/VideoPlayer";
import { Video } from "expo-av";

const VideoScreen = ({ route }) => {
  const { selectedVideo } = route.params;
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.PANDA_AUTHORIZATION;
  const API_DOWNLOAD = "https://download-us01.pandavideo.com:7443";
  const videoId = selectedVideo.id;

  const downloadVideo = async () => {
    try {
      setLoading(true);

      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permissão Negada",
          "A permissão para acessar a biblioteca de mídia foi negada."
        );
        return;
      }

      const fileUri = `${FileSystem.documentDirectory}${videoId}.mp4`;

      const options = {
        headers: {
          Authorization: API_KEY,
        },
      };

      const { uri } = await FileSystem.downloadAsync(
        `${API_DOWNLOAD}/videos/${videoId}/download`,
        fileUri,
        options
      );

      await MediaLibrary.saveToLibraryAsync(uri);
      console.log("Download concluído!");

      Alert.alert("Download Concluído", "O vídeo foi salvo na galeria.");
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Erro de Download",
        "O download falhou. Por favor, tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => <VideoPlayer videoURL={item.video_player} />;

  return (
    <View>
      <Text>{selectedVideo.title}</Text>

      <FlatList
        data={[selectedVideo]}
        keyExtractor={(video) => video.id.toString()}
        renderItem={renderItem}
      />

      <Button
        title={loading ? "Downloading..." : "Download/Save Video"}
        onPress={downloadVideo}
        disabled={loading}
      />

      {loading && <ActivityIndicator style={{ marginTop: 20 }} />}

      <Video
        source={{ uri: selectedVideo.video_player }}
        resizeMode="contain"
        useNativeControls
        style={{ width: 300, height: 200 }}
      />
    </View>
  );
};

export default VideoScreen;
