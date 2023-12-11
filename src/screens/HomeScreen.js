import React, { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native";
import VideoList from "../components/VideoList";
import commonStyles from "../styles/commonStyles";

const HomeScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);

  const API_KEY = process.env.PANDA_AUTHORIZATION;

  const options = {
    method: "GET",
    url: "https://api-v2.pandavideo.com.br/videos",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setVideos(response.data.videos);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Erro ao buscar vídeos do Panda:", error);
      });
  }, []);

  return (
    <View style={commonStyles.container}>
      <VideoList videos={videos} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
