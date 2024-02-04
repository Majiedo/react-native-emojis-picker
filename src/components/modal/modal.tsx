import { nanoid } from "nanoid/non-secure";
import { useMemo, useState } from "react";
import { Portal } from "@gorhom/portal";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { BlurView } from "expo-blur";
import FilterBar from "./filterBar";
import Search from "./search";
import { screenHeight, screenWidth } from "../../constants";
import { charFromEmojiObject, emojis } from "../../helper";
import EmojiCell from "./emojiCell";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
} from "react-native-reanimated";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

interface IModalProps {
  intensityBlur?: number;
  columns?: number;
  onEmojiSelected: (emoji: string) => void;
  onPressOutside?: () => void;
}

export default function Modal({
  intensityBlur = 20,
  columns = 10,
  onEmojiSelected,
  onPressOutside,
}: IModalProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Smileys & Emotion");
  const key = useMemo(() => `modal-${nanoid()}`, []);

  const colSize = Math.floor((screenWidth - 80) / columns);

  return (
    <Portal name={key} key={key}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        style={styles.container}
        behavior="padding"
      >
        <AnimatedBlurView
          entering={FadeIn}
          exiting={FadeOut}
          onTouchStart={onPressOutside}
          style={styles.blur}
          intensity={intensityBlur}
        />
        <Animated.View
          entering={FadeInDown.springify()}
          exiting={FadeOutDown}
          style={styles.modal}
        >
          <FilterBar
            onPress={(key) => setSelectedCategory(key)}
            selectedCategory={selectedCategory}
          />
          <Search
            placeholder="Search.."
            value={search}
            onChangeText={(value) => setSearch(value)}
          />
          {!search && <Text style={styles.title}>{selectedCategory}</Text>}
          <FlatList
            numColumns={columns}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.noResultWrapper}>
                <Text style={styles.noResultText}>No Results</Text>
              </View>
            }
            contentContainerStyle={styles.flatlistContainer}
            data={emojis.filter((item) => {
              if (search === "") {
                return item.category === selectedCategory;
              } else {
                return item.name.includes(search.toLocaleUpperCase());
              }
            })}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <EmojiCell
                colSize={colSize}
                emoji={item}
                onPress={(emoji) => onEmojiSelected(charFromEmojiObject(emoji))}
              />
            )}
          />
        </Animated.View>
      </KeyboardAvoidingView>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight,
    width: screenWidth,
    position: "absolute",
  },
  blur: {
    position: "absolute",
    zIndex: 1,
    height: screenHeight,
    width: screenWidth,
  },
  modal: {
    zIndex: 10,
    paddingVertical: 20,
    height: "auto",
    maxHeight: screenHeight / 2,
    width: screenWidth - 40,
    borderRadius: 20,
    backgroundColor: "white",

    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    marginVertical: 10,
  },
  flatlistContainer: {
    marginHorizontal: 20,
  },
  noResultWrapper: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultText: {
    fontSize: 16,
    color: "#666",
  },
});
