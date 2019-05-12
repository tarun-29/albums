import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'
export default class App extends Component{
  render() {
    return (
      <View style= {{flex: 1}}>
        <Header headerText={'Albums'}/>
        <AlbumList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    padding: 30,
    backgroundColor: '#F5FCFF',
  }
});

