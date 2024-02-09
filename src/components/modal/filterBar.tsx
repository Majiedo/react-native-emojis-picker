import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Categories } from "../../helper";
import { screenHeight, screenWidth } from "../../constants";
import { Key } from "../../types";

interface IFilterBarProps {
  categories: Key[];
  onPress: (key: Key) => void;
  selectedCategory: string;
  darkMode?: boolean;
}

export default function FilterBar({
  onPress,
  selectedCategory,
  categories,
  darkMode,
}: IFilterBarProps) {
  const result = Categories.filter((item) =>
    categories.find((el) => el === item.key)
  );

  const size = Math.floor((screenWidth - 80) / 9);

  return (
    <View
      style={[
        styles.wrapper,
        { borderColor: darkMode ? "#5C5470" : "#f2f2f2" },
      ]}
    >
      {result.map((category, index) => (
        <TouchableOpacity
          onPress={() => onPress(category.key)}
          key={index}
          style={{
            opacity: selectedCategory === category.key ? 1 : 0.3,
            width: size,
            height: size,
          }}
        >
          <Text style={styles.icon}>{category.symbol}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  icon: {
    fontSize: screenHeight * 0.025,
  },
});
