import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput} from 'react-native';
import { useState } from 'react';

export function Todo(){
  const [ task, AddTask] = useState('');
  const [ tasks, AddTasks] = useState([]);
  const handleAdd = () => {
 AddTasks([ ... tasks, task]);
AddTask('');
  }
  const Delete = (index) => {
    AddTasks((Espaço) => {
      const AddTaskList = [...Espaço];
      AddTaskList.splice(index, 1);
      return AddTaskList;
    });
  };

  const handleRenderTask = ({item, index}) => <TouchableOpacity  style={styles.TextItems} onPress={() => Delete(index)}><Text>{item}</Text></TouchableOpacity>
     return(
        <View style={styles.container}>
           <View style={styles.container}>
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Digite uma tarefa" onChangeText={text => AddTask(text)} value={task}/>
        <TouchableOpacity  style={styles.btn} onPress={handleAdd}><Text style={styles.TextBtn}>+</Text></TouchableOpacity>
      </View>
      <FlatList data={tasks} keyExtractor={item => item} renderItem={handleRenderTask}/>
      </View>
    </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1, 
    },
    card:{
      width: 290,
      height: 600,
      padding:10,
      backgroundColor:'#f5f5f8',
      shadowOffset: {
      width: 0,
      height: 6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 5, 
      borderRadius:8,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems:'center',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      height: 40,
      width:220,
      borderWidth: 2,
      marginRight: 10,
      borderRadius:30,
      paddingHorizontal: 10,
      
    },
    btn:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#00FF00",
      height:40,
      width:40,
      borderRadius:20, 
    },
    TextBtn:{
  fontSize:30,
    },
    TextItems:{
      height: 40,
      width:'100%',
      borderWidth: 1,
      marginRight: 10,
      justifyContent:'center',
      paddingHorizontal: 10,
    }
})