import { View, Text, FlatList, StyleSheet } from "react-native";
import CategoriesList from '../components/CategoriesList';
import { CATEGORIES } from '../data/dummy-data';




function CategoryScreen({navigation}) {


    function showAllCategoryItem(itemData) {
        function allMealsList() {
            navigation.navigate('MealsList',{categoryId:itemData.item.id});
        }
        return <CategoriesList title={itemData.item.title} color={itemData.item.color} whileClick={allMealsList} />;

    }

    return (
        <View style={styles.container}>

            <FlatList data={CATEGORIES} renderItem={showAllCategoryItem} keyExtractor={(item) => item.id} numColumns={2} />
        </View>
    );
}

export default CategoryScreen;

const styles = StyleSheet.create({
    container: {


    }
});