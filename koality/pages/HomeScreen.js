import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

const HomeScreen = ({ navigation }) => {

  const username = "<user>";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={styles.titleText}>
        Welcome, {username}!
        </Text>

        <Text style={styles.title}>
        How are you feeling today?
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Happy"
            onPress={() => Alert.alert('Happy button pressed')}
          />
          <Button
            title="Calm"
            onPress={() => Alert.alert('Calm button pressed')}
          />
          <Button
            title="Relaxed"
            onPress={() => Alert.alert('Relaxed button pressed')}
          />
          <Button
            title="Focused"
            onPress={() => Alert.alert('Focused button pressed')}
          />
          <Button
            title="Sad"
            onPress={() => Alert.alert('Sad button pressed')}
          />
          <Button
            title="Agitated"
            onPress={() => Alert.alert('Agitated button pressed')}
          />
          <Button
            title="Tired"
            onPress={() => Alert.alert('Tired button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default HomeScreen;