import React from 'react';
import {Text , StyleSheet,View} from 'react-native';
import moment from "moment";
import { Button} from 'react-native-material-ui';
import {Feather} from '@expo/vector-icons'
import { ProgressBar, Colors } from 'react-native-paper';
const TaskCard=({show,title,date,progress,edit,deleteTask})=>{

    return (

        <View style={styles.marginStyle}>
          <View style={styles.headerStyle}>
                <View>
                    <Text  style={styles.title}>{title}</Text>
                </View>
                <View>
                    <View style={styles.clockStyle}>
                        <Feather name="clock" size={20}/>
                        <View>
                            <Text style={styles.small}>{moment(date).format("dddd")}</Text>
                        </View>
                    </View>
                    <Text style={styles.small}>{moment(date).format("MMMM D, YYYY")}</Text>
                </View>
            </View>
            <View>
                <ProgressBar style={styles.progressBar} progress={progress/100} color={Colors.green800} />
            </View>
            {show && <View style={styles.deleteStyle}>
                <Button  icon={<Feather name="edit" color={Colors.blueA700} size={20}/>} text="" onPress={edit}/>
                 <Button    icon={<Feather name="trash" color={Colors.redA700} size={20}/>} text="" onPress={deleteTask}/>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    small:{
        fontSize: 12,
        color: "#000",
        textAlign:"right",
        marginLeft:10
    },
    clockStyle:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    headerStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },
    progressBar:{
        height:20,
        borderRadius:10,
        marginBottom:10
    },
    marginStyle:{
        marginVertical:20,
        marginHorizontal:15,
    },
    title:{
        fontSize:20,
        marginBottom:10
    },
    deleteStyle:{
        flexDirection:'row',
        justifyContent:'flex-end',
        margin:2
    }
});

export default TaskCard;