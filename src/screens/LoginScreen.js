import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { useNavigation } from "@react-navigation/native";
import loginStyles from "../styles/loginStyles";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const profilePicture = "https://cdn-icons-png.flaticon.com/512/1077/1077114.png";

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created!");
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Erro ao criar novo usuario.");
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Erro ao fazer login.");
      });
  };

  return (
    <View style={loginStyles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: ConstantsToStyle.PRIMARY_COLOR,
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: ConstantsToStyle.PRIMARY_COLOR,
          top: 120,
          position: "absolute",
          transform: [{ rotate: "25deg" }],
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: ConstantsToStyle.BACKGROUND_COLOR,
          bottom: 120,
          position: "absolute",
          borderRadius: 50,
          transform: [{ rotate: "50deg" }],
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={100}>
          <View style={loginStyles.login}>
            <Image
              source={{ uri: profilePicture }}
              style={loginStyles.profilePicture}
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: ConstantsToStyle.TEXT_COLOR }}>
                E-mail
              </Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                style={loginStyles.input}
                placeholder="email"
              />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: ConstantsToStyle.TEXT_COLOR}}>
                Password
              </Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                style={loginStyles.input}
                placeholder="password"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={handleSignIn}
              style={[loginStyles.button, { backgroundColor: ConstantsToStyle.PRIMARY_COLOR }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: ConstantsToStyle.BACKGROUND_COLOR }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={[loginStyles.button, { backgroundColor: ConstantsToStyle.SECONDARY_COLOR }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: ConstantsToStyle.TEXT_COLOR }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
