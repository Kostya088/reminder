import { StyleSheet, Text, View } from "react-native";

export default function Reminders() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>All reminders</Text>
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
