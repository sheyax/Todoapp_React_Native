import { Platform } from 'expo-modules-core';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks';
import React, {useState} from 'react'

export default function App() {

  const [task, setTask]= useState();

  const [taskItems, setTaskItems]= useState([]);

  const handleAddTask = () =>{
    //console.log(task)
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);

  }


const completeTask = (index) =>{

  var itemsCopy= [...taskItems];

  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);

}

  return (
    <View style={styles.container}>

      {/*Tasks*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Todays task</Text>

        <View style={styles.items}>

          {
            taskItems.map((item, index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                  <Tasks  text={item}/>
                </TouchableOpacity>
              )
              
            })
          }

         {/* <Tasks text={'Task 1'}/>
          <Tasks text={'Task 2'}/>
        <Tasks text={'Task 3'}/>*/}
        </View>
      </View>


      {/*write a task */}
      <KeyboardAvoidingView
      behavior={Platform.os === "android"? "padding": "height"}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'write a task'}
        value={task} onChangeText={text => setTask(text)} />

<TouchableOpacity onPress={() =>handleAddTask()}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
      </KeyboardAvoidingView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },


  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal:20 ,
  },
  sectionTitle:{
fontSize: 24,
fontWeight:'bold',
  },
  items:{
marginTop: 30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 60,
    padding: 10,
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',

  },
  input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius: 60,
    borderColor:'#c0c0c0',
    borderWidth: 1,
    width:300,
  },
  addWrapper: {
    width: 60,
    height:60,
    backgroundColor:'#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#c0c0c0',
    borderWidth: 1,
  },
  addText: {},

});
