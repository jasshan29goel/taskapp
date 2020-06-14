import React ,{useContext}from 'react';
import {Text , StyleSheet,View} from 'react-native';
import {Context} from '../context/TaskContext';
import { Card ,Button} from 'react-native-material-ui';
import TaskCard from '../components/TaskCard';
const ShowScreen=({navigation})=>{

    const {state}=useContext(Context);
    const id=navigation.getParam('id');
    const {title,description,date,progress}=state.find((item)=>item.id===id);

    return (
    <View>
        <Card>
            <TaskCard show={false} title={title} date={date} progress={progress} id={()=>navigation.navigate('Edit',{id})} deleteTask={()=>deleteTask(id)}/>
        </Card>
        <Card>
         <View style={styles.description} >
                    <Text >{description}</Text>
                </View>
         </Card>
    </View>
    );
};

const styles = StyleSheet.create({

    description:{
        padding:10,
    },
});

export default ShowScreen;