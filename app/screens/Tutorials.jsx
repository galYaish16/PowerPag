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
  Switch,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
const logo = require("../assets/logo.png");

export default function Tutorials() {
  const [playing, setPlaying] = useState(false);
  const [isHebrew, setIsHebrew] = useState(true);
  const title = isHebrew ? "סרטוני הדרכה" : "Toutorials";
  const lang = isHebrew ? "עברית" : "English";
  const videos = [
    {
      id: 1,
      url: isHebrew ? "lWB6p3A1ESE" : "Pi-l9E-BTwQ",
      isPlaying: false,
    },
    {
      id: 2,
      url: isHebrew ? "8ZlinO9JguE" : "bG1yLTaxe6w",
      isPlaying: false,
    },
    {
      id: 3,
      url: isHebrew ? "521QclGzAis" : "7KIojFVdTXQ",
      isPlaying: false,
    },
    {
      id: 4,
      url: isHebrew ?  "RRwh-dICK_I" : "DklcsaZnZBU",
      isPlaying: false,
    },
    {
      id: 5,
      url: isHebrew ?  "IrWU8xEmzgw" : "Jk8bnpLfS9I",
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
          source={logo}
        />
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.lang}>
          <Text>{lang}</Text>
          <Switch
            trackColor={{ false: "dodgerblue", true: "dodgerblue" }}
            thumbColor={isHebrew ? "black" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsHebrew(!isHebrew)}
            value={isHebrew}
          />
        </View>
      </View>

      <View>
        <FlatList
          style={styles.list}
          data={videos}
          renderItem={(video) => (
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
  SafeAreaView: {
    marginBottom: 180,
    backgroundColor: "#e6faff",
  },
  Image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  header: {
    backgroundColor: "#ADD8E6",
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignContent:"center",
    alignItems:'center',
    padding:10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  lang: {
    alignItems:'center',
  },
  list: {
    marginTop: 20,
  },
});
