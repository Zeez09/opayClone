import { FontAwesome6 } from "@expo/vector-icons";
import { Bolt, CircleDollarSign, Wallet } from "lucide-react-native";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Finance() {
  return (
    <SafeAreaView style={Styles.page}>
      <ScrollView contentContainerStyle={Styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={Styles.container}>
        <View style={Styles.headerTab}>
          <Text style={Styles.firstText}>Finance</Text>
          <Text>from BlueRidge Microfinance Bank</Text>
          <Bolt />
        </View>
        <View style={Styles.balanceContainer}>
          <View style={Styles.leftContent}>
            <Text>Total Balance</Text>
            <Text style={Styles.star}>⁎⁎⁎⁎</Text>
          </View>

          <View style={Styles.rightContent}>
            <Text>Total Interest</Text>
            <Text style={Styles.starRight}>⁎⁎⁎⁎</Text>
          </View>
        </View>
        
        <View style={Styles.allBoxes}>
          <View style={Styles.row}>
            <View style={Styles.box}>
              <View style={Styles.firstBox}>
                <Wallet color="green" fill="green" />
                <Text>Wallet</Text>
              </View>
              <Text style={Styles.firstBoxText}>
                You can deposit this{"\n"}amount in Owealth{"\n"}and earn daily{"\n"}interests
              </Text>
              <Text style={Styles.punctuations}>--.--</Text>
            </View>

            <View style={[Styles.box, Styles.boxAlt]}>
              <View style={Styles.firstBox}>
                <CircleDollarSign color="purple" />
                <Text>OWealth</Text>
              </View>
              <Text style={Styles.firstBoxText}>
                Your daily returns. You{"\n"}can withdraw at any{"\n"}time
              </Text>
              <Text style={Styles.punctuations}>--.--</Text>
            </View>
          </View>

          <View style={Styles.row2}>
            <View style={Styles.box1}>
              <View style={Styles.firstBox}>
                <FontAwesome6 name="bullseye" color="#8a48f5ff" fill="green" size={22} />
                <Text>Targets</Text>
              </View>
              <Text style={Styles.firstBoxText2}>
                Save daily, weekly, or{"\n"}monthly towards your{"\n"}goal
              </Text>
              
            </View>

            <View style={Styles.box1}>
              <View style={Styles.firstBox}>
                <FontAwesome6 name="piggy-bank" color="#8a48f5ff" size={22}/>
                <Text>SafeBox</Text>
              </View>
              <Text style={Styles.firstBoxText2}>
                Your daily, weekly or{"\n"}monthly automatic{"\n"}savings
              </Text>
            </View>
          </View>

          <View style={Styles.row3}>
            <View style={Styles.box1}>
              <View style={Styles.firstBox}>
                <FontAwesome6 name="bag-shopping" color="#8a48f5ff" size={22} fill="green" />
                <Text>Fixed</Text>
              </View>
              <Text style={Styles.firstBoxText2}>
                Min: #1000{"\n"}Tenor: 7-1000 days
              </Text>
              
            </View>

            <View style={Styles.box1}>
              <View style={Styles.firstBox}>
                <FontAwesome6 name="sack-dollar" size={22} color="#8a48f5ff" />
                <Text>Spend & Save</Text>
              </View>
              <Text style={Styles.firstBoxText2}>
                Your percentage{"\n"}savings every time you{"\n"}spend or transfer
              </Text>
            </View>
          </View>

          <View style={Styles.row4}>
            <View style={Styles.box4}>
              <View style={Styles.firstBox4}>
                <FontAwesome6 name="chart-line" size={18} color="#8a48f5ff" fill="green" />
                <Text>Savings Report</Text>
              </View>
              <Text style={Styles.firstBoxText2}>
                Check out your{"\n"}savings journey so far
              </Text>
              
            </View>

            
          </View>
        </View>


      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  container: {
    flex: 1,
  },

  scrollContainer: {
    paddingBottom: 20,
  },

  headerTab: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  firstText: {
    fontSize: 24,
    fontWeight: "600",
  },

  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
    color: "green",
  },

  allBoxes: {
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },

  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },

  box: {
    flex: 1,
    backgroundColor: "#dff9e0ff",
    borderRadius: 10,
    padding: 14,
    height: 170,
    justifyContent: "space-between",
    marginHorizontal: 5, 
  },

  box1: {
    flex: 1,
    backgroundColor: "#acb3ad3b",
    borderRadius: 10,
    padding: 14,
    height: 170,
    marginHorizontal: 5, 
  },

  boxAlt: {
    backgroundColor: "#f1dff9ff",
  },

  firstBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  firstBoxText: {
    fontSize: 12,
    color: "#626060ff",
    
  },

  firstBoxText2: {
    fontSize: 12,
    color: "#626060ff",
    marginTop: 10,
  },

  punctuations: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
  },

  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },

  row4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },

  box4: {
    backgroundColor: "#acb3ad3b",
    borderRadius: 10,
    padding: 14,
    height: 170,
    marginHorizontal: 5, 
    width: "47%",
  },

  firstBox4: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  
});
