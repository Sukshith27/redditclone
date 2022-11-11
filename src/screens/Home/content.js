import * as React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

export const Content = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      {item.post.substring(item.post.lastIndexOf('.') + 1) === 'mp4' ? (
        <VideoPlayer source={{uri: item.post}} />
      ) : (
        <Image
          style={styles.sourceImage}
          source={{
            uri: item.post,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sourceImage: {
    height: 400,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    // height: 240,
    // width: '100%',
    width: Dimensions.get('window').width - 6,
    height: Dimensions.get('window').width * (9 / 10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
