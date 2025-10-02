import { FontAwesome6 } from "@expo/vector-icons";
import { Smartphone, Tickets } from "lucide-react-native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Rewards() {
  return (
    <SafeAreaView style={styles.page}>
      
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Rewards</Text>
          </View>

          <View style={styles.rewardsContainer}>
            <View style={styles.rewardsIcon}>
              <Smartphone size={120} />
              <Tickets size={120} style={{ transform: [{ rotate: "270deg" }] }} />
            </View>
            <View style={styles.rewardsTextContainer}>
              <Text style={styles.rewardsText}>Amazing Welcome Bonus</Text>
              <Text style={styles.rewardsText}>Just for You!</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.bottomIcon}>
              <FontAwesome6
                name="coins"
                size={24}
                color="brown"
                style={{ transform: [{ rotate: "270deg" }] }}
              />
              <Text style={styles.bottomText}>
                Enjoy <Text style={styles.mid}>Daily Rewards</Text> on your transactions
              </Text>
            </View>
          </View>
        </View>

        
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.bottomBtnText}>Login Now</Text>
        </TouchableOpacity>
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
    justifyContent: "space-between", 
  },
  header: {
    marginTop: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  rewardsContainer: {
    borderRadius: 8,
    height: 350,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#c6f4a1",
    marginTop: 20,
  },
  rewardsIcon: {
    flexDirection: "row",
  },
  rewardsTextContainer: {
    marginTop: 20,
    alignItems: "center",
    gap: 5,
  },
  rewardsText: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
  },
  line: {
    marginTop: 20,
    height: 1,
    width: "100%",
    backgroundColor: "#bab6b6ff",
    marginVertical: 10,
  },
  bottomIcon: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  mid: {
    fontWeight: "600",
    color: "green",
  },
  bottomText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  bottomBtn: {
    backgroundColor: "#23e38cd1",
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
    borderColor: "green",
    borderWidth: 1,
    alignSelf: "center",
    width: "90%",
    marginBottom: 30,
  },

  bottomBtnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },
});
