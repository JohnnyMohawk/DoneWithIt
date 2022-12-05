// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Alert, StatusBar, Platform, Image, SafeAreaView } from 'react-native';

export default function App() {
  let num = 0;
  // const handlePress = () => {
  //   num = num + 1
  //   alert(num);
  // };
  const handlePress = () => {
    Alert.prompt("Cheese", "Eat It!!!", text => console.log(text))
  }  
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>{num}</Text>
      <TouchableHighlight onPress={handlePress}>
        <Image source={{ 
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300" 
          }} 
        />

      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
