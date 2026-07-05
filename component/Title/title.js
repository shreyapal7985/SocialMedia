import React from 'react';
import {Text} from 'react-native';
import style from './style.js';
import PropTypes from 'prop-types';//is used to check the type of props passed from parent to child

 const Title=props=>{
    return <Text>{props.title}</Text>
 }
 Title.propType={
    title:PropTypes.string.isRequired,//it means title datatype must be string
 }

 export default Title;