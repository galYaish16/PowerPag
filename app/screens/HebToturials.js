import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  Alert,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  Button,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const [playing, setPlaying] = useState(false);
const [isHebrew, setIsHebrew] = useState(true);
const [videos, setVideos] = useState([
  {
    id: 1,
    url: isHebrew ? "lWB6p3A1ESE" : "lWB6p3A1ESE",
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
]);

const onStateChange = useCallback((state) => {
  if (state === "ended") {
    setPlaying(false);
    Alert.alert("video has finished playing!");
  }
}, []);

const togglePlaying = useCallback(() => {
  setPlaying((prev) => !prev);
}, []);

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

const title = isHebrew ? "סרטוני הדרכה" : "Toutorials";

function HebToturials(props) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.Image}
          source={require("../assets/logo.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
        <Button
          onPress={() => {
            setIsHebrew(!isHebrew);
          }}
        >
          Language
        </Button>
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

export default HebToturials;
