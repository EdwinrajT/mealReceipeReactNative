import { useLayoutEffect } from 'react';



import MealsData from '../components/MealsData';
import { MEALS , CATEGORIES} from '../data/dummy-data';

function MealsScreen({ route,navigation }) {
    const catId = route.params.categoryId;
    const mealViewList = MEALS.filter((mealData) => {
        return mealData.categoryIds.indexOf(catId) >= 0;
    });
    useLayoutEffect(()=>{
        const catTitle=CATEGORIES.find(item=>item.id===catId).title;
    navigation.setOptions({title:catTitle,});},
    [catId,navigation]);
    
   return <MealsData items={mealViewList}/>

    
   
}

export default MealsScreen;