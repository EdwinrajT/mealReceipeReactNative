import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MealsList({ id,imgurl, title, duration, affordabilty, complexity }) {
    const navigation=useNavigation();
    function goToMealDetail(){
        navigation.navigate('MealDetail',{mealId:id});
    }
    return (
        <View style={styles.mainContainer}>
            <Pressable android_ripple={{ color: 'ash' }} onPress={goToMealDetail}>
                <View style={{borderRadius:8,overflow:'hidden',flex:1}}>
                    <View>
                        <Image source={{ uri: imgurl }} style={styles.imgStyle} />
                        <Text style={styles.titlesle}>{title}</Text>
                    </View>
                    <View style={styles.bottomcontainer}>
                        <Text >{duration} min</Text>
                        <Text style={styles.botTextstyle}>{affordabilty}</Text>
                        <Text style={styles.botTextstyle}>{complexity}</Text>
                        {/* <Text style={styles.botTextstyle}>{complexity.toUpperCase()}</Text> */}
                    </View>
                </View>
            </Pressable>
        </View>
    );
}
export default MealsList;

const styles = StyleSheet.create({
    imgStyle: {
        
        width:'100%',
        height: 200,
    },
    mainContainer:
    {
        margin: 20,
        borderRadius: 8,
        backgroundColor:'white',
        overflow:'hidden',
        elevation:4,
    },
    titlesle:
    {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',

    },
    bottomcontainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        margin:5,
        
    },
    botTextstyle:
    {
        textTransform:'capitalize'
    }
});