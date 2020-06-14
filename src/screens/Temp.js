import React from 'react';
import {Feather} from '@expo/vector-icons'
import {withNavigation} from 'react-navigation';
const Temp=({navigation})=>{

    return (
        <Feather 
          name="plus" 
          style={{marginRight:10,fontSize:30}}
          onPress={()=>navigation.navigate('Create')}
        />
    );
};


export default withNavigation(Temp);