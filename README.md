<h2 align="center">
react-native-emojis-picker
</h2>
<p align="center" color="red">
It's built with TypeScript and uses Reanimated 2 for smooth animations
</p>

![plot](./assets/img.png)

### Installation

```bash
npm install react-native-emojis-picker
```

### Usage

wrap the whole app in `EmojiProvider`

```ts
import { EmojiProvider } from "react-native-emojis-picker";
export default function App() {
  return <EmojiProvider>//rest your app</EmojiProvider>;
}
```

simple emoji component

```ts
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { EmojiModal } from "react-native-emojis-picker";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [emoji, setEmoji] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 100 }}>{emoji}</Text>
      <Button
        title="Show Emojis Modal 😁"
        onPress={() => {
          setShowModal(true);
        }}
      />
      {showModal && (
        <EmojiModal
          onPressOutside={() => setShowModal(false)}
          onEmojiSelected={(emoji) => {
            setShowModal(false);
            setEmoji(emoji);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

### `EmojiModal` Props

|    Property     |   Type   |  Default  |                     description                     |
| :-------------: | :------: | :-------: | :-------------------------------------------------: |
|  intensityBlur  |  number  |    20     |         the intensity of the backgroud blur         |
|     columns     |  number  |    10     |                  number of columns                  |
| onEmojiSelected | function | undefined |   function fire when emoji selected return emoji    |
| onPressOutside  | function | undefined | function fire when the user press outside the modal |

### Author

Majed Al-Otaibi, Majed@skiff.com

### License

react-native-emojis-picker is available under the MIT license. See the LICENSE file for more info
