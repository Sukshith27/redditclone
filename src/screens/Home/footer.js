import * as React from 'react';
import {Text, View} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Octicons';

export const Footer = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <IconEntypo name="arrow-bold-up" size={24} color="#080808" />
        <Text style={{marginLeft: 8}}>{item.likes}</Text>
        <IconEntypo
          name="arrow-bold-down"
          size={24}
          color="#080808"
          style={{marginLeft: 8}}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="comment" size={24} color="#080808" />
        <Text style={{marginLeft: 8}}>{item.comments}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconEntypo name="share" size={24} color="#080808" />
        <Text style={{marginLeft: 8}}>share</Text>
      </View>
      <Icon name="gift" size={24} color="#080808" />
    </View>
  );
};
