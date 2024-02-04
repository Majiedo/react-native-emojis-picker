import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Emoji } from "../../types";
import { charFromEmojiObject } from "../../helper";

interface IEmojiCellProps {
  emoji: Emoji;
  onPress: (emoji: Emoji) => void;
  colSize: number;
}

export default function EmojiCell({
  emoji,
  onPress,
  colSize,
}: IEmojiCellProps) {
  return (
    <TouchableOpacity
      style={{ ...styles.wrapper, width: colSize, height: colSize }}
      onPress={() => onPress(emoji)}
    >
      <Text style={{ fontSize: colSize - 5 }}>
        {charFromEmojiObject(emoji)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
