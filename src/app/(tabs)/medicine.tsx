import { StyleSheet, Text, View } from "react-native";

export default function Medicine() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Medicine inventory</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fefefe",
  },
});
