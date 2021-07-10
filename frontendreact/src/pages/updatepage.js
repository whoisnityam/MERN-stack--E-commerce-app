import React, { useState } from 'react';
import {Text, View, StyleSheet,TouchableOpacity, TextInput, Alert} from 'react-native';
import COLORS from '../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'
import localhost from '../const/localhost';

const update=({navigation})=>{

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
    
        const submitHandler = () => {
            const URL = "http://"+localhost+":5000/delete"
            // console.log("URL: ", URL, "email: ", email, "password:", password)
            try {
                axios.post(URL).then(res => {
                    // console.log("response = ", res.data)
                    if (res.data === 'Success') {
                        // console.log("123sucess")
                        navigation.navigate('login')
                    }
                    else {
                        Alert.alert("Authentication Failed")
                    }
                })
            }catch (err) {
                console.log("error in axios ",err)
            }
    }
    
    const updateName = () => {
        const URL = "http://"+localhost+":5000/updatename"
   
             const data = {
                name: name
            }     
            try {
            axios.post(URL,data).then(res => {
                // console.log("response = ", res.data)
                if (res.data === 'Success') {
                    Alert.alert("Successfully Updated")
                    // navigation.navigate('accounts')
                    setName('')
                }
                else {
                    Alert.alert("Update Failed")
                }
            })
        }catch (err) {
            console.log("error in axios ",err)
        }
    }
    const updateEmail = () => {
        const URL = "http://"+localhost+":5000/updateemail"

 
           const data = {
               
                email: email
            }      
             try {
            axios.post(URL,data).then(res => {
                // console.log("response = ", res.data)
                if (res.data === 'Success') {
                    Alert.alert("Successfully Updated")
                    setEmail('')
                    // navigation.navigate('login')
                }
                else {
                    Alert.alert("Update Failed")
                }
            })
        }catch (err) {
            console.log("error in axios ",err)
        }
    }
    const updatePhone = () => {
        console.log("hello from phone ", phone)

        const URL = "http://"+localhost+":5000/updatephone"
  
            const data = {
                phone: phone,
             }
             
            try {
            axios.post(URL,data).then(res => {
                // console.log("response = ", res.data)
                if (res.data === 'Success') {
                    Alert.alert("Successfully Updated")
                    setPhone('')
                    // navigation.navigate('login')
                }
                else {
                    Alert.alert("Update Failed")
                }
            })
        }catch (err) {
            console.log("error in axios ",err)
        }
    }
    const updatePassword = () => {
        const URL = "http://"+localhost+":5000/updatepassword"
            const data = {
                password: password,
            }
     
            try {
            axios.p,dataost(URL).then(res => {
                // console.log("response = ", res.data)
                if (res.data === 'Success') {
                    Alert.alert("Successfully Updated")
                    setPassword('')
                    // navigation.navigate('login')
                }
                else {
                    Alert.alert("Update Failed")
                }
            })
        }catch (err) {
            console.log("error in axios ",err)
        }
    }

        return(
            <View style={{backgroundColor:COLORS.white, flex:1,}}>
                <View style={{alignSelf:'center'}}>
                    <Text style={{color:COLORS.primary, fontSize:40, fontWeight:'bold'}}>Account Updation</Text>
                </View>

                <View style={{alignItems:'center'}}>
                        <View style={{flexDirection:"row", marginTop:30}}>
                        <View style={styles.textbox}>
                        <Icon name="person" color={COLORS.primary} size={24}/>
                            <TextInput  placeholder={"updated Name"} onChangeText={setName} value={name}/>
                                
                            
                        </View>
                        <View style={styles.updatebutton}>
                                <Icon name="sync-alt" color={COLORS.primary} size={24} onPress={updateName}/>
                        </View>
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                        <View style={{flexDirection:"row", marginTop:10}}>
                        <View style={styles.textbox}>
                        <Icon name="email" color={COLORS.primary} size={24}/>
                            <TextInput  placeholder={"updated email"} onChangeText={setEmail} value={email}/>
                                
                            
                        </View>
                        <View style={styles.updatebutton}>
                                <Icon name="sync-alt" color={COLORS.primary} size={24} onPress={updateEmail}/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={styles.textbox}>
                        <Icon name="phone" color={COLORS.primary} size={24}/>
                            <TextInput placeholder={"updated phone"} onChangeText={setPhone} value={phone}/>
                                
                            
                        </View>
                        <View style={styles.updatebutton}>
                                <Icon name="sync-alt" color={COLORS.primary} size={24} onPress={updatePhone}/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={styles.textbox}>
                        <Icon name="lock" color={COLORS.primary} size={24}/>
                            <TextInput secureTextEntry placeholder={"updated password"} onChangeText={setPassword} value={password} />
                                
                            
                        </View>
                        <View style={styles.updatebutton}>
                                <Icon name="sync-alt" color={COLORS.primary} size={24} onPress={updatePassword}/>
                        </View>
                </View>
                    </View>
                    <View style={{alignItems:'center', marginVertical:50,}}>
                    <TouchableOpacity onPress={submitHandler} >
                    <View style={styles.delete} >
                        <Text style={{color:COLORS.primary, fontWeight:'bold'}}>Delete your account instead?</Text>
                    </View>
                    </TouchableOpacity>
                    </View>

                  
                    <View style={styles.bottom}>
                    <TouchableOpacity onPress={()=>navigation.navigate('accounts')} >
                    <View style={styles.bottombuttonh} >
                        <Icon name="arrow-back-ios" color={COLORS.white} size={24}/>
                        <Text style={{color:COLORS.white, fontWeight:'bold'}}>Back</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('homepage')} >
                    <View style={styles.bottombuttonb} >
                        <Text style={{color:COLORS.white, fontWeight:'bold', justifyContent:'flex-end', paddingRight:10}}>Home</Text>
                        <Icon name="arrow-forward-ios" color={COLORS.white} size={24}/>
                    </View>
                    </TouchableOpacity>
                    </View>
                </View>    
           

        )
    }


const styles = StyleSheet.create({
    textbox:{
                    width:'70%' ,
                    marginHorizontal:10,
                    borderWidth:2,
                    marginTop:10,
                    paddingHorizontal:10,
                    borderColor:COLORS.primary,
                    borderRadius:23,
                    paddingVertical:2,
                    flexDirection:"row",
                    alignItems: 'center'


    },
    updatebutton:{

                    width:80,
                    height:55,
                    backgroundColor: COLORS.secondary,
                    marginTop:10,
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:21
                    
    },
    delete:{
        flexDirection: 'row',
        paddingVertical: 15, 
        paddingHorizontal:50,
        width:'80%',
        borderWidth:2,
        borderRadius:20,
        borderColor:COLORS.primary,
        backgroundColor:COLORS.secondary,
    },
    bottom:{
            marginTop:192,        
            flexDirection:'row',
            // bottom:0,
            justifyContent:'space-between',
            // position: 'absolute',

    },
    bottombuttonh:{
        flexDirection: 'row',
        paddingVertical: 15, 
        paddingHorizontal:20,
        backgroundColor:COLORS.primary,
        borderTopRightRadius:20,
    },
    bottombuttonb:{
        flexDirection: 'row',
        paddingVertical: 15, 
        paddingHorizontal:20,
        backgroundColor:COLORS.primary,
        borderTopLeftRadius:20,
    },
});
  
export default update;