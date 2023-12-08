import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { get } from "../../../public/functions/asyncstorage";
import TableRow2 from "../../components/tableRow/tableRow2";

export default function LaterFlimScreen() {
  const [flims, setFlims] = useState([]);

  const fetchFlims = async () => {
    const fetchedFlims = await get("Later");
    setFlims(fetchedFlims);
  };

  useEffect(() => {
    fetchFlims();
  }, []);

  return (
    <View style={styles.background}>
      <FlatList
        data={flims}
        renderItem={({ item }) => <TableRow2 props={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#030425",
    width: "100%",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 65,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: 300,
    gap: 10,
    borderRadius: 32,
    backgroundColor: "#FFF",
  },
});
