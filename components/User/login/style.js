import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498DB",
  },
  logo: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 6,
  },
  bodyTop: {
    margin: 30,
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    padding: 10,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "yellow",
  },
  bodyBottom: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoFacebook: {
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: "#3b5998",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  logoGoogle: {
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: "#EA4335",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  logoTwitter: {
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: "#1dcaff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  footer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
