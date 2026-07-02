/*fontWeight is not working on android when we are applying fontFamily
Ways of applying fontFamily ---1fontFamily:'Inter_18pt-Black',  */
import {Text,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {getFontFamily} from './assets/fonts/helper';
const App=()=>{
  return(
    <SafeAreaView>
      <Text style={{fontSize:50,fontFamily:getFontFamily( 'Inter', '200')}}>hello world</Text>
      
      <Text style={{fontSize:50,fontFamily:getFontFamily('Inter', '500')}}>hello world</Text>
    </SafeAreaView>

  )
}

export default App;
