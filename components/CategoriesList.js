import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function CategoriesList({ title, color, whileClick }) {

    

    return (
        <View style={[styles.categoryContainer, { backgroundColor: color }]}>
            <Pressable android_ripple={{ color: 'white' }} style={styles.button} onPress={whileClick}>
                <View style={styles.categoryContainer1} >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoriesList;

const styles = StyleSheet.create({
    categoryContainer: {
        height: 150,
        flex: 1,
        margin: 10,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',     //os
        shadowOffset: { width: 0, height: 2 },    //os
        shadowRadius: 8,    //os
        shadowOpacity: 0.25,    //os
        overflow: Platform.OS === "android" ? 'hidden' : 'visible',
    },
    categoryContainer1:
    {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button:
    {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
    },
});