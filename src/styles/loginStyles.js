import { StyleSheet } from "react-native-web";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ConstantsToStyle.BACKGROUND_COLOR,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    login: {
      width: 350,
      height: 500,
      borderColor: ConstantsToStyle.TEXT_COLOR,
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
    },
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: ConstantsToStyle.TEXT_COLOR,
      borderWidth: 1,
      marginVertical: 30,
    },
    input: {
      width: 250,
      height: 40,
      borderColor:ConstantsToStyle.TEXT_COLOR,
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      backgroundColor: ConstantsToStyle.BACKGROUND_COLOR,
      marginBottom: 20,
    },
    button: {
      width: 250,
      height: 40,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
      borderColor: ConstantsToStyle.TEXT_COLOR,
      borderWidth: 1,
    },
  });

  export default styles;