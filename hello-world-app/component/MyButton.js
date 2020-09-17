import React from 'react'
import {Button} from 'react-native'
export default (props) =>{
    return 
    <Button 
    title= {props.title}
    color = {props.color}
    color="red" 
    onPress={() => { props.onChangeColor(props.color) }}></Button>





}

