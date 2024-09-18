import React, { useState } from 'react';  
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';  

const App = () => {  
  const [phoneNumber, setPhoneNumber] = useState('');  

  const handleContinue = () => {  
    console.log('Số điện thoại:', phoneNumber);  
  };  

  return (  
    <View style={styles.container}>  
       <View style={styles.header}>  
        <Text style={styles.title}>Đăng nhập</Text>  
      </View>   
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>  
      <Text style={styles.description}>  
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro  
      </Text>  
      <TextInput  
        style={styles.input}  
        placeholder="Nhập số điện thoại của bạn"  
        keyboardType="phone-pad"  
        value={phoneNumber}  
        onChangeText={setPhoneNumber}  
      />  
      <TouchableOpacity style={styles.button} onPress={handleContinue}>  
        <Text style={styles.buttonText}>Tiếp tục</Text>  
      </TouchableOpacity>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
    justifyContent: 'center',  
    backgroundColor: '#fff',  
  },
  header: {  
    marginBottom: 20,  
    borderRadius:5,
    borderColor:'#000',
    borderBottomWidth:1,
    padding:5,
    
  },  
  title: {  
    fontSize: 30,  
    fontWeight: 'bold',  
  },
  subtitle: {  
    fontSize: 18,  
    marginBottom: 10,  
  },  
  description: {  
    fontSize: 14,  
    marginBottom: 20,  
    color: '#666',  
  },  
  input: {  
    height: 50,  
    borderColor: '#cdd',  
    borderWidth: 1,  
    borderRadius: 5,  
    paddingHorizontal: 10,  
    marginBottom: 20,  
  },
  button: {  
    height: 50,  
    borderColor: '#128',  
    borderWidth: 2,  
    borderRadius: 5,  
    justifyContent: 'center',  
    alignItems: 'center',  
    marginBottom: 25,  
    backgroundColor:''
  },    
  buttonText: {  
    color: 'green',  
    fontSize: 18,  
  }
});  

export default App;
