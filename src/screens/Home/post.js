import * as React from 'react';
import {View} from 'react-native';
import {Header} from './header';
import {Content} from './content';
import {Footer} from './footer';

export const Post = ({item}) => {
  return (
    <View>
      <View style={{padding: 6, marginVertical: 4, backgroundColor: '#fcfcfc'}}>
        <Header item={item} />
        <Content item={item} />
        <Footer item={item} />
      </View>
      <View style={{backgroundColor: '#c9c5c5s', height: 8}} />
    </View>
  );
};
