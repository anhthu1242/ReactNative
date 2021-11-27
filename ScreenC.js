import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';



export default function ScreenC({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate("Screen_A");
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen C
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go to Screen A
        </Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})