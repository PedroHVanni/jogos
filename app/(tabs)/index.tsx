import { StyleSheet, View } from "react-native";
import { Image } from 'expo-image';

const PlaceholderImage = require('../../assets/images/a0c55db70393bea13a4746c8aab145c8.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <view style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: "center",
      },
      imageContainer: {
        flex: 1,
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
});