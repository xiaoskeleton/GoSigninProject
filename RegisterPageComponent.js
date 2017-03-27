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

import LoginPageComponent from './LoginPageComponent';

export default class RegisterPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showLoginButton: true,verificationCD:0,userName:"",password:"",wrongMessage:"",verificationCode:"",verificationName:"发送验证码"};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
    return (
            <Image source={{uri:'http://file06.16sucai.com/2016/0715/852f0bc04bd49007232ae65dd413d4d2.jpg'}}
            style={{flex:1}}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text style={{color:'white',fontSize:16}}>  &#60;返回登陆</Text>
                </TouchableOpacity>
                <View style={{flex:1,flexDirection: 'row'}}>
                    <View style={{flex:1}}/>
                    <View style={{flex:14,flexDirection: 'column',alignItems: 'stretch'}}>
                        <View style={{flex:1}}/>
                        <View style={{flex:5,alignItems: 'stretch'}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={{uri: 'http://pic.58pic.com/58pic/14/63/03/958PICA58PICNwV_1024.jpg'}}
                                style={{width: 100, height: 100}} />
                            </View>
                            <View style={{marginTop:30,borderRadius:10,borderWidth:0,backgroundColor:'white'}}>
                                <TextInput
                                  style={{padding:0,paddingLeft:20,height: 40,fontSize:16,textAlign:'left',borderBottomWidth:1,borderBottomColor:'#d3d3d3'}}
                                  placeholder="请输入手机号/邮箱"
                                  editable ={this.state.showLoginButton}
                                  placeholderTextColor="#d3d3d3"
                                  underlineColorAndroid="#d3d3d3"
                                  returnKeyType='next'
                                  underlineColorAndroid="transparent"
                                  clearButtonMode="always"
                                  enablesReturnKeyAutomatically={true}
                                  onChangeText={(userName) => this.setState({userName})}
                                />
                                <View style={{flexDirection: 'row',height:40,borderBottomWidth:1,borderBottomColor:'#d3d3d3'}}>
                                    <View style={{flex:1}}>
                                        <TextInput style={{flex:1}}
                                          style={{padding:0,paddingLeft:20,height: 40,fontSize:16,textAlign:'left',borderBottomWidth:1,borderBottomColor:'#d3d3d3'}}
                                          placeholder="请输入收到的验证码"
                                          editable ={this.state.showLoginButton}
                                          maxLength={4}
                                          placeholderTextColor="#d3d3d3"
                                          underlineColorAndroid="#d3d3d3"
                                          returnKeyType='next'
                                          underlineColorAndroid="transparent"
                                          clearButtonMode="always"
                                          enablesReturnKeyAutomatically={true}
                                          onChangeText={(verificationCode) => this.setState({verificationCode})}
                                        />
                                    </View>
                                    <View 
                                    style={{width:130,marginTop:2}}>
                                        <Button        
                                        title={this.state.verificationName}
                                            color="#87ceeb"
                                            disabled={this.state.verificationCD!=0}
                                            onPress={() => 
                                            {
                                                this.setState({verificationCD:60});
                                                let verName='重新发送（60s）';
                                                this.setState({verificationName:verName})
                                                this.interval=setInterval(()=>{
                                                    this.setState({verificationCD:this.state.verificationCD-1});
                                                    this.setState({verificationName:'重新发送（'+this.state.verificationCD+'s）'})
                                                    if(this.state.verificationCD<=0)
                                                    {
                                                        this.setState({verificationName:'发送验证码'})
                                                        this.setState({verificationCD:0});
                                                        this.interval&&clearInterval(this.interval);
                                                    }

                                                },100);
                                            }}
                                        />
                                    </View>
                                </View>
                                <TextInput
                                  style={{padding:0,paddingLeft:20,marginTop:-0,height: 40,fontSize:16,textAlign:'left'}}
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
                                        title="注册"
                                        color="#87ceeb"
                                        disabled={this.state.userName==""||this.state.password==""||this.state.verificationCode==""}
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
                        </View>
                    </View>
                    <View style={{flex:1}}/>
                </View>
            </Image>
    );
    }
}