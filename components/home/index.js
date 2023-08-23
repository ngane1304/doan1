import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo, Feather ,FontAwesome5,FontAwesome} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View>
      <Trangchu/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Live() {
  return (
    <View >
      <SLive/>
    </View>
  );
}
function Announcement() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View>
     <Thongbao />
    </View>
    </View>
  );
}
function User() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User </Text>
    </View>
  );
}
const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="orange" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
      }}/>
      <Tab.Screen name="Mall" component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="shopping-bag" size={24} color="orange" />
            ) : (
              <FontAwesome5 name="shopping-bag" size={24} color="black" />
            ),
      }} />
      <Tab.Screen name="Shoppe Live" component={Live}
      options={{
        tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="videocamera" size={24} color="orange" />
            ) : (
              <Entypo name="video-camera" size={24} color="black" />
            ),
      }} />
      <Tab.Screen name="Announcement" component={Announcement}
      options={{
        tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="bells" size={24} color="orange" />
            ) : (
              <FontAwesome name="bell" size={24} color="black" />
            ),
      }} />
      <Tab.Screen name="User" component={User}
      options={{
        tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="user" size={24} color="orange" />
            ) : (
              <FontAwesome name="user" size={24} color="black" />
            ),
      }} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
};
