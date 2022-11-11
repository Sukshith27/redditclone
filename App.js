import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/home';
import Login from './src/screens/login';
import {AsyncStorage} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    const getUser = async () => {
      const userFromAsync = await AsyncStorage.getItem('user');
      if (userFromAsync) {
        setUser(userFromAsync);
      }
    };

    getUser();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
