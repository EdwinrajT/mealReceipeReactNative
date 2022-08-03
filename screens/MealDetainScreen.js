import { useContext, useLayoutEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { View, Text, Image, FlatList, StyleSheet, ScrollView,Button } from "react-native";
import { MEALS } from '../data/dummy-data';
import  IconButton  from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';
import {addFavorites,removeFavorites} from '../store/redux/favorites';
function MealDetainScreen({ route,navigation }) {
  
  
   const favMealIds=useSelector((state)=>state.favMeals.ids);
   const dispatch=useDispatch();
    const mealId = route.params.mealId;
    const mealReceipe = MEALS.find(item => item.id === mealId);
    // const favMealContext=useContext(FavoritesContext);
    // const mealIsFavorite=favMealContext.ids.includes(mealId);
    const mealIsFavorite=favMealIds.includes(mealId);
    function addMealFavorites(){
        if(mealIsFavorite)
        {
            // favMealContext.removeFavorites(mealId);
            dispatch(removeFavorites({id:mealId}));
        }
        else
        {
            // favMealContext.addFavorites(mealId);
            dispatch(addFavorites({id:mealId}));
        }

    }
    useLayoutEffect(()=>{
        navigation.setOptions({headerRight:()=> {
            return <IconButton icon={mealIsFavorite? 'star' : 'star-outline'} color='orange' addFav={addMealFavorites}/> 
        }});
    },[navigation,addMealFavorites]);
    return (
        <ScrollView >
            <Image source={{ uri: mealReceipe.imageUrl }} style={styles.imgstyle}/>
            <Text style={styles.titlesle}>{mealReceipe.title}</Text>
            <View style={styles.bottomcontainer}>
                <Text style={styles.botTextstyle}>{mealReceipe.duration} min</Text>
                <Text style={styles.botTextstyle}>{(mealReceipe.affordability).toUpperCase()}</Text>
                <Text style={styles.botTextstyle}>{(mealReceipe.complexity).toUpperCase()}</Text>
                {/* <Text >{complexity.toUpperCase()}</Text> */}
            </View>
            <View>
            <Text style={styles.headStyle}>Ingredients</Text>
            {mealReceipe.ingredients.map(ingredient=>(<Text style={styles.ansStyle} key={ingredient}>* {ingredient}</Text>))}
            <Text style={styles.headStyle}>Steps</Text>{mealReceipe.steps.map(step=>(<Text  style={styles.ansStyle} key={step}>* {step}</Text>))}
           {/*  <Text>{mealReceipe.title}</Text>
            <Text>{mealReceipe.title}</Text>
            <Text>{mealReceipe.title}</Text>
            <Text>{mealReceipe.title}</Text> */}
            </View>
        </ScrollView>
    );
}
export default MealDetainScreen;

const styles = StyleSheet.create({
    titlesle:
    {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',

    },
    bottomcontainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,

    },
    botTextstyle:
    {
        marginHorizontal:5,
        fontSize:12,
    },
    imgstyle:
    {
        width:'100%',
        height:300,
    },
    headStyle:
    {
        textAlign:'center',
        backgroundColor:'orange',
        margin:10,
        padding:4,
        fontSize:16,
        fontWeight:'bold',
    },
    ansStyle:
    {
        margin:5,
        paddingLeft:20,
    }
});