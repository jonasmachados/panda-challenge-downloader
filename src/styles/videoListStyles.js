import { StyleSheet } from "react-native-web";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const styles = StyleSheet.create({
  videoListContainer: {
    paddingVertical: 20,
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ConstantsToStyle.BACKGROUND_COLOR,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: ConstantsToStyle.SECONDARY_COLOR,
  },
  textContainer: {
    marginLeft: 10,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  itemText: {
    fontSize: 16,
  },
});

export default styles;
