import { useContext } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import {FavoritesContext} from '../store/context/favorites-context';
import MealsData from '../components/MealsData';
import { MEALS } from '../data/dummy-data';
function FavoritesScreen(){
    const favMealListCtx=useContext(FavoritesContext);
    const favMealIds=useSelector((state)=>state.favMeals.ids);
    // const favMeals=MEALS.filter((meals)=>favMealListCtx.ids.includes(meals.id));
    const favMeals=MEALS.filter((meals)=>favMealIds.includes(meals.id));
    if(favMeals.length===0)
    {
        return (
        <View style={styles.rootContainer}>
            <Text style={styles.textSte}>No Favorites Found</Text>
        </View>
        );
    }
    return(
        <MealsData items={favMeals}/>
    );
}
export default FavoritesScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    textSte:{
        fontSize:20,
        fontWeight:'800',
    }
});