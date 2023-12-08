import AsyncStorage from "@react-native-async-storage/async-storage";

export const get = async (key) => {
  try {
    const movies = await AsyncStorage.getItem(key);
    return movies ? JSON.parse(movies) : [];
  } catch (error) {
    console.error("Erreur lors de la récupération", error);
    return [];
  }
};

export const save = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Erreur lors de l'enregistrement`, error);
  }
};
