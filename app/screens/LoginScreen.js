import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/form/index";
// import authAPI from "../api/auth";
// import useAuth from "../auth/useAuth";
import ForgotPasswordLink from "../components/ForgotPasswordLink";
import MemberLink from "../components/MemberLink";
import Screen from "../components/Screen";
import RegisterScreen from "./RegisterScreen";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  // const auth = useAuth();

  // const [loginFailed, setloginFailed] = useState(false);

  // const handleSubmit = async ({ email, password }) => {
  //   const result = await authAPI.login(email, password);
  //   if (!result.ok) {
  //     return setloginFailed(true);
  //   }
  //   auth.logIn(result.data);
  //   setloginFailed(false);
  // };
  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        // handle submit
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={"Invalid Email or Password"}
          // visible={loginFailed}
          visible={true}
        />
        <AppFormField
          name={"email"}
          autoCapitalize="none"
          auroCorrect={false}
          keyboardType={"email-address"}
          icon={"email"}
          placeholder="Email"
        />
        <AppFormField
          name={"password"}
          autoCapitalize="none"
          auroCorrect="false"
          icon="lock"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title={"LOGIN"} />
      </AppForm>
      <ForgotPasswordLink
        link={"Forgot Password?"}
        onClick={() => console.log("Forgot password")}
      />
      <MemberLink
        link={"Register"}
        text={"Not a member?"}
        onPress={() => {
          navigation.navigate(routes.REGISTER);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { padding: 25 },

  logo: {
    width: 200,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
});
export default LoginScreen;
