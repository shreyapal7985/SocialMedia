import React from "react";
import { View, Text, Image } from 'react-native';
import PropTypes from "prop-types";
import UserProfileImage from "../UserProfileImage/userProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from './style.js'
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";



const UserPost = (props) => {
    return (
        <View style={styles.userPostContainer}>
            <View style={styles.user}>
                <View style={styles.userContainer} >
                    <UserProfileImage profile={props.profile} imageDimensions={48} />
                    <View style={styles.userTextContainer}>
                        <Text style={styles.userName}>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text style={styles.location}>{props.location}</Text>}
                    </View></View>
                <FontAwesomeIcon icon={faEllipsisH} size={24} color={"#79869F"} />
            </View>
            <View style={styles.post}>
                <Image source={props.image}/>
            </View>
            <View style={styles.userPostStats}>
                <View style={styles.userPostStatsButton}>
                    <FontAwesomeIcon icon={faHeart} color="#79869F"/>
                    <Text style={styles.userPostStatsText}>{props.likes}</Text>
                </View>
                <View style={styles.userPostStatsButtonRight}>
                    <FontAwesomeIcon icon={faMessage} color="#79869F"/>
                    <Text style={styles.userPostStatsText}>{props.comments}</Text>
                </View>
                <View style={styles.userPostStatsButtonRight}>
                    <FontAwesomeIcon icon={faBookmark} color="#79869F"/>
                    <Text style={styles.userPostStatsText}>{props.bookmark}</Text>
                </View>
            </View>
        </View>
    )
}

UserPost.prototype = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profile: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmark: PropTypes.number.isRequired
}
export default UserPost;