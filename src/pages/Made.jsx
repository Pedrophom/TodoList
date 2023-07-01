import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { useState } from 'react';

export function Made(){

    const [ tasks] = useState([]);
    const handleRenderTask = ({item, index}) => <Text>{item}</Text>
    return(
        <View style={styles.container}>
            <FlatList data={tasks} keyExtractor={item => item} renderItem={handleRenderTask}/>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        
    },
})