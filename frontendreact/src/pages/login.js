import React, { useState } from 'react';
import {Text,View,Image, TextInput, Alert} from 'react-native';
import COLORS from '../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import localhost from '../const/localhost';

// export default class login extends React.Component{
const login = ({ navigation }) => {
        
    
    // render() {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
          
        const submitHandler = () => {
            const URL = "http://"+localhost+":5000/login"
            // console.log("URL: ", URL, "email: ", email, "password:", password)
            const data = {
                email: email,
                password: password,
            }
            try {
                axios.post(URL, data).then(res => {
                    // console.log("response = ", res.data)
                    if (res.data === 'Success') {
                        // console.log("123sucess")
                        navigation.navigate('homepage')
                        setPassword("")
                        setEmail("")
                    }
                    else {
                        Alert.alert("Authentication Failed")
                    }
                })
            }catch (err) {
                console.log("error in axios ",err)
            }
        }
            // useEffect(() => {
            //   if (userInfo) {
            //     props.history.push(redirect);
            //   }
            // }, [props.history, redirect, userInfo]);
        // const {navigate} = this.props.navigation;
        return (
            // <Provider store={store}>
            <View style={{backgroundColor:COLORS.white ,flex:1}}>
                <Image source ={require('../assets/images.jpg')}
                    style={{width:"80%",height:"33%",borderRadius:50, marginHorizontal:40, marginVertical:20}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >Conexao Stores</Text>

                <Text
                style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eum. Rem similique delectus harum, ex et culpa molestias aspernatur distinctio!
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:COLORS.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="contact-phone" color={COLORS.primary} size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}} placeholder="Email" required onChangeText={setEmail} value={email}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:COLORS.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color={COLORS.primary} size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}} placeholder="password" required onChangeText={setPassword} value={password}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:20,
                    backgroundColor:COLORS.primary,
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text onPress={submitHandler}
                    
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Login</Text>
                </View>
                <Text 
                
                onPress={()=>navigation.navigate('register')}
                
                style={{
                    alignSelf:"center",
                    color:COLORS.primary,
                    fontFamily:"SemiBold",
                    paddingVertical:15
                }}>New User</Text>
                </View>
                // </Provider>
        )
    }

export default login;