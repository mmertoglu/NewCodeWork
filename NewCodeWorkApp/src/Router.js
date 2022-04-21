import React from "react";
import {View,Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import Favourites from "./pages/Favourites/Favourites";
import Jobs from "./pages/Jobs/Jobs";
import Details from './pages/Details/Details'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavouriteProvider from './context/Provider'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const JobStack = () => {
  return(
<Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen  name="Jobs" component={Jobs} />
    <Stack.Screen name="DetailsScreen" component={Details} />
  </Stack.Navigator>
  )
  
}

function Router () {
  return(
   <NavigationContainer>
      <Drawer.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'tomato',
      },
      drawerActiveBackgroundColor:'#3C0B7F',
      drawerActiveTintColor:'white',
      drawerStyle:{
        backgroundColor:'#e8eaf6'
      },
      headerTintColor:'white',
    }}
      >
        <Drawer.Screen name="JobsScreen" component={JobStack} />
        <Drawer.Screen name="FavouritesScreen" component={Favourites} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}
export default Router;