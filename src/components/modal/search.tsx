import { StyleSheet, TextInput } from "react-native";
import React from "react";

interface ISearchProps extends React.ComponentProps<typeof TextInput> {}

export default function Search({ ...props }: ISearchProps) {
  return <TextInput {...props} style={styles.search} />;
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
