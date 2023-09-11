import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

const API_KEY = 'c87a9c6fbcmshbbbaae933940fcdp1a4932jsn7db25ed70fe7';

const Home = () => {
  const [barcodeData, setBarcodeData] = useState("");
  const [barcodeImage, setBarcodeImage] = useState(null);

  const handleGenerateBarcode = async () => {
    const url = `https://barcode18.p.rapidapi.com/upca/data/${barcodeData}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c87a9c6fbcmshbbbaae933940fcdp1a4932jsn7db25ed70fe7',
        'X-RapidAPI-Host': 'barcode18.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setBarcodeImage(result);
    } catch (error) {
      console.error("Error generating barcode:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Generate Your Barcode</Text>
      <TextInput
        placeholder="input ID"
        value={barcodeData}
        onChangeText={setBarcodeData}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.btnbarcode} onPress={handleGenerateBarcode}>
        <Text style={styles.txtbarcode}>Generate</Text>
      </TouchableOpacity>
      {barcodeImage && (
        <Image source={{ uri: barcodeImage }} style={styles.barcodeImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#333333",
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 20,
  },
  input: {
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
    marginBottom: 20,
  },
  btnbarcode: {
    backgroundColor: "#0077C2",
    padding: 10,
    width: 150,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  txtbarcode: {
    color: "#ffffff",
    fontSize: 18,
  },
  barcodeImage: {
    width: 200,
    height: 100,
    marginTop:200
  },
});

export default Home;































// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import QRCode from "react-native-qrcode-svg";

// const Home = () => {
//   const [barcodeData, setBarcodeData] = useState("");

//   return (
//     <View style={styles.content}>
//       <View style={styles.title}>
//         <Text style={styles.subtitle}>Generate Your Qrcode</Text>
//       </View>
//       <View style={styles.barcode}>
//         <TextInput
//           placeholder="Input ID"
//           value={barcodeData}
//           onChangeText={setBarcodeData}
//           keyboardType="numeric"
//           style={styles.input}
//         />
//         <Button title="Generate " onPress={() => {}} />
//         <View style={styles.bar}>
//         {barcodeData ? <QRCode value={barcodeData} size={200} /> : null}
//         </View>

//         <View style={styles.hak}>
//           <Text>
//           © 2023 Hak Cipta Dari Edward
//           </Text>
//         </View>
//       </View>


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//       content:{
//         alignItems:'center',
//         marginTop:100,

//       },
//       subtitle:{
//         fontSize:30,
//         fontWeight:'500',
//         color:'#59a5f5'

//       },
//       input:{
        
//     borderColor: "#00619a",
//     borderWidth: 1.5,
//     width: 300,
//     height: 50,
//     borderRadius: 5,
//     fontSize: 18,
//     textAlign: "center",
//     color: "#333333",
//     fontWeight: "500",
//     letterSpacing: 5,
//     marginTop:20,
//     marginBottom:10
//       },
//      bar:{
//       alignItems:'center',
//       marginTop:20

//      },
//      hak:{
//       marginTop:400,
//       textAlign:'center',
//       alignItems:'center',
//       color:'#5c5c5c'
//      }
// });

// export default Home;

