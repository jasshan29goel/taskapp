import React,{useContext,useEffect}from 'react';
import {StyleSheet,View,FlatList,Button} from 'react-native';
import {Context} from '../context/TaskContext';
import { Card } from 'react-native-material-ui';
import TaskCard from '../components/TaskCard';

const IndexScreen=({navigation})=>{

    const {state,deleteTask,getTasks}=useContext(Context)

    useEffect(()=>{
        getTasks();
        const listener=navigation.addListener('didFocus',()=>{
            getTasks();
        });
        return ()=>{
            listener.remove();
        }
    },[]);
     

    return (
    <View>
        <FlatList
        data={state}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=>{
            return (
                    <Card onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <TaskCard 
                        show={true} 
                        title={item.title} 
                        date={item.date} 
                        progress={item.progress} 
                        edit={()=>navigation.navigate('Edit',{id:item.id})} 
                        deleteTask={()=>deleteTask(item.id)}/>
                    </Card>
            
            )}}
        />
    </View>
    );
};


const styles = StyleSheet.create({



});

export default IndexScreen;