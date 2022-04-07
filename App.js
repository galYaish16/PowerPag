import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  FlatList,
  Text,
  Image,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(false);
  const videos = [
    {
      id: 1,
      url: "lWB6p3A1ESE",
      isPlaying: false,
    },
    {
      id: 2,
      url: "8ZlinO9JguE",
      isPlaying: false,
    },
    {
      id: 3,
      url: "521QclGzAis",
      isPlaying: false,
    },
    {
      id: 4,
      url: "RRwh-dICK_I",
      isPlaying: false,
    },
    {
      id: 5,
      url: "IrWU8xEmzgw",
      isPlaying: false,
    },
  ];

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
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.Image}
          source={require("./app/assets/logo.png")}
        />
        <Text style={styles.headerText}>סרטוני הדרכה</Text>
      </View>

      <View>
        <FlatList
          style={{
            marginTop: 20,
          }}
          data={videos}
          renderItem={(video) => (
            //console.log(video.item.url)
            <View key={video.item.id}>
              <YoutubePlayer
                height={270}
                play={playing}
                videoId={video.item.url}
                onChangeState={onStateChange}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  header: {
    backgroundColor: "#ADD8E6",
    flexDirection: "row",
  },
  SafeAreaView: {
    marginBottom: 80,
    backgroundColor: "#e6faff",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    paddingLeft: 120,
    position: "absolute",
    marginTop: 10,
  },
});
