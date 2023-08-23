import React, { Component } from "react";
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "react-native-button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import styles from "./style";
export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Thiết lập tài khoản"
              component={Bodysetting}
              options={{
                headerRight: () => (
                  <Button>
                    <MaterialCommunityIcons
                      name="chat"
                      size={24}
                      color="#FF3300"
                    />
                  </Button>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
AppRegistry.registerComponent("tutorialproject", () => Setting);
function Bodysetting() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#CFCFCF" }}>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              marginBottom: 10,
              marginLeft: 10,
              color: "#BBBBBB",
              fontSize: 13,
            }}
          >
            Tài khoản
          </Text>
          <View style={{ backgroundColor: "#EEEEEE" }}>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Tài khoản & Bảo mật</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Địa Chỉ</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Tài khoản / Thẻ Ngân hàng</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textBody}>Cài đặt</Text>
          <View style={{ backgroundColor: "#EEEEEE" }}>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Cài đặt Chat</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Cài đặt Thông báo</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Cài đặt riêng tư</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Người dùng đã bị chặn</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Ngôn ngữ / Language</Text>
                <Text style={{ color: "#BBBBBB", paddingLeft: 10 }}>
                  Tiếng Việt
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textBody}>Hỗ trợ</Text>
          <View style={{ backgroundColor: "#EEEEEE" }}>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Trung tâm hỗ trợ</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Tiêu chuẩn cộng đồng</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Điều khoản Shopee</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>
                  Hài lòng với Shopee? Hãy đánh giá chúng tôi...
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Giới Thiệu</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
            <View style={styles.viewstyle}>
              <View style={{ flex: 19 }}>
                <Text style={styles.textstyle}>Yêu cầu xóa tài khoản</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, marginVertical: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderColor: "grey",
              borderWidth: 1,
              marginHorizontal: 20,
              paddingVertical: 10,
            }}
            activeOpacity={0.3}
          >
            <Text style={{ textAlign: "center", fontSize: 20 }}>Đăng xuất</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text>Shopee v 3.05.11w</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
