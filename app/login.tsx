import { router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <SafeAreaView style={styles.page}>
    <View style={styles.container}>
      <View style={styles.headerTab}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={32}/>
        </TouchableOpacity>

        
      </View>

      <View style={styles.heroSection}>
        <Text style={styles.txt1}>O</Text>
        <Text style={styles.txt2}>Pay</Text>

      </View>

      <View style={styles.inputSection}>
        <TextInput placeholder='Enter your Mobile No./Email' style={styles.input1} />
        <TextInput placeholder='Enter 6-digit Password' style={styles.input1} />
        <Text style={styles.forgotPassword}>forgot password</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        
        </View>

        <View style={styles.bottomTab}>
          <Text style={styles.bottomTxt1}>Don't have an Opay Account yet?</Text>
          <Text style={styles.bottomTxt2}>Click here to get one</Text>

        </View>


      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  container: {
    flex: 1,
    
    
  },

  headerTab: {
    marginTop: 40,

  },

  heroSection: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  txt1: {
    fontSize: 40,
    fontWeight: 700,
    color: "rgba(58, 212, 89, 0.93)"

  },

  txt2: {
    fontSize: 40,
    fontWeight: 700,
    color: "#0f257cff",
  },

  inputSection:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    gap: 15,
    
  },
  input1: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#dcd9d9ff",
    borderColor: "#ccc",
    paddingHorizontal: 14,

  },

  forgotPassword: {
    color: "#2fe666c0",
    alignSelf: "flex-end"

  },

  btn:{
    marginTop: 30,
    paddingHorizontal: 13,
    paddingVertical: 13,
    width: "90%",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#3dc466ff"

  },

  btnTxt: {
    color: "white",
    fontWeight: 600,
    fontSize: 14
  },

  bottomTab: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: "auto"
  },

  bottomTxt1: {
    fontWeight: 700
  },

  bottomTxt2: {
    color: "green",
    fontWeight: 700
  }

  
});
