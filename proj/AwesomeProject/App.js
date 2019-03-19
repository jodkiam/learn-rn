import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
     fetch('https://www.apiopen.top/satinApi?type=1&page=1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20,backgroundColor:'white',alignContent:'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20,backgroundColor:'white'}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>title {item.text}</Text>}
          keyExtractor={({item}, index) => index}
        />
      </View>
    );
  }
}
