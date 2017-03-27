import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    TextInput,
    Button,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';

import RegisterPageComponent from './RegisterPageComponent';
import ForgetPasswordPageComponent from './ForgetPasswordPageComponent'

export default class LoginPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showLoginButton: true,userName:"",password:"",wrongMessage:""};
    }
    _pressRegisterButton(index) {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'RegisterPageComponent',
                component: RegisterPageComponent,
            })
        }
    }
    _pressForgetButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'ForgetPasswordPageComponent',
                component: ForgetPasswordPageComponent,
            })
        }
    }
    render() {
        return (
            <Image source={{uri:'http://file06.16sucai.com/2016/0715/852f0bc04bd49007232ae65dd413d4d2.jpg'}}
            style={{flex:1}}>
                <View style={{flex:1,flexDirection: 'row'}}>
                    <View style={{flex:1}}/>
                    <View style={{flex:14,flexDirection: 'column',alignItems: 'stretch'}}>
                        <View style={{flex:1}}/>
                        <View style={{flex:4,alignItems: 'stretch'}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={{uri: 'http://pic.58pic.com/58pic/14/63/03/958PICA58PICNwV_1024.jpg'}}
                                style={{width: 100, height: 100}} />
                            </View>
                            <View style={{marginTop:30,borderRadius:10,borderWidth:0,backgroundColor:'white'}}>
                                <TextInput
                                  style={{height: 50,fontSize:16,textAlign:'center'}}
                                  placeholder="请输入手机号/邮箱"
                                  editable ={this.state.showLoginButton}
                                  placeholderTextColor="#d3d3d3"
                                  underlineColorAndroid="#d3d3d3"
                                  returnKeyType='next'
                                  clearButtonMode="always"
                                  enablesReturnKeyAutomatically={true}
                                  onChangeText={(userName) => this.setState({userName})}
                                />
                                <TextInput
                                  style={{padding:0,marginTop:-0,height: 30,fontSize:16,textAlign:'center'}}
                                  placeholder="请输入密码"
                                  editable ={this.state.showLoginButton}
                                  placeholderTextColor="#d3d3d3"
                                  secureTextEntry={true}
                                  underlineColorAndroid="transparent"
                                  onChangeText={(password) => this.setState({password})}
                                />
                            </View>
                            <View style={{height:30}}>
                                <Text style={{color:'#f08080',textAlign:'center',paddingTop:5}}
                                onPress={() => 
                                        {
                                            this.setState({wrongMessage:""});
                                        }}
                                >
                                    {this.state.wrongMessage}
                                </Text>
                            </View>
                            <View style={{height:40}}>
                                <View style={{height:this.state.showLoginButton?20:0}}>
                                    <Button
                                        title="登陆"
                                        color="#87ceeb"
                                        disabled={this.state.userName==""||this.state.password==""}
                                        onPress={() => 
                                        {
                                            this.setState({showLoginButton:false});
                                            this.setState({wrongMessage:""});
                                            setTimeout(()=>{
                                                 this.setState({showLoginButton:true});
                                                 this.setState({wrongMessage:"API未连线"});
                                            },1000);
                                        }}
                                    />
                                </View>
                                 <View style={{height:this.state.showLoginButton?0:35}}>
                                     <ActivityIndicator
                                        animating={!this.state.showLoginButton}
                                        style={{marginTop:3,height: 25}}
                                        color='#87ceeb'
                                        size="large"
                                      />
                                </View>
                            </View>
                            <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity onPress={this._pressRegisterButton.bind(this)}>
                                    <Text style={{color:'white',textAlign:'center'}}>注册</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this._pressForgetButton.bind(this)}>
                                    <Text style={{color:'white',textAlign:'center'}}>忘记密码</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1}}/>
                </View>
            </Image>
        );
    }
}

