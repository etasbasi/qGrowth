import React, { useRef } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

import tree1 from "../assets/images/tree1.png";
import tree2 from "../assets/images/tree2.png";
import tree3 from "../assets/images/tree3.png";
import tree4 from "../assets/images/tree4.png";
import tree5 from "../assets/images/tree5.png";
import tree6 from "../assets/images/tree6.png";

const trees = [tree1, tree2, tree3, tree4, tree5, tree6];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const treeContainerProperties = useRef(null);

  function getRandomCoords() {
    return {
      x: getRandomInt(100, treeContainerProperties.current.width - 100),
      y: getRandomInt(100, treeContainerProperties.current.height - 100),
      image: trees[getRandomInt(0, 5)]
    };
  }

  console.log(treeContainerProperties.current);

  const positions = [
    // getRandomCoords(),
    // getRandomCoords(),
    // getRandomCoords(),
    // getRandomCoords()
  ];

  for (let i = 0; i < 10; i++) {
    positions[i] = getRandomCoords();
  }

  console.log(positions);

  return (
    <View style={styles.container}>
      <View
        onLayout={event => {
          const { width, height } = event.nativeEvent.layout;
          treeContainerProperties.current = { width, height };
        }}
        style={styles.mainBackground}
      >
        {treeContainerProperties.current !== null
          ? positions.map((pos, index) => (
              <Image
                key={index}
                source={pos.image}
                style={{ ...styles.tree, top: pos.y, left: pos.x }}
              />
            ))
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mainBackground: {
    backgroundColor: "#07DD1D",
    flex: 1
  },
  tree: {
    height: 80,
    resizeMode: "contain"
  }
});

// const HomeStack = StackNavigator(
//     {
//         Home: {
//             screen: HomeScreen,
//         },
//         Item: {
//             screen: ItemScreen,
//             navigationOptions: ({ navigation }) => ({
//                 title: `${navigation.state.params.title}`,
//             }),
//         },
//     },
//   **
//     {
//         headerMode: 'screen',
//         defaultNavigationOptions: {
//             cardStyle: { backgroundColor: '#FFFFFF' },
//         },
//     },
//   **
// );
