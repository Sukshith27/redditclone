import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {data} from '../data';
import {Post} from './post';

const Home = () => {
  const renderItem = ({item}) => <Post item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
