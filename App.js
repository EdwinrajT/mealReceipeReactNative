
import CategoryScreen from './screens/CategoryScreen';
import MealsScreen from './screens/MealsScreen';
import MealDetainScreen from './screens/MealDetainScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Provider } from 'react-redux';
// import FavoritesContextProvider from './store/context/favorites-context';
import {store} from './store/redux/store'

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();

function DrawerFunction(){
  return (<Drawer.Navigator screenOptions={{drawerContentStyle:{backgroundColor:'#4d0b0f'}, drawerActiveTintColor:'#4d0b0f',drawerActiveBackgroundColor:'#e7b7ba', drawerInactiveTintColor:'#e7b7ba', headerTitleAlign:'center', animation:'slide_from_bottom', headerStyle:{backgroundColor:'#4d0b0f'}, headerTintColor:'white',sceneContainerStyle:{backgroundColor:'#e7b7ba'}}}>
    <Drawer.Screen name="Categories" component={CategoryScreen} options={{drawerIcon:({color, size})=>(<Ionicons name="list" color={color} size={size} />)}}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{drawerIcon:({color, size})=>(<Ionicons name="star" color={color} size={size} />)}}/>
  </Drawer.Navigator>);
} 
 
export default function App() {
  return (
    // <FavoritesContextProvider>
    <Provider store={store}>
   <NavigationContainer>
       
      <Stack.Navigator screenOptions={{headerTitleAlign:'center', animation:'slide_from_bottom', headerStyle:{backgroundColor:'#4d0b0f'}, headerTintColor:'white',contentStyle:{backgroundColor:'#e7b7ba'}}}>
        <Stack.Screen name="CategoryList" component={DrawerFunction}  options={{headerShown:false,}}  />
        
        <Stack.Screen name="MealsList" component={MealsScreen}   /* options={({route,navigation})=>{
          
            const catId=route.params.categoryId;
            
            return {
              title:catId,
            };
          
        }} */
         />
        <Stack.Screen name="MealDetail" component={MealDetainScreen}  options={{title:'About the Meal',}}  />
      </Stack.Navigator> 
    </NavigationContainer> 
   </Provider> 
    // </FavoritesContextProvider>
    

  );
}


