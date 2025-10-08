import { FontAwesome6 } from '@expo/vector-icons';
import { ShieldCheck, Zap } from 'lucide-react-native';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'react-native-check-box';

export default function Cards() {
  const [activeTab, setActiveTab] = useState("virtual");

  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={Styles.page}>
      <View style={Styles.container}>

        <View style={Styles.headerTab}>
          <Text style={Styles.headerTextLeft}>OPay Cards</Text>
          <Text style={Styles.headerTextRight}>Q&A</Text>
        </View>

        
        <View style={Styles.heroTab}>
          <TouchableOpacity onPress={() => setActiveTab("virtual")}>
            <View style={Styles.tabItem}>
              <Text
                style={[
                  Styles.heroTabText,
                  activeTab === "virtual" && Styles.activeText,
                ]}
              >
                Virtual Card
              </Text>
              {activeTab === "virtual" && <View style={Styles.shortBorder} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab("physical")}>
            <View style={Styles.tabItem}>
              <Text
                style={[
                  Styles.heroTabText,
                  activeTab === "physical" && Styles.activeText,
                ]}
              >
                Physical Card
              </Text>
              {activeTab === "physical" && <View style={Styles.shortBorder} />}
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={Styles.scrollContainer} showsVerticalScrollIndicator={false}>

        {activeTab === "virtual" ? (
          
          
          <View style={Styles.cardTab}>
            <View style={Styles.cardTop}>
              <Text style={Styles.txt}>OPay</Text>
              <View style={Styles.bottomTxt}>
                <Text style={Styles.txtLeft}>Virtual Card</Text>
                <Text style={Styles.txtRight}>Verve</Text>
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <Zap color="#059c50ff" size={22} fill="#059c50ff" />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Instant Access</Text>
                <Text style={Styles.iconTxt2}>
                  Apply and activate <Text style={Styles.iconTxt3}>Instantly</Text>
                </Text>
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <FontAwesome6 name="sack-dollar" color="#059c50ff" size={22} />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Limited-time cashback</Text>
                <Text style={Styles.iconTxt2}>
                  win up to{" "}
                  <Text style={Styles.iconTxt3}>
                    10% cashback on card transactions
                  </Text>
                  {"\n"}before Oct 31, 2025
                </Text>
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <FontAwesome6 name="earth-africa" color="#059c50ff" size={22} />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Rep Your State Of Origin</Text>
                <Text style={Styles.iconTxt3}>
                  Get a virtual OPay card unique to your state {"\n"}of origin
                </Text>
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <FontAwesome6 name="globe" color="#059c50ff" size={22} />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Online Merchant Acceptance</Text>
                <Text style={Styles.iconTxt2}>Accepted by <Text style={Styles.iconTxt3}>40,000+</Text> online merchants{"\n"}including JUMIA, KONGA, NETFLIX UBER{"\n"}Wallet Funding and others</Text>
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <ShieldCheck  color="#059c50ff" fill="green" stroke={"white"} size={32} />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Security</Text>
                <View style={Styles.lastTxt}>
                <Text style={Styles.iconTxt3}>CBN</Text><Text style={Styles.iconTxt2}>
                    licensed,
                  </Text><Text style={Styles.iconTxt3}>NDIC</Text><Text style={Styles.iconTxt2}>
                    Insured
                  </Text>
                  </View>
              </View>
            </View>

          </View>
        ) : (
          <View style={Styles.cardTab}>
            <View style={Styles.cardTop1}>
              <Text style={Styles.txt}>OPay</Text>
              <Text style={Styles.txtRight1}>Verve</Text>
              </View>
            

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <FontAwesome6 name="credit-card" color="#059c50ff" size={22} fill="#059c50ff" />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Free Application and Usage</Text>
                <View style={Styles.iconTxt1}>

                <Text style={Styles.iconTxt3}>
                  Free </Text><Text style={Styles.iconTxt2}>Application,</Text>
                  <Text style={Styles.iconTxt3}>
                  Zero </Text><Text style={Styles.iconTxt2}>maintenance</Text></View>
                
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <FontAwesome6 name="sack-dollar" color="#059c50ff" size={22} />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Limited-time cashback</Text>
                <Text style={Styles.iconTxt2}>
                  win up to{" "}
                  <Text style={Styles.iconTxt3}>
                    10% cashback on card transactions
                  </Text>
                  {"\n"}before Oct 31, 2025
                </Text>
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <FontAwesome6 name="sack-dollar" color="#059c50ff" size={22} />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Earn</Text>
                <Text style={Styles.iconTxt2}>
                  Flexible Spending with <Text style={Styles.iconTxt3}>15%</Text> annual interest
                </Text>
              </View>
            </View>

            <View style={Styles.bottomCardTab1}>
              <View style={Styles.iconDiv}>
                <ShieldCheck  color="#059c50ff" fill="green" stroke={"white"} size={32} />
              </View>
              <View style={Styles.iconDivTxt}>
                <Text style={Styles.iconTxt}>Security</Text>
                <View style={Styles.lastTxt}>
                <Text style={Styles.iconTxt3}>CBN</Text><Text style={Styles.iconTxt2}>
                    licensed,
                  </Text><Text style={Styles.iconTxt3}>NDIC</Text><Text style={Styles.iconTxt2}>
                    Insured
                  </Text>
                  </View>
              </View>
            </View>


          </View>
        )}
        </ScrollView>

        <View style={Styles.bottomBtnTab}>
          <View style={Styles.topInner}>
          <CheckBox
        isChecked={checked}
        onClick={() => setChecked(!checked)}
        checkedCheckBoxColor="#4CAF50"  
        uncheckedCheckBoxColor="#aaa" 
      />
      <Text style={Styles.bottomTxt2}>Click the button below to accept <Text style={Styles.iconTxt3}>Terms &{"\n"}Conditions</Text></Text>
      </View>
      

        </View>
        <TouchableOpacity style={Styles.bottomBtn}>
                <Text style={Styles.bottomBtnText}>Get It Now</Text>
              </TouchableOpacity>


      </View>
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
  headerTab: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTextLeft: {
    fontSize: 24,
    fontWeight: "600",
  },
  headerTextRight: {
    fontSize: 16,
    fontWeight: "500",
    color: "green",
  },
  heroTab: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  tabItem: {
    alignItems: "center",
  },
  heroTabText: {
    fontSize: 18,
    color: "#ccc",
  },
  activeText: {
    color: "black",
  },
  shortBorder: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    width: 40, 
    marginTop: 5,
    borderRadius: 1,
  },
  cardTab: {
    marginTop: 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    flexDirection: "column",
    marginVertical: 20,
    gap: 15,
  },
  cardTop: {
    height: 200,
    backgroundColor: "#25f68dff",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  txt: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    margin: 20,
  },
  bottomTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  txtLeft: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
  txtRight: {
    color: "#252cf6ff",
    fontSize: 24,
    fontWeight: "600",
  },
  bottomCardTab1: {
    flexDirection: "row",
    gap: 15,
  },
  iconDiv: {
    height: 50,
    width: 50,
    backgroundColor: "#d9d9d9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconDivTxt: {
    flexDirection: "column",
    justifyContent: "center",
  },
  iconTxt: {
    fontSize: 18,
    fontWeight: "500",
  },
  iconTxt2: {
    fontSize: 14,
    fontWeight: "600",
  },
  iconTxt3: {
    fontSize: 14,
    color: "green",
    fontWeight: 700,
  },

  scrollContainer: {
    paddingBottom: 20,
  },

  lastTxt:{
    flexDirection: "row",
    gap: 4,

  },

  bottomBtnTab:{
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    marginTop: 30,
    
    

  },

  topInner:{
    flexDirection:"row",
    gap: 10,

  },

  bottomTxt2:{
    fontWeight: 600,
    color: "#686666ff"


  },


  bottomBtn: {
    backgroundColor: "#09f768ff",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
    width: "90%",
    margin: 15,
  },

  bottomBtnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  cardTop1:{
    flexDirection: "row",
    height: 200,
    backgroundColor: "#25f68dff",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,

  },

  txtRight1:{
    color: "blue",
    fontSize: 24,
    fontWeight: "600",
    margin: 20,
  },

  iconTxt1:{
    flexDirection:"row",
    gap: 4,

  },
});
