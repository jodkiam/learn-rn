/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

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
            normalText :'oh my dog!',
            pressText : 'on my cat',

        };
    }
    _onPressButton(){
        Alert.alert('you tapped the button !')
    }
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={styles.container}>
                <Text  style = {styles.welcome}>Today so happy!</Text>

                {/*<Image source={pic} style={styles.picStyle} />*/}

                {/*<Greeting name = 'Yes, U can!' />*/}

                {/*<Greeting name = 'React-Native Oh My God!' />*/}

                {/*/!*<Blink style = {styles.bigBlue} text = '恭喜你发财！恭喜你精彩！'/>*!/*/}

                {/*<Blink   text = '恭喜你发财！恭喜你精彩！'/>*/}

                {/*<Text   onPress={this.pressText} style={ {backgroundColor:'bleue'} }>{this.state.normalText} </Text>*/}
                {/*<TextInput style={{height: 30,borderColor:'gray',borderwidth:2}} onChangeText={(text) => this.setState(pressText) } value = {this.state.pressText}></TextInput>*/}
                {/*<TextInput*/}
                {/*style={{height: 40, borderColor: 'gray', borderWidth: 3}}*/}
                {/*onChangeText={(text) => this.setState({pressText})}*/}
                {/*value={this.state.pressText}*/}
                {/*/>*/}
                {/*<Button onPress ={() => {*/}
                {/*Alert.alert("hello wolrd");*/}
                {/*}}*/}
                {/*title = "alert me"*/}
                {/*/>*/}

                <Button onPress={this._onPressButton }  title = "hello world" color = "black"/>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
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
    }
});

class Blink extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowingText: true,

        } //js对象


        //
        // setInterval(() => {
        //    this.setState(previousState => {
        //      return {isShowingText: !previousState.isShowingText}
        //    });}
        // ,1000};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            });
        }, 1000);

    }
    render(){
        //根据状态是否返回
        if (this.state.isShowingText) {
            return (
                <Text style = {{color:'red'}} >{this.props.text}</Text>
            );
        } else {
            return null;
        }

    };


}


class Greeting extends Component{
    render() {
        return (
            <View style = {{alignItems: 'center'}}>
                <Text  >Hello {this.props.name}</Text>
            </View>
        );
    }

}