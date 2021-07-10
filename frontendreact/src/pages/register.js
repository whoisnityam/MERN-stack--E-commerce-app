import React, {useState} from 'react';
import {Text,View,Image, TextInput, SafeAreaView,KeyboardAvoidingView} from 'react-native';
import COLORS from '../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import localhost from '../const/localhost';
// export default class register extends React.Component{
    const register=({navigation})=>{
    // render() {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');

        const submitHandler = () => {
            const URL = "http://"+localhost+":5000/register"
            console.log("URL: ", URL, "email: ", email, "password:", password)
            const data = {
                name: name,
                phone: phone,
                email: email,
                password: password,
            }
            try {

                console.log("Hello form try block")
                axios.post(URL, data).then(res => {
                    console.log("response = ", res.data)
                    if (res.data === 'Success') {
                        console.log("123sucess")
                        setPhone("")
                        setName("")
                        setPassword("")
                        setEmail("")
                        navigation.navigate('login')
                    }
                    else {
                        Alert.alert("Sorry please try later")
                    }
                })
            }catch (err) {
                console.log("error in axios ",err)
            }
        }
        // const {navigate} = this.props.navigation;
        return(
            <KeyboardAvoidingView  behavior='height' style={{flex:1}} >
            <ScrollView 
            contentContainerStyle={{flex:1}} >
            <View style={{backgroundColor:COLORS.white, flex:1}} >
                <Image source ={require('../assets/images.jpg')}
                    style={{width:"80%",height:"25%",borderRadius:50, marginHorizontal:40, marginVertical:20}}
                />
                <Text
                 style={{
                     fontSize:30,
                       alignSelf:"center",
                 }}
                >Conexao Stores</Text>

                <Text
                style={{
                     marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                   One stop destination for Mobiles Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, temporibus?
                </Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:25,
                    paddingHorizontal:10,
                    borderColor:COLORS.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color={COLORS.primary} size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor={COLORS.primary}
                        style={{paddingHorizontal:10}} required onChangeText={setEmail} value={email}
                    />
                </View>    

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:COLORS.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="phone" color={COLORS.primary} size={24}/>
                    <TextInput 
                        placeholder="Phone Number"
                        placeholderTextColor={COLORS.primary}
                        style={{paddingHorizontal:10}} required onChangeText={setPhone} value={phone}/>
                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:COLORS.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="person" color={COLORS.primary} size={24}/>
                    <TextInput 
                                placeholder="Name"
                                placeholderTextColor={COLORS.primary}
                                style={{ paddingHorizontal: 10 }} required onChangeText={setName} value={name}/>
                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:COLORS.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   <Icon name="lock" color={COLORS.primary} size={24}/>
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor={COLORS.primary}
                        style={{paddingHorizontal:10}} required onChangeText={setPassword} value={password}
                    />
                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:20,
                    backgroundColor: COLORS.primary,
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text
                    
                    onPress={submitHandler}
                    style={{
                        color:"white",
                        }}>Register</Text>
                </View>

                <Text 
                
                onPress={()=>navigation.navigate('login')}
                
                style={{
                    alignSelf:"center",
                    color:COLORS.primary,
                     paddingVertical:15
                }}>Already Registered?</Text>
            </View>
            </ScrollView>
         </KeyboardAvoidingView> 
        )
    }
// }

export default register;
