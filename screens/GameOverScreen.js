import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  const { roundsNumber, userNumber, onRestart } = props;
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <Image
        style={styles.image}
        // source={require("../assets/success.png")}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2010/11/29/mount-everest-413_960_720.jpg",
        }}
        resizeMode='cover'
        fadeDuration={1000}
      />
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 1000,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 50,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
