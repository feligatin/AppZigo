import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { RoundedButton } from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import AuthAPI from "../../Data/datasources/AuthAPI";
import { AuthRepository } from "../../Data/repositories/AuthRepository";

export const HomeScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authRepository = new AuthRepository(AuthAPI);

  const handleLogin = async () => {
    const response = await authRepository.login(username, password);
    if (response) {
      console.log("Login success");
    } else {
      ToastAndroid.show("Usuario o contraseña incorrecta", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/background/bgLogin.png")}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/images/logoLogin.png")} />
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INICIAR SESIÓN</Text>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Usuario"
            style={styles.formTextInput}
            onChangeText={setUsername}
            value={username}
          ></TextInput>
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.formTextInput}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          ></TextInput>
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="INGRESAR" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },

  formText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  logoContainer: {
    position: "absolute",
    top: "20%",
    left: "19%",
    width: "60%",
    height: "20%",
    justifyContent: "center",
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginLeft: 10,
  },
  formInput: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginTop: 20,
  },
  formIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
});
