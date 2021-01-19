import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const colorIncrement = 15;
const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number};
  //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15};

  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.bluen + action.amount > 255 ||
        state.bluen + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * colorIncrement })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * colorIncrement })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: colorIncrement })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * colorIncrement })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
