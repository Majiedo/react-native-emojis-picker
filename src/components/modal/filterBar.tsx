import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Categories } from "../../helper";
import { screenHeight } from "../../constants";

interface IFilterBarProps {
  onPress: (key: string) => void;
  selectedCategory: string;
}

export default function FilterBar({
  onPress,
  selectedCategory,
}: IFilterBarProps) {
  return (
    <View style={styles.wrapper}>
      {Categories.map((category, index) => (
        <TouchableOpacity
          onPress={() => onPress(category.key)}
          key={index}
          style={{ opacity: selectedCategory === category.key ? 1 : 0.3 }}
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#f2f2f2",
  },
  icon: {
    fontSize: screenHeight * 0.025,
  },
});
