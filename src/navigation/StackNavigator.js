import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '@features/home/HomeScreen'
import LikesScreen from '@features/Likes/LikesScreen'
import ChatScreen from '@features/chat/ChatScreen'
import ProfileScreen from '@features/profile/ProfileScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '@features/auth/login/LoginScreen'
import BasicInfo from '@features/auth/register/BasicInfo'
import NameScreen from '@features/auth/register/NameScreen'
import EmailScreen from '@features/auth/register/EmailScreen'
import GenderScreen from '@features/auth/register/GenderScreen'
import LocationScreen from '@features/auth/register/LocationScreen'
import PasswordScreen from '@features/auth/register/PasswordScreen'
import TypeScreen from '@features/auth/register/TypeScreen'
import BirthScreen from '@features/auth/register/BirthScreen'
import DatingType from '@features/auth/register/DatingType'
import LookingFor from '@features/auth/register/LookingFor'
import PreFinalScreen from '@features/auth/register/PreFinalScreen'
import ShowPromptsScreen from '@features/auth/register/ShowPromptsScreen'
import HomeTownScreen from '@features/auth/register/HomeTownScreen'
import  PhotoScreen from '@features/auth/register/PhotoScreen'
import PromptsScreen from '@features/auth/register/PromptsScreen'


const StackNavigator = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="alpha" size={35} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="alpha"
                  size={35}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={LikesScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="heart" size={30} color="white" />
              ) : (
                <Entypo name="heart" size={30} color="#989898" />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />
      </Tab.Navigator>
    )
  }


  const AuthStack = () => (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Basic"
        component={BasicInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{headerShown: false}}
      />

  <Stack.Screen
        name="Birth"
        component={BirthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dating"
        component={DatingType}
        options={{headerShown: false}}
      />
  <Stack.Screen
        name="LookingFor"
        component={LookingFor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hometown"
        component={HomeTownScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Prompts"
        component={PromptsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowPrompts"
        component={ShowPromptsScreen}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="PreFinal"
        component={PreFinalScreen}
        options={{headerShown: false}}
      />
        </Stack.Navigator>
  );

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      )
  }

    return (
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    )
  }

  export default StackNavigator