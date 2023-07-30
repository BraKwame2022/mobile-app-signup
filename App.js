import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      email:"",
      password:"",
    }
  }
  render() {
    return (
      <View style={styles.container}>
              <View style={styles.signupTextContainer}>
                <Text style={styles.signup}>Sign up</Text>
              </View>

              <View>
                    <TextInput style={styles.input}
                    placeholder="Username" 
                    autoCapitalize='none' 
                    autoCorrect="none"
                    value={this.state.username}
                    onChangeText={(username)=>{
                      this.setState({username})
                    }}
                    />
                    <TextInput style={styles.input}
                    placeholder="Email" 
                    autoCapitalize='none' 
                    autoCorrect="none"
                    value={this.state.email}
                    onChangeText={(email)=>{
                      this.setState({email})
                    }}
                    />
                    <TextInput style={styles.input}
                    placeholder="Password" 
                    secureTextEntry={true}
                    autoCapitalize='none' 
                    autoCorrect="none"
                    value={this.state.password}
                    onChangeText={(password)=>{
                      this.setState({password})
                    }}
                    />
                    <TextInput style={styles.input}
                    placeholder="Password again" 
                    secureTextEntry={true}
                    autoCapitalize='none' 
                    autoCorrect="none"
                    value={this.state.password}
                    onChangeText={(password)=>{
                      this.setState({password})
                    }}
                    />
                  
              </View>

              <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}> Sign up</Text>
              </TouchableOpacity>

              <View style={styles.LastContainer}>
                <Text style={styles.lastText1}>You already have an account?</Text>
                <Text style={styles.lastText2}>Login in</Text>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 30,
    borderRadius:10,
    marginVertical:60,
  },

  signup:{
    fontSize:40,
    color:"#6c14c9"
  },

  signupTextContainer:{
    marginBottom:30
  },

  input:{
    borderBottomWidth:4,
    borderBottomColor:"#6c14c9",
    fontSize:20,
    height:50,
    marginTop:20
  },

  buttonContainer:{
    height:50,
    backgroundColor:"#6c14c9",
    marginTop:40,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center"
  },

  buttonText:{
    color:"white",
    fontSize:20
  },

  LastContainer:{
    flexDirection:"row",
    marginTop:20,
    justifyContent:"center"
  },

  lastText1:{
    marginRight:15,
    fontSize:16,
    alignSelf:"flex-start"
  },

  lastText2:{
    color:"#1e48bd"
  }



  

})

export default App;
