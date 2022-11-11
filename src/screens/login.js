import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import React, {useCallback, useState} from 'react';

export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = useCallback(() => {
    if (!userName || !password) {
      return;
    }

    AsyncStorage.setItem('user', userName);
    props.navigation.navigate('Home', {});
  }, [password, props.navigation, userName]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/reddit-logo.png')}
      />
      <Text style={{color: '#32a852', fontWeight: 'bold', fontSize: 24}}>
        Log in to Reddit
      </Text>
      <TextInput
        value={userName}
        onChangeText={txt => setUserName(txt)}
        placeholderTextColor="#c9c9c9"
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={txt => setPassword(txt)}
        placeholderTextColor="#c9c9c9"
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text style={{color: '#266099', fontWeight: 'bold', marginTop: 24}}>
          FORGOT PASSWORD
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 18,
    height: 80,
    width: 80,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    color: '#0a0a0a',
    paddingRight: 15,
    paddingLeft: 16,
    fontSize: 18,
    marginTop: 12,
  },
  loginBtn: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#0a80f5',
  },
});
