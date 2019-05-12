import React, {Component} from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'
import axios from 'axios';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({albums: response.data}))
    }

    renderAlbums(){
        return this.state.albums.map(album=>
                <AlbumDetail album = {album} key={album.title}/>
            )
    }

    render(){
        return(

            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}
// const AlbumList = ()=>{
//     return(
//         <View>
//             <Text>Album List</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
})
export default AlbumList

