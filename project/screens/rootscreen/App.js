import React,{Component} from 'react';
import {
  View,
  Text
} from 'react-native';


import { Badge } from 'react-native-paper';
class App extends Component{
  render(){
    return(
      <View>
        <Text>
          Selam
        </Text>
        <Badge>3</Badge>
      </View>
    )
  }
}

export default App;
