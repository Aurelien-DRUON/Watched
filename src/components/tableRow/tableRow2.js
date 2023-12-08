import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { getFlim } from "../../../public/functions/api";

function TableRow2({ props }) {
  const id = props.id;
  const [flim, setFlim] = useState([]);
  const navigation = useNavigation();

  const fetchFlim = async () => {
    const response = await getFlim({ id: id });
    setFlim(response);
  };

  const goToDetails = () => {
    navigation.navigate("Details", { id: flim.id, type: flim.media_type });
  };

  useEffect(() => {
    fetchFlim();
  }, []);

  return (
    <Pressable onPress={goToDetails} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${flim.poster_path}`,
        }}
      />
      <View style={styles.text}>
        <View style={styles.toptext}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {flim.title || flim.name}
          </Text>
          <View style={styles.stars}>
            <Text style={styles.note}>
              {Math.round(flim.vote_average * 10) / 10}/10
            </Text>
            <Icon name="star" size={16} color="#D1B11F" />
          </View>
        </View>
        <Text style={styles.desc} numberOfLines={4} compMode="tail">
          {flim.overview}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    margin: 8,
    alignItems: "flex-start",
    gap: 10,
    borderRadius: 16,
    backgroundColor: "#050743",
  },
  image: {
    borderRadius: 8,
    width: 75,
    height: 115,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    width: "79%",
    height: 115,
  },
  toptext: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    gap: 10,
  },
  title: {
    color: "#00988B",
    textShadowColor: "#000000",
    textShadowOffset: { width: 4, height: 0 },
    textShadowRadius: 4,
    fontSize: 16,
    width: "75%",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 2,
    width: "25%",
  },
  note: {
    color: "#D1B11F",
    fontSize: 16,
  },
  desc: {
    color: "#00D1C0",
    fontSize: 13,
  },
});

export default TableRow2;
