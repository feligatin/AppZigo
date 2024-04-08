import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/background/bgLogin.png")}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image source={require("./assets/images/logoLogin.png")} />
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INICIAR SESIÓN</Text>
        <View style={styles.formInput}>
          <Image
            source={require("./assets/user.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Usuario"
            style={styles.formTextInput}
          ></TextInput>
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("./assets/password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.formTextInput}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <View style={{ marginTop: 30 }}>
          <Button
            title="INGRESAR"
            onPress={() => ToastAndroid.show("CLICK", ToastAndroid.LONG)}
            color={"orange"}
          />
        </View>
      </View>
    </View>
  );
}

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
