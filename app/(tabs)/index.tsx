import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Asterisk, Bell, CalendarCheck, ChevronRight, GraduationCap, Headset, Landmark, Megaphone, MoveDiagonal, ScanLine, ShieldCheck, Smartphone, SquareUser, TvMinimalPlay } from "lucide-react-native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";






export default function Index() {
  return (
    <SafeAreaView style={styles.page}>
      
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Hi</Text>

<TouchableOpacity 
  onPress={() => router.push("/login")} 
  style={styles.btn}
>
  <Text style={styles.btnText}>Login</Text>
</TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.actionItem}>
            <Headset size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <ScanLine  size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Bell  size={22} color="black" />
          </TouchableOpacity>

        </View>
      </View>


      <View style={styles.balanceContainer}>
        <View style={styles.balanceContainerTop}>

        <View style={styles.itemsLeft}>
        <ShieldCheck fill="white" />
        <Text style={styles.txt}>Available Balance</Text>
        </View>
        <View style={styles.itemsRight}>
          <Text style={styles.txt}>Transaction History</Text>
          <ChevronRight color="white"/>
          
        </View>
        </View>

        <View style={styles.balanceContainerBottom}>
          <View style={styles.itemLeft}>
            <View style={styles.itemAsterisk}>
            <Asterisk color="white"/>
            <Asterisk color="white"/>
            <Asterisk color="white"/>
            <Asterisk color="white"/>
          </View>
          <ChevronRight color="white"/>
          </View>

          <View style={styles.itemsRight}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>+ Add Money</Text>
          </TouchableOpacity>
          
        </View>
          


        </View>

      </View>

      <View style={styles.transactionTab}>
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems}>
          <TouchableOpacity>
          <SquareUser color="green" stroke="green" size={22}/>
          </TouchableOpacity>
        </View>
        <Text>To Opay</Text>
        </View>
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems}>
          <TouchableOpacity>
          <Landmark  stroke="green" size={22} color="green"/>
          </TouchableOpacity>
        </View>
        <Text>To Bank</Text>


        </View>
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems}>
          <TouchableOpacity>
          <MoveDiagonal  stroke="green" size={22}/>
          </TouchableOpacity>
        </View>
        <Text>Withdraw</Text>


        </View>
        </View>

        <View style={styles.utilityTab}>
            <View style={styles.transactionTabTop}>
          
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems1}>
          <TouchableOpacity>
          <Smartphone color="green" stroke="green" size={22}/>
          </TouchableOpacity>
        </View>
        <Text>Airtime</Text>
        </View>
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems1}>
          <TouchableOpacity>
          <Smartphone stroke="green" size={22} color="green"/>
          </TouchableOpacity>
        </View>
        <Text>Data</Text>


        </View>
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems1}>
          <TouchableOpacity>
          <FontAwesome6 name="sack-dollar"  color="green" size={22}/>
          </TouchableOpacity>
        </View>
        <Text>Spend & Save</Text>


        </View>

        <View style={styles.transactionTab1}>
        <View style={styles.tabItems1}>
          <TouchableOpacity>
          <FontAwesome6 name="lightbulb"  color="green" size={22}/>
          </TouchableOpacity>
        </View>
        <Text>Electricity</Text>


        </View>
            </View>

            <View style={styles.transactionTabBottom}>
          
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems1}>
          <TouchableOpacity>
          <FontAwesome6 name="coins" color="green" stroke="green" size={22}/>
          </TouchableOpacity>
        </View>
        <Text>Financial</Text>
        </View>
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems1}>
          <TouchableOpacity>
        <Megaphone stroke="green" size={22} color="green"/>
          </TouchableOpacity>
        </View>
        <Text>Invitation</Text>


        </View>
        <View style={styles.transactionTab1}>
        <View style={styles.tabItems1}>
          <TouchableOpacity>
          <CalendarCheck  color="green" size={22} stroke="green"/>
          </TouchableOpacity>
        </View>
        <Text>Check-In</Text>


        </View>

        <View style={styles.transactionTab1}>
        <View style={styles.tabItemsMore}>
          <TouchableOpacity style={styles.moreIcons}>
            <GraduationCap color="green" size={16} />
          
          <View style={styles.more}>
            <FontAwesome6 name="lightbulb"  color="green" size={16}/>
            <TvMinimalPlay color="green" size={16}/>
          </View>
          </TouchableOpacity>
          
          
          
        </View>
        <Text>More</Text>


        </View>
            </View>

            
        </View>
        
        


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  }, 


  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15, 
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  btn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "green",
    borderWidth: 1,
    backgroundColor: "#fff",
  },

  btnText: {
    color: "green",
    fontWeight: "600",
  },

  headerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,

  },

  actionItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  balanceContainer: {
    marginTop: 30,
    backgroundColor: "green",
    borderRadius: 10,
    padding: 20,
    height: 120,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 15,
    
  },

  balanceContainerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceContainerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },

  itemsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  txt: {
    color: "white",
    fontSize: 14,
    
  },

  itemsRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemAsterisk: {
    flexDirection: "row",
    alignItems: "center",
  },


  transactionTab: {
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },


  transactionTab1: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },


  tabItems: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d4fadbff",
    alignItems: "center",
    justifyContent: "center",
  },

  tabItems1: {
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: "#d4fadbff",
    alignItems: "center",
    justifyContent: "center",
  },

  utilityTab: {
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 15,
  },

  transactionTabTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  transactionTabBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    
  },

  tabItemsMore:{
    flexDirection:"column",
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: "#d4fadbff",
    alignItems: "center",
    justifyContent: "center",

  },

  moreIcons: {
  
  alignItems: "center",
},

more: { 
  flexDirection: "row", 
  gap: 6,
  alignItems: "center",
},





});
