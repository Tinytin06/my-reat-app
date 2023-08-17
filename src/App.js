import logo from './logo.svg';
import './App.css';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import ImageButton from './components/ImageButton';
import NoTextImageButton from './components/NoTextImageButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <View style={styles.container}>
      <NoTextImageButton
        onPress={() => console.log("Button as component")} 
        imageStyle={styles.image} 
        source={require("./birb.png")}
      />
      <StatusBar style="auto" />
    </View>
      </header>
    </div>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:12
  },
  image: {
    alignContent:"top",
    width: 450,
    height: 50,
    borderRadius:12
  }
});

export default App;
