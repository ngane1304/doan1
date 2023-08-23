import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from './style';
const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
          <View style={{flex:1, magrinVertical:20,}}>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
            <Image source={require('../../../Img/shopee.png')} style={{height:70, width:220}}/>
            </View>
            <View style={styles.header}>
              <Text style={{fontSize: 30, fontWeight:'bold', color:'black'}}>Login</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.bodyTop}>
                {/*Username*/}
                <View style={{marginBottom:20}}>
                  <Text style={{color:'black'}}>Username</Text>
                  <View style={{flexDirection:'row', borderBottomColor:'grey', borderBottomWidth:1}}>
                    <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                      <Icon name="user" size={12}/>
                    </View>
                    <View style={{flex:1,}}><TextInput placeholder={'Type your username'} /></View>
                  </View>
                </View>
                {/*Password*/}
                <View>
                  <Text style={{color:'black'}}>Password</Text>
                  <View style={{flexDirection:'row', borderBottomColor:'grey', borderBottomWidth:1}}>
                    <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                      <Icon name="lock" size={12}/>
                    </View>
                    <View style={{flex:1,}}>
                      <TextInput secureTextEntry={true} placeholder={'Type your password'} />
                    </View>
                  </View>
                </View>
                {/*Forgot Password*/}
                <View style={{marginTop:10, alignItems:'flex-end'}}>
                  <TouchableOpacity><Text style={{color:'black'}}>Forgot password?</Text></TouchableOpacity>
                </View>
                {/*Login button*/}
                <TouchableOpacity>
                  <View style={styles.loginButton}>
                    <Text style={{fontWeight:'bold'}}>LOGIN</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.bodyBottom}>
                  <Text>Or Sign Up Using</Text>
                <View style={{marginTop:15, flexDirection:'row'}}>
                  <TouchableOpacity style={styles.logoFacebook}>
                    <Icon name="facebook-f" size={20} color={'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.logoGoogle}>
                    <Icon name="google" size={20} color={'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.logoTwitter}>
                    <Icon name="twitter" size={20} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <Text>Or Sign Up Using</Text>
              <TouchableOpacity>
                <Text style={{color:'black', fontWeight:'500'}}>SIGN UP</Text>
              </TouchableOpacity>{/* button */}
            </View>
          
          </View>
          
        </View>
        
        
      </View>
  );
};
export default Login;
