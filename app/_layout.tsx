import { Link, Slot } from "expo-router";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Note it Down!</Text>
        <Slot />
      </View>
      <View style={styles.nav}>
        <Link href={"/explore"}>
          <Text>Go to Explore page</Text>
        </Link>
        <Link href={"/"}>
          <Text>Go to For You page</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f1e5",
    height: "90%",
  },
  nav: {
    bottom: 0,
    backgroundColor: "blue",
  },
  title: {
    height: 50,
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    backgroundColor: "#f5f1e5",
  },
});
