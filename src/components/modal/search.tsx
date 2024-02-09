import { StyleSheet, TextInput } from "react-native";
import React from "react";

interface ISearchProps extends React.ComponentProps<typeof TextInput> {
  darkMode?: boolean;
}

export default function Search({ darkMode, ...props }: ISearchProps) {
  return (
    <TextInput
      style={[styles.search, darkMode && { backgroundColor: "#5C5470" }]}
      placeholderTextColor={"#8E8E93"}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  search: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },
});
