import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

const Home = () => {
  const [barcodeData, setBarcodeData] = useState("");

  return (
    <View style={styles.content}>
      <View style={styles.title}>
        <Text style={styles.subtitle}>Generate Your Qrcode</Text>
      </View>
      <View style={styles.barcode}>
        <TextInput
          placeholder="Input ID"
          value={barcodeData}
          onChangeText={setBarcodeData}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Generate " onPress={() => {}} />
        <View style={styles.bar}>
        {barcodeData ? <QRCode value={barcodeData} size={200} /> : null}
        </View>

        <View style={styles.hak}>
          <Text>
          © 2023 Hak Cipta Dari Edward
          </Text>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
      content:{
        alignItems:'center',
        marginTop:100,

      },
      subtitle:{
        fontSize:30,
        fontWeight:'500',
        color:'#59a5f5'

      },
      input:{
        
    borderColor: "#00619a",
    borderWidth: 1.5,
    width: 300,
    height: 50,
    borderRadius: 5,
    fontSize: 18,
    textAlign: "center",
    color: "#333333",
    fontWeight: "500",
    letterSpacing: 5,
    marginTop:20,
    marginBottom:10
      },
     bar:{
      alignItems:'center',
      marginTop:20

     },
     hak:{
      marginTop:400,
      textAlign:'center',
      alignItems:'center',
      color:'#5c5c5c'
     }
});

export default Home;

