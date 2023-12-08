import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { get, save } from "../../../public/functions/asyncstorage";
import { getFlim } from "../../../public/functions/api";

export default function DetailsSeriesScreen({ route }) {
  const id = route.params.id;
  const [flim, setFlim] = useState([]);
  const [date, setDate] = useState("");
  const [seen, setSeen] = useState(false);
  const [later, setLater] = useState(false);

  const handleDate = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    setDate(`${day} ${month} ${year}`);
  };

  const fetchFlim = async () => {
    const response = await getFlim({ id: id });
    setFlim(response);
    handleDate(response.release_date);
    const isSeen = await get(`isSeen_${route.params.id}`);
    if (isSeen == []) {
      setSeen(false);
    } else {
      setSeen(isSeen);
    }
    const isLater = await get(`isLater_${route.params.id}`);
    if (isLater == []) {
      setLater(false);
    } else {
      setLater(isLater);
    }
  };

  const handleSeen = async () => {
    await save(`isSeen_${route.params.id}`, !seen);
    setSeen(!seen);

    const allSeen = (await get("Seen")) || [];
    const index = allSeen.findIndex((movie) => movie.id === route.params.id);

    if (!seen && index === -1) {
      const newSeen = [...allSeen, route.params];
      await save("Seen", newSeen);
    } else if (seen && index !== -1) {
      allSeen.splice(index, 1);
      await save("Seen", allSeen);
    }
  };

  const handleLater = async () => {
    await save(`isLater_${route.params.id}`, !later);
    setLater(!later);

    const allLater = (await get("Later")) || [];
    const index = allLater.findIndex((movie) => movie.id === route.params.id);

    if (!later && index === -1) {
      const newLater = [...allLater, route.params];
      await save("Later", newLater);
    } else if (later && index !== -1) {
      allLater.splice(index, 1);
      await save("Later", allLater);
    }
  };

  useEffect(() => {
    fetchFlim();
  }, []);

  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${flim.backdrop_path}`,
        }}
      ></Image>
      <View style={styles.text}>
        <View style={styles.toptext}>
          <Text style={styles.title}>{flim.title || flim.name}</Text>
          <View style={styles.stars}>
            <Pressable onPress={handleLater}>
              <Icon
                name="bookmark"
                size={16}
                color={later === true ? "#ff0000" : "#ffffff"}
              />
            </Pressable>
            <Pressable onPress={handleSeen}>
              <Icon
                name="check"
                size={16}
                color={seen === true ? "#00ff00" : "#ffffff"}
              />
            </Pressable>
            <Text style={styles.note}>{flim.vote_average}</Text>
            <Icon name="star" size={16} color="#D1B11F" />
          </View>
        </View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.desc}>{flim.overview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    gap: 10,
    backgroundColor: "#030423",
  },
  image: {
    height: 200,
    alignSelf: "stretch",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    display: "flex",
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  toptext: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  title: {
    color: "#00988B",
    fontSize: 24,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 2,
    width: "20%",
  },
  note: {
    color: "#D1B11F",
    fontSize: 16,
  },
  date: {
    color: "#005F57",
  },
  desc: {
    color: "#00D1C0",
    fontSize: 16,
  },
});
