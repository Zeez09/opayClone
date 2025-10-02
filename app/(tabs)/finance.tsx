import { Bolt, Wallet } from "lucide-react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Finance() {
  return (
    <SafeAreaView style={Styles.page}>
      <View style={Styles.container}>
        <View style={Styles.headerTab}>
          <Text style={Styles.firstText}>Finance</Text>
          <Text>from BlueRidge Microfinance Bank</Text>
          <Bolt/>


        </View>

        <View style={Styles.balaceContainer}>
          <View style={Styles.leftContent}>
            <Text>Total Balance</Text>
            <Text style={Styles.star}>⁎⁎⁎⁎</Text>
            
            

          </View>
          <View style={Styles.rightContent}>
            <Text>Total interest</Text>
            <Text style={Styles.starRight}>⁎⁎⁎⁎</Text>

          </View>
          
        </View>

        <View style={Styles.boxes}>
        <View style={Styles.box1}>
          <View style={Styles.firstBox}>
            <Wallet color="green" fill="green"/>
            <Text>Wallet</Text>
            </View>
          <Text style={Styles.firstBoxText}>You can deposit this{"\n"}amount in Owealth{"\n"}and earn daily{"\n"}interests</Text>

        </View>
        <View style={Styles.box2}>

        </View>
        </View>

      </View>
    </SafeAreaView>
    
  );
}

const Styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  container: {
    flex: 1,
    
  },

  headerTab: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  firstText: {
    fontSize: 24,
    fontWeight: "600",
  },

  balaceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },

  leftContent: {
    gap: 2,
  },

  rightContent: {
    gap: 2,

  },

  star: {
    fontSize: 20,
    fontWeight: "900",
  },

  starRight: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "right",
  },

  boxes: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },

  box1: {
    flex: 1,                             
    backgroundColor: "#dff9e0ff",
    padding: 20,
    borderRadius: 10,
    height: 150,
    
  },

  box2: {
    flex: 1,                             
    backgroundColor: "#f1dff9ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 150,
  },

  firstBox: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    

  },

  firstBoxText: {
    marginTop: 10,
    fontSize: 16,
    color: "#626060ff",
  },
});
