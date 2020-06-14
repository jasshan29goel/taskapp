import React from 'react';
import {Feather} from '@expo/vector-icons'
import {withNavigation} from 'react-navigation';
const Header=({navigation,title})=>{

    if (title==="Index")  
    {
        return (
            <Feather 
            name="plus" 
            style={{marginRight:10,fontSize:30}}
            onPress={()=>navigation.navigate('Create')}
            />
        );
    }
    if (title==="Show")  
    {
        return (
            <Feather 
            name="home" 
            style={{marginRight:10,fontSize:30}}
            onPress={()=>navigation.navigate('Index')}
            />
        );
    }
    
};


export default withNavigation(Header);