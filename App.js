/*fontWeight is not working on android when we are applying fontFamily
Ways of applying fontFamily ---1fontFamily:'Inter_18pt-Black',  */
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFontFamily } from './assets/fonts/helper';
import Title from './component/Title/title.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalstyle from './assets/styles/globalstyle';
import style from './assets/styles/globalstyle';

import UserStory from './component/UserStory/UserStory';
import { useEffect, useState } from 'react';

const App = () => {
  const stories = [
    {
      firstName: 'angel',
      id: 1,
      profile: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'angelina',
      id: 2,
      profile: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'lolo',
      id: 3,
      profile: require('./assets/images/default_profile.png')
    }, 
    {
      firstName: 'polo',
      id: 4,
      profile: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'tokya',
      id: 5,
      profile: require('./assets/images/default_profile.png')
    },  
    {
      firstName: 'lila',
      id: 6,
      profile: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'ana',
      id: 7,
      profile: require('./assets/images/default_profile.png')
    }, 
    {
      firstName: 'nani',
      id: 8,
      profile: require('./assets/images/default_profile.png')
    },
    {
      firstName: 'gigi',
      id: 9,
      profile: require('./assets/images/default_profile.png')
    },
  ]
  const posts=[
    {
      firstName:'adam',
      lastName:'sharma',
      location:'boston, Ma',
      likes:1202,
      comments:120,
      bookmark:55,
      id:1
    },
    {
      firstName:'mala',
      lastName:'kali',
      location:'barely, ind',
      likes:120,
      comments:10,
      bookmark:5,
      id:2
    },
    {
      firstName:'advin',
      lastName:'singh',
      location:'cicago, Ma',
      likes:1000,
      comments:20,
      bookmark:65,
      id:3
    },
    {
      firstName:'damini',
      lastName:'mittal',
      location:'agra,ind',
      likes:202,
      comments:1120,
      bookmark:505,
      id:4
    },
    {
      firstName:'ladam',
      lastName:'sharma',
      location:'boston, Ma',
      likes:1000,
      comments:20,
      bookmark:55,
      id:5
    }
  ]


//All for  stories infinite scrolling
  const userStoryPageSize=4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage]=useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData]=useState([]);
  const [isLoadingUserStories,setIsLoadingUserStories]=useState(false)

  //All for posts infinite scrolling
  const userPostsPageSize=4;
  const [userPostsCurrentPage, setUserCurrentPostsPage]=useState(1);
  const [userPostsRenderData, setUserPostsRenderData]=useState([]);
  const [isLoadingUserPosts,setIsLoadingUserPosts]=useState(false)

//Pagination for stories 
  const pagination=(database, currentPage, pageSize)=>{
    console.log(currentPage)
    const startIndex =(currentPage-1)*pageSize;
    const endIndex= startIndex+pageSize;
    if (startIndex>=database.length)
    {
      return[];
  }
  return database.slice(startIndex, endIndex);
}

//handle the side effect of stories
  useEffect(()=>{
    setIsLoadingUserStories(true)
    const getInitialData=pagination(stories,1,userStoryPageSize)
    setUserStoriesRenderData(getInitialData)
    setIsLoadingUserStories(false)
  },[])

  return (
    <SafeAreaView>

    //HEADER SECTION BEGIN
      <View style={style.header}>
        <Title title={'Let’s Explore '} />
        <TouchableOpacity style={style.message}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={style.messageContainerNumber}>
            <Text style={style.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      //HEADER SECTION END

      //USER STORY SECTION BEGIN
<View style={style.userStoryContainer}>
<FlatList 
onEndReachedThreshold={0.5}
onEndReached={()=>{
  if(isLoadingUserStories)
  {
    return;
  }
  setIsLoadingUserStories(true);
  const contentToAppend=pagination(stories,userStoriesCurrentPage+1,userStoryPageSize)
  if(contentToAppend.length>0){
    setUserStoriesCurrentPage(userStoriesCurrentPage+1);
setUserStoriesRenderData(prev=>[...prev,...contentToAppend])
  }
  setIsLoadingUserStories(false)
}}
showsHorizontalScrollIndicator={false}
horizontal={true} 
  data={userStoriesRenderData}
  renderItem={({item})=><UserStory 
  key={item.id}
  firstName={item.firstName} profile={item.profile}/>}
/>

<View>
  <FlatList
    data={posts}
    renderItem={({item})=>{}}

  />
</View>
</View>

    </SafeAreaView>

  )
}

export default App;
