import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import styles from "./style";

const UserNoLogin = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        {/*Thông tin*/}
        <View style={styles.Information}>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "flex-end",
              marginTop: 25,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Icon name="gears" size={25} style={{ color: "white" }} />
            </View>
            <View style={{ marginRight: 20 }}>
              <Icon name="briefcase" size={25} style={{ color: "white" }} />
            </View>
            <View>
              <Icon name="comments" size={25} style={{ color: "white" }} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 15,
              marginBottom: 10,
            }}
          >
            <View style={styles.LogoUser}>
              <Icon name="user" size={50} color={"#FF6600"} />
            </View>
            <View style={styles.Login}>
              <View
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  backgroundColor: "#EEEEEE",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <TouchableOpacity>
                  <Text style={{ color: "#FF6600", fontSize: 20 }}>
                    Đăng nhập
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  marginLeft: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <TouchableOpacity>
                  <Text style={{ color: "#EEEEEE", fontSize: 20 }}>
                    Đăng ký
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/*Ưu đãi*/}
        <View style={styles.Endow}>
          <View style={styles.EndowTop}>
            <Image
              source={require("../../Img/BanMoi.jpg")}
              style={{ height: 30, width: 30, marginBottom: 10, marginLeft: 5 }}
            />
            <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 4 }}>
              Ưu đãi dành riêng cho bạn
            </Text>
            <Image
              source={require("../../Img/new.png")}
              style={{ height: 25, width: 30 }}
            />
          </View>
          <View style={styles.EndowBodyTop}>
            <View
              style={{
                marginRight: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../Img/tang.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={{ fontSize: 13 }}>Tặng</Text>
              <Text
                style={{ color: "#9C9C9C", marginBottom: 10, fontSize: 13 }}
              >
                đến 400k
              </Text>
            </View>
            <View
              style={{
                marginRight: 40,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <Image
                source={require("../../Img/cheap.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={{ fontSize: 13 }}>Gì</Text>
              <Text style={{ color: "#9C9C9C", fontSize: 13 }}>cũng rẻ</Text>
            </View>
            <View
              style={{
                marginRight: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../Img/Ma.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={{ fontSize: 13 }}>Mã</Text>
              <Text
                style={{ color: "#9C9C9C", marginBottom: 10, fontSize: 13 }}
              >
                giảm giá
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../Img/freeship.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={{ fontSize: 13 }}>Miễn phí</Text>
              <Text
                style={{ color: "#9C9C9C", marginBottom: 10, fontSize: 13 }}
              >
                vận chuyển
              </Text>
            </View>
          </View>
          <View style={styles.EndowBodyMid}>
            <Image
              source={require("../../Img/phone.png")}
              style={{ height: 30, width: 30, marginBottom: 10, marginLeft: 5 }}
            />
            <Text style={{ marginBottom: 12, marginLeft: 5, fontSize: 15 }}>
              Đơn nạp thẻ và Dịch vụ
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={200}
              marginBottom={10}
            />
          </View>
          <View style={styles.EndowBodyBottom}>
            <Icon
              name="clipboard"
              size={17}
              color={"#000080"}
              style={{ marginLeft: 15, marginBottom: 10 }}
            />
            <Text style={{ marginLeft: 5, marginBottom: 12, fontSize: 15 }}>
              Đơn mua
            </Text>
            <Text
              style={{
                marginBottom: 12,
                marginLeft: 152,
                color: "#9C9C9C",
                fontSize: 13,
              }}
            >
              Xem lịch sử mua hàng
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={10}
              marginBottom={10}
            />
          </View>
          <View style={styles.EndowBottom}>
            <View
              style={{
                marginRight: 30,
                marginLeft: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="wallet" size={24} color="black" />
              <Text style={{ fontSize: 13 }}>Chờ xác nhận</Text>
            </View>
            <View
              style={{
                marginRight: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="inbox" size={24} color="black" />
              <Text style={{ fontSize: 13 }}>Chờ lấy hàng</Text>
            </View>
            <View
              style={{
                marginRight: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="truck" size={24} color="black" />
              <Text style={{ fontSize: 13 }}>Đang giao</Text>
            </View>
            <View
              style={{
                marginRight: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <MaterialIcons name="stars" size={24} color="black" />
              </View>
              <Text style={{ fontSize: 13 }}>Đánh giá</Text>
            </View>
          </View>
        </View>
        {/*Tiện ích*/}
        <View style={styles.Utilities}>
          <View style={styles.UtilitiesTop}>
            <Feather
              name="plus-square"
              size={24}
              color="#FF0000"
              marginHorizontal={10}
            />
            <Text style={{ marginBottom: 10, fontSize: 15 }}>
              Tiện ích của tôi
            </Text>
          </View>
          <View style={styles.UtilitiesBody}>
            <View style={styles.UtilitiesBodyTop}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 50,
                  marginLeft: 30,
                }}
              >
                <Ionicons
                  name="wallet-outline"
                  size={40}
                  color={"#FF0000"}
                  marginBottom={5}
                />
                <Text style={{ fontSize: 13, marginBottom: 5 }}>
                  Ví ShopeePay
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#FF0000",
                    borderColor: "#FF0000",
                    borderWidth: 1,
                    paddingHorizontal: 5,
                  }}
                >
                  Kích hoạt ngay
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 50,
                }}
              >
                <FontAwesome5
                  name="coins"
                  size={40}
                  color="#808000"
                  marginBottom={5}
                />
                <Text style={{ fontSize: 13, marginBottom: 5 }}>Shopee Xu</Text>
                <Text
                  style={{ fontSize: 14, color: "#FF0000", fontWeight: "bold" }}
                >
                  0 Xu
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 50,
                }}
              >
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={40}
                  color="#FF0000"
                  marginBottom={5}
                />
                <Text style={{ fontSize: 13, marginBottom: 5 }}>
                  Kho Voucher
                </Text>
                <Text
                  style={{ fontSize: 14, color: "#FF0000", fontWeight: "bold" }}
                >
                  0 Voucher
                </Text>
              </View>
            </View>
            <View style={styles.UtilitiesBodyBottom}>
              <Feather
                name="shield"
                size={24}
                color="#FF0000"
                marginHorizontal={10}
              />
              <Text style={{ fontSize: 15 }}>Bảo hiểm của tôi</Text>
              <Text
                style={{ marginBottom: 12, marginLeft: 126, color: "#FF0000" }}
              >
                Khám phá ngay!
              </Text>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginLeft={11}
                marginTop={3}
              />
            </View>
          </View>
        </View>
        {/*bán*/}
        <View style={styles.Sell}>
          <AntDesign
            name="home"
            size={24}
            color="#FF0000"
            marginHorizontal={10}
          />
          <Text style={{ fontSize: 15, color: "#FF0000" }}>Bắt đầu bán</Text>
          <Text style={{ fontSize: 13, color: "#9C9C9C", marginLeft: 155 }}>
            Đăng ký miễn phí
          </Text>
          <Icon
            name="chevron-right"
            size={15}
            color={"#9C9C9C"}
            marginLeft={11}
          />
        </View>
        {/*Thêm*/}
        <View style={styles.More}>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#CFCFCF",
              marginVertical: 10,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="medal-outline"
              size={24}
              color="#FF0000"
              marginLeft={10}
              marginBottom={10}
            />
            <Text style={styles.TextMore}>Khách hàng thân thiết</Text>
            <Text
              style={{
                fontSize: 13,
                color: "#9C9C9C",
                marginTop: 2,
                marginLeft: 125,
                marginBottom: 10,
              }}
            >
              Thành viên
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={11}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <AntDesign
              name="hearto"
              size={24}
              color="#FF0000"
              marginLeft={10}
              marginBottom={10}
            />
            <Text style={styles.TextMore}>Đã thích</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={293}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <MaterialCommunityIcons
              name="home-heart"
              size={24}
              color="#ECAB53"
              marginLeft={10}
              marginBottom={10}
            />
            <Text style={styles.TextMore}>Đang Theo Dõi</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={250}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <Feather
              name="gift"
              size={24}
              color="#1B4F93"
              marginLeft={10}
              marginBottom={10}
            />
            <Text style={styles.TextMore}>Săn Thưởng Shopee</Text>
            <Image
              source={require("../../Img/new.png")}
              style={{ height: 25, width: 30, marginBottom: 10, marginLeft: 5 }}
            />
            <Text
              style={{
                fontSize: 13,
                color: "#9C9C9C",
                marginBottom: 10,
                marginLeft: 85,
              }}
            >
              Giải trí săn xu
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={11}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <AntDesign
              name="clockcircleo"
              size={24}
              color="#205AA7"
              marginBottom={10}
              marginLeft={10}
            />
            <Text style={styles.TextMore}>Đã xem gần đây</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={240}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <Octicons
              name="code-square"
              size={24}
              color="#FF0000"
              marginBottom={10}
              marginLeft={10}
            />
            <Text style={styles.TextMore}>Số dư TK Shopee</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={231}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <FontAwesome5
              name="coins"
              size={24}
              color="#808000"
              marginBottom={5}
              marginLeft={10}
            />
            <Text style={styles.TextMore}>Shopee Xu</Text>
            <Text
              style={{
                fontSize: 13,
                color: "#9C9C9C",
                marginBottom: 10,
                marginLeft: 240,
              }}
            >
              0 Xu
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={11}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <MaterialCommunityIcons
              name="star"
              size={24}
              color="#00FF7F"
              marginBottom={10}
              marginLeft={10}
            />
            <Text style={styles.TextMore}>Đánh giá của tôi</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={240}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <MaterialIcons
              name="shopping-bag"
              size={24}
              color="#FF0000"
              marginBottom={10}
              marginLeft={10}
            />
            <Text style={styles.TextMore}>Shopee Tiếp Thị Liên Kết</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={181}
              marginBottom={6}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <MaterialCommunityIcons
              name="gift-open-outline"
              size={24}
              color="#FF3333"
              marginBottom={10}
              marginLeft={10}
            />
            <Text style={styles.TextMore}>Gói Siêu Voucher</Text>
            <Text
              style={{
                fontSize: 13,
                color: "#9C9C9C",
                marginBottom: 10,
                marginLeft: 50,
              }}
            >
              Nhận x100 Voucher Freeship
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={11}
              marginBottom={6}
            />
          </View>
        </View>
        {/*Hỗ trợ*/}
        <View style={styles.Help}>
          <View style={styles.ViewMore}>
            <FontAwesome
              name="user-o"
              size={24}
              color="#205AA7"
              marginLeft={10}
            />
            <Text style={{ fontSize: 15, marginLeft: 10, marginVertical: 10 }}>
              Thiết lập tài khoản
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={228}
              marginTop={4}
            />
          </View>
          <View style={styles.ViewMore}>
            <AntDesign
              name="questioncircleo"
              size={24}
              color="#00FF7F"
              marginLeft={10}
              marginBottom={10}
            />
            <Text style={styles.TextMore}>Trung tâm trợ giúp</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={223}
              marginBottom={6}
            />
          </View>
          <View style={styles.ViewMore}>
            <Entypo
              name="chat"
              size={24}
              color="#FF3333"
              marginLeft={10}
              marginBottom={10}
            />
            <Text style={styles.TextMore}>Trò Chuyện Với Shopee</Text>
            <Icon
              name="chevron-right"
              size={15}
              color={"#9C9C9C"}
              marginLeft={192}
              marginBottom={6}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default UserNoLogin;
