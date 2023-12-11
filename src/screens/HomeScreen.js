import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import VideoList from "../components/VideoList";


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
         console.error("Api:", API_KEY + " chave.");
        console.error("Erro ao buscar vídeos do Panda:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <VideoList videos={videos} navigation={navigation} />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
