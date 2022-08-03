import { View, FlatList } from 'react-native';
import MealsList from '../components/MealsList';
function MealsData({items}){
    
    function mealListDisplay(itemData){
        const item=itemData.item;
        const alllist={title:item.title,
        imgurl:item.imageUrl,
        id:item.id,
        duration:item.duration,
        affordabilty:item.affordability,
        complexity:item.complexity};
       
        return( 
        <MealsList {...alllist} />
        );
    }

    return (
        <View>
            <FlatList data={items} keyExtractor={(item)=>item.id} renderItem={mealListDisplay}/>
        </View>);
}

export default MealsData;