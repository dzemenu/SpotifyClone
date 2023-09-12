import { StyleSheet ,FlatList} from 'react-native';

import { Text, View } from '../../components/Themed';
import {tracks} from '../../../assets/data/tracks'
import TraclkListItem from '../../components/TraclkListItem';

export default function TabOneScreen() {
  return (
  <FlatList  data={tracks} renderItem={({item})=><TraclkListItem track={item}/>}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
