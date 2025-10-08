import { Aperture, ChevronRight, CircleQuestionMark } from "lucide-react-native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Me() {
  return (
    <SafeAreaView style={Styles.page}>
      <View style={Styles.container}>
        {/* ===== HEADER SECTION ===== */}
        <View style={Styles.headerTab}>
          <View style={Styles.mainHeader}>
            <View style={Styles.leftTxt}>
              <View style={Styles.headerIcon}>
                <Aperture color="green" />
              </View>

              <TouchableOpacity style={Styles.btn}>
                <Text style={Styles.btnTxt}>Login</Text>
              </TouchableOpacity>
            </View>

            <CircleQuestionMark size={32} color="black" />
          </View>
        </View>

        <View style={Styles.secondTab}>

          <View style={Styles.secondTab1}>
            <View style={Styles.headerIcon}>
              <Aperture color="green" />
            </View>
            <View style={Styles.textContainer}>
              <Text style={Styles.title}>Join Opay to Earn</Text>
              <Text style={Styles.subtitle}>
                The more customers you invite, the more you earn
              </Text>
            </View>

            <ChevronRight color="gray" />
          </View>

          


          <View style={Styles.secondTab1}>
            <View style={Styles.headerIcon}>
              <Aperture color="green" />
            </View>

            <View style={Styles.textContainer}>
              <Text style={Styles.title}>Transaction</Text>
            </View>

            <ChevronRight color="gray" />
          </View>

          <View style={Styles.secondTab1}>
            <View style={Styles.headerIcon}>
              <Aperture color="green" />
            </View>

            <View style={Styles.textContainer}>
              <Text style={Styles.title}>Transaction</Text>
            </View>

            <ChevronRight color="gray" />
          </View>

          
        </View>

        <View style={Styles.bottomTab}>
          <View style={Styles.secondTab1}>
            <View style={Styles.headerIcon}>
              <Aperture color="green" />
            </View>

            <View style={Styles.textContainer}>
              <Text style={Styles.title}>Transaction</Text>
            </View>

            <ChevronRight color="gray" />
          </View>

          <View style={Styles.secondTab1}>
            <View style={Styles.headerIcon}>
              <Aperture color="green" />
            </View>

            <View style={Styles.textContainer}>
              <Text style={Styles.title}>Transaction</Text>
            </View>

            <ChevronRight color="gray" />
          </View>

          <View style={Styles.secondTab1}>
            <View style={Styles.headerIcon}>
              <Aperture color="green" />
            </View>

            <View style={Styles.textContainer}>
              <Text style={Styles.title}>Transaction</Text>
            </View>

            <ChevronRight color="gray" />
          </View>

          <View style={Styles.secondTab1}>
            <View style={Styles.headerIcon}>
              <Aperture color="green" />
            </View>

            <View style={Styles.textContainer}>
              <Text style={Styles.title}>Transaction</Text>
            </View>

            <ChevronRight color="gray" />
          </View>

        </View>


        
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f6f8fbe7",
  },
  container: {
    flex: 1,
  },
  headerTab: {
    backgroundColor: "#c7fcc5ff",
    width: "100%",
    height: "22%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mainHeader: {
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  leftTxt: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  btnTxt: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  secondTab: {
    position: "absolute",
    top: "15%",
    alignSelf: "center",
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  secondTab1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    fontWeight: "600",
    fontSize: 15,
  },
  subtitle: {
    fontSize: 12,
    color: "gray",
  },

  bottomTab: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginTop: 210,

  },
  
});
