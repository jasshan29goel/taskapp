import React,{useState,useContext}from 'react';
import {Slider, StyleSheet,View} from 'react-native';
import FormElement from '../components/FormElement';
import { Context } from '../context/TaskContext';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native-material-ui';

const EditScreen=({navigation})=>{

      const {state,editTask}=useContext(Context);
      const id=navigation.getParam('id');
      
      const task=state.find((item)=>item.id===id);
      const [formData, setFormData] = useState({
        title:task.title,
        description:task.description,
        date:new Date(task.date),
        isDatePickerVisible:false,
        progress:task.progress
      });
      const{title,description,date,isDatePickerVisible,progress}=formData;


    return (
    <View style={styles.styleForm}>
        <FormElement 
            label="Title"
            value={title}
            multiline={false}
            onChangeText={(text)=>setFormData({...formData,title:text})}           
        />
        <FormElement 
            label="Description"
            value={description}
            multiline={true}
            onChangeText={(text)=>setFormData({...formData,description:text})}           
        />
        <Slider 
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1} 
          value={progress}
          onValueChange={(value)=>setFormData({...formData,progress:value})}
        />
        <View  style={styles.dateInput}>
            <Button raised primary text="Set Date" onPress={()=>setFormData({...formData,isDatePickerVisible:true})} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={date}
                onConfirm={(date)=>setFormData({...formData,date:date,isDatePickerVisible:false})}
                onCancel={()=>setFormData({isDatePickerVisible:false})}
            />
        <Button raised primary text="Submit"  onPress={()=>editTask(
            id,
            title,
            description,
            date,
            progress,
            ()=>{navigation.navigate('Show',{id})}
            )}/>

        </View> 



    </View>
    );
};

const styles = StyleSheet.create({

    styleForm:{
        margin:10
    },
    dateInput:{
      marginVertical:50,
      flexDirection:'row',
      justifyContent:'space-evenly'
  },
});

export default EditScreen;