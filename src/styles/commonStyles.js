import { StyleSheet } from "react-native-web";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    gap: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ConstantsToStyle.BACKGROUND_COLOR,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: ConstantsToStyle.PRIMARY_COLOR,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
  },
  button: {
    backgroundColor: ConstantsToStyle.PRIMARY_COLOR,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: ConstantsToStyle.SECONDARY_COLOR,
  },
  buttonText: {
    color: ConstantsToStyle.BACKGROUND_COLOR,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
