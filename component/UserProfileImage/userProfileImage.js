import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import style from "../UserStory/style";
 
const UserProfileImage=(props)=>{
    return(
        <View style={style.userImageContainer}>
            <Image source={props.profile} style={style.image}/>
            </View>
    )
}

UserProfileImage.prototype={
    profile:PropTypes.any.isRequired
}
export default UserProfileImage;