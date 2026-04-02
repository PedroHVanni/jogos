import { StyleSheet, View } from "react-native";

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('../../assets/images/a0c55db70393bea13a4746c8aab145c8.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Escolha uma foto"/>
        <Button label="Use esta foto"/>
      </View>
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
      footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
      },
});