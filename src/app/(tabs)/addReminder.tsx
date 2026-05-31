import { StyleSheet, Text, View } from "react-native";

export default function AddReminder() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Add new reminder</Text>
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
