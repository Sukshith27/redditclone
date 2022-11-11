import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export const Header = ({item}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.logo,
            }}
          />
          <View style={{marginLeft: 12}}>
            <Text>{item.title}</Text>
            <Text>{item.sub_title}</Text>
          </View>
        </View>
        <IconEntypo name="dots-three-vertical" size={24} color="#c1c9c4" />
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 8}}>
        {item.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 25,
    height: 25,
  },
});
