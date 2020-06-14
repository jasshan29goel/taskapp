import React,{Fragment} from 'react';
import {StyleSheet,View} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield'
const FormElement=({label,onChangeText,value,multiline})=>{

    return (
        <View style={styles.styleInput}>
            <OutlinedTextField
            label={label}
            value={value}
            onChangeText={onChangeText}
            multiline={multiline}
            />

        </View>
    );
};

const styles = StyleSheet.create({

    styleInput:{
        marginBottom:10,
    }
});

export default FormElement;