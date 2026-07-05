/*fontWeight is not working on android when we are applying fontFamily
Ways of applying fontFamily ---1fontFamily:'Inter_18pt-Black',  */
import {Text,TouchableOpacity,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {getFontFamily} from './assets/fonts/helper';
import Title from './component/Title/title.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalstyle from './assets/styles/globalstyle';
const App=()=>{
  return(
    <SafeAreaView>
    <View style={{marginLeft:30, 
    marginRight:17, 
    marginTop:30, 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between"}}>
    <Title title={'Let’s Explore '}/>
    <TouchableOpacity style={{backgroundColor:'#f5f7faf4', padding:14, borderRadius:100}}>
    <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'}/>
    </TouchableOpacity>
    </View>
    </SafeAreaView>

  )
}

export default App;
