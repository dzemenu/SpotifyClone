import { StyleSheet,SafeAreaView, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { tracks } from '../../../assets/data/tracks';
import TraclkListItem from '../../components/TraclkListItem';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchScreen() {
  const [search,setSearch]=useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name='search' size={16} color='gray'/>
      <TextInput value={search} onChangeText={setSearch} placeholder='search for your favorite ' style={styles.input}/>
      <Text>Cancel</Text>
      </View>
      
      <FlatList data={tracks} renderItem={({item})=><TraclkListItem track={item}/>}/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  header: {
   flexDirection:'row',
   alignItems:'center'
  },
  input: {
   backgroundColor:'#121314',
   color:'white',
   flex:1,
   marginHorizontal:10,
   padding:8,
   borderRadius:5
  },
});
