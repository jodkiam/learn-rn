/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert, FlatList, SectionList, ActivityIndicator} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props){
       super(props);
       this.state = {
           title:"null",
           isLoading:true,
           dataSource:{},
       }

    }

  render() {

        //数据获取
    fetch('https://www.apiopen.top/satinGodApi?type=1&page=1',{
        method: 'GET',
        headers:{
            Accept:'applicaiton/json',
            'Content-Type':'applicaiton/json',
        }

    }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                isLoading:false,
                dataSource:responseJson.data,
            },function () {

            })
            return responseJson
        })
        .catch((error) => {
            console.error(error);
        })


      if(this.state.isLoading)
      {
          return (
              <View style = {{flex: 1,paddingTop:20}}>
                 <ActivityIndicator/>
              </View>
          );
      }
    return (


           <View style = {{flex: 1,paddingTop:20}}>
              <FlatList
                  data = {this.state.dataSource}
                  renderItem = {({item}) =><Text>{item.text}</Text>}
                  // keyExtractor = {(item, index) => index}
              />
          </View>

        {/*<View style = {styles.container}>*/}
            {/*/!*<FlatList*!/*/}
                {/*/!*data = {[*!/*/}
                    {/*/!*{keys:'啊啊'},*!/*/}
                    {/*/!*{keys:'有谁能够了解'},*!/*/}
                    {/*/!*{keys:' d'},*!/*/}
                {/*/!*]}*!/*/}
                {/*/!*renderItem = {({item}) => <Text style={styles.item}>{item.keys}</Text>}*!/*/}
            {/*/!*/>*!/*/}
            {/*<SectionList*/}
                {/*sections={ [*/}
                    {/*{title:'D', data:['hellow']},*/}
                    {/*{title:'A', data:['jackson','kim','jimys']}*/}
                {/*]}*/}
                {/*renderItem = {({item}) => <Text style = {styles.item}>{item}</Text>}*/}
                {/*renderSectionHeader = {({section}) => <Text style = {styles.secionHeader}>{section.title}</Text>}*/}
                {/*keyExtractor = {(item, index) => index}*/}
            {/*/>*/}

        {/*</View>*/}


    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
      flex: 1,
      paddingTop:22
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picStyle:{
    width: 193,
    height: 130,
  },
  bigBlue:{
    color:'#ff8c00',
    fontWeight: 'bold',
    fontSize: 30,
  },
  baseText:{
    fontFamily:'Cochin',
  },
  titleText:{
    fontSize:20,
    fontWeight: 'bold'
  },
  item:{
         padding:10,
        fontSize:20,
        height: 44,
        color:"white"
        },
  secionHeader:{
            paddingTop:2,
            paddingLeft:10,
            paddingRight:10,
            paddingBottom:2,
            fontSize:18,
            fontWeight:'bold',
            backgroundColor:'yellow',
        },
});
