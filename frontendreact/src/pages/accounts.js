import React from 'react';
import {View, SafeAreaView, StyleSheet,} from 'react-native';
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../const/colors';

export default class login extends React.Component{

   render(){
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.infoBoxWrapper}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15,justifyContent: 'space-between',}}>
                <Icon name="account-circle" size={80} color={COLORS.primary} />
                <View style={{marginRight: 30}}>
                    <Title style={[styles.title, {
                    marginTop:15,
                    marginBottom: 5,
                    }]}>Nityam Redker</Title>
                    <Caption style={styles.caption}>@whoisnityam</Caption>
                </View>
                <View style={{marginTop:20}}>
                <Icon name="home" color={COLORS.primary} size={35} onPress={()=>navigate('homepage')}/>
                </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20, fontWeight:'bold'}}>+91-8975409090</Text>
                </View>
                <View style={styles.row}>
                <Icon name="email" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20, fontWeight:'bold'}}>redkernityam@gmail.com</Text>
                </View>
            </View>
            </View>

            <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => navigate('order')}>
                <View style={styles.menuItem}>
                    <Icon name="shopping-bag" color={COLORS.primary} size={25}/>
                    <Text style={styles.menuItemText}>Your Orders</Text>
                </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="favorite" color={COLORS.primary} size={25}/>
                    <Text style={styles.menuItemText}>Your Favorites</Text>
                </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                <View style={styles.menuItem}>
                    <Icon name="send-to-mobile" color={COLORS.primary} size={25}/>
                    <Text style={styles.menuItemText}>Tell Your Friends</Text>
                </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="support-agent" color={COLORS.primary} size={25}/>
                    <Text style={styles.menuItemText}>Support</Text>
                </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>navigate('updatepage')}>
                <View style={styles.menuItem}>
                    <Icon name="engineering" color={COLORS.primary} size={25} />
                    <Text style={styles.menuItemText}>Update Account Details</Text>
                </View>
                </TouchableRipple>
            </View>
            </SafeAreaView>
        )
    }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    backgroundColor: COLORS.white,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: COLORS.dark,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});