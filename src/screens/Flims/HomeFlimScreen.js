import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TextInput, Image } from "react-native";
import TableRow from "../../components/tableRow/tableRow";
import Icon from "react-native-vector-icons/Feather";
import { getAllFlims, getSearchFlim } from "../../../public/functions/api";

export default function HomeFlimScreen() {
  const [response, setResponse] = useState([]);
  const [flims, setFlims] = useState([]);
  const [text, onChangeText] = useState("");

  const handleSearch = async (text) => {
    const response = await getSearchFlim({ text: text });
    setFlims(response.results);
  };

  const handleSubmit = (text) => {
    if (text === "") {
      setFlims(response);
    } else if (text !== "") {
      handleSearch(text);
    }
  };

  const fetchFlims = async () => {
    const response = await getAllFlims();
    setResponse(response.results);
    setFlims(response.results);
  };

  useEffect(() => {
    fetchFlims();
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.input}>
        <Icon name="search" size={24} />
        <TextInput
          style={{ width: "80%" }}
          onChangeText={onChangeText}
          value={text}
          onSubmitEditing={() => {
            handleSubmit(text);
          }}
          placeholder="Rechercher"
        ></TextInput>
      </View>
      <FlatList
        data={flims}
        renderItem={({ item }) => <TableRow props={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#030425",
    paddingTop: 10,
    paddingBottom: 65,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    marginBottom: 20,
    width: 300,
    gap: 10,
    borderRadius: 32,
    backgroundColor: "#FFF",
  },
});
