import React from "react";
import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
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
import styles from "../User/style";

const User = () => {
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
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                4 ae siêu nhân
              </Text>
              <View style={styles.Member}>
                <Text style={{ color: "#FF6600", fontSize: 15 }}>
                  Thành viên
                </Text>
              </View>
              <Text style={{ color: "white", fontSize: 15 }}>
                Người theo 0 | Đang theo dõi 1
              </Text>
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
            <View
              style={{ flex: 19, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("../../Img/phone.png")}
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 10,
                  marginLeft: 5,
                }}
              />
              <Text style={{ marginBottom: 12, marginLeft: 5, fontSize: 15 }}>
                Đơn nạp thẻ và Dịch vụ
              </Text>
            </View>
            <View flex={1} marginBottom={5}>
              <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
            </View>
          </View>
          <View style={styles.EndowBodyBottom}>
            <View
              style={{ flex: 14, flexDirection: "row", alignItems: "center" }}
            >
              <Icon
                name="clipboard"
                size={17}
                color={"#000080"}
                style={{ marginLeft: 15, marginBottom: 10 }}
              />
              <Text style={{ marginLeft: 5, marginBottom: 12, fontSize: 15 }}>
                Đơn mua
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", flex: 9 }}
            >
              <View style={{ flex: 7, justifyContent: "center" }}>
                <Text
                  style={{
                    color: "#9C9C9C",
                    fontSize: 13,
                    marginBottom: 10,
                  }}
                >
                  Xem lịch sử mua hàng
                </Text>
              </View>

              <View flex={1}>
                <Icon
                  name="chevron-right"
                  size={15}
                  color={"#9C9C9C"}
                  marginBottom={7}
                />
              </View>
            </View>
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
          <View>
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
              <View
                style={{ flex: 19, flexDirection: "row", alignItems: "center" }}
              >
                <Feather
                  name="shield"
                  size={24}
                  color="#FF0000"
                  marginHorizontal={10}
                />
                <Text style={{ fontSize: 15 }}>Bảo hiểm của tôi</Text>
              </View>
              <View
                style={{ flex: 10, flexDirection: "row", alignItems: "center" }}
              >
                <View flex={5.5}>
                  <Text style={{ color: "#FF0000" }}>Khám phá ngay!</Text>
                </View>
                <View flex={1}>
                  <Icon
                    name="chevron-right"
                    size={15}
                    color={"#9C9C9C"}
                    marginTop={3}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        {/*bán*/}
        <View style={styles.Sell}>
          <View
            style={{
              flex: 16,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <AntDesign name="home" size={24} color="#FF0000" marginRight={10} />
            <Text style={{ fontSize: 15, color: "#FF0000" }}>Bắt đầu bán</Text>
          </View>
          <View style={{ flex: 9, flexDirection: "row" }}>
            <View flex={6}>
              <Text style={{ fontSize: 13, color: "#9C9C9C" }}>
                Đăng ký miễn phí
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginTop={2}
              />
            </View>
          </View>
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
            <View
              style={{ flex: 19, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name="medal-outline"
                size={24}
                color="#FF0000"
                marginLeft={10}
                marginBottom={10}
              />
              <Text style={styles.TextMore}>Khách hàng thân thiết</Text>
            </View>
            <View
              style={{ flex: 9, flexDirection: "row", alignItems: "center" }}
            >
              <View flex={5} alignItems={"center"} marginBottom={5}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#9C9C9C",
                  }}
                >
                  Thành viên
                </Text>
              </View>
              <View flex={1} marginBottom={3}>
                <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
              </View>
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <AntDesign
                name="hearto"
                size={24}
                color="#FF0000"
                marginLeft={10}
              />
              <Text style={styles.TextMore}>Đã thích</Text>
            </View>
            <View flex={1}>
              <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="home-heart"
                size={27}
                color="#ECAB53"
                marginLeft={10}
                marginTop={-4}
              />
              <Text style={styles.TextMore}>Đang Theo Dõi</Text>
            </View>
            <View flex={1}>
              <Icon name="chevron-right" size={15} color={"#9C9C9C"} />
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 19, flexDirection: "row" }}>
              <Feather
                name="gift"
                size={24}
                color="#1B4F93"
                marginLeft={10}
                marginBottom={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Săn Thưởng Shopee
              </Text>
              <Image
                source={require("../../Img/new.png")}
                style={{
                  height: 25,
                  width: 30,
                  marginLeft: 5,
                  marginBottom: 10,
                }}
              />
            </View>
            <View style={{ flexDirection: "row", flex: 9 }}>
              <View flex={5}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#9C9C9C",
                    marginBottom: 7,
                  }}
                >
                  Giải trí săn xu
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Icon
                  name="chevron-right"
                  size={15}
                  color={"#9C9C9C"}
                  marginTop={2}
                />
              </View>
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <AntDesign
                name="clockcircleo"
                size={24}
                color="#205AA7"
                marginBottom={10}
                marginLeft={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Đã xem gần đây
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginBottom={6}
              />
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <Octicons
                name="code-square"
                size={24}
                color="#FF0000"
                marginBottom={10}
                marginLeft={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Số dư TK Shopee
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginBottom={6}
              />
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 19, flexDirection: "row" }}>
              <FontAwesome5
                name="coins"
                size={24}
                color="#808000"
                marginBottom={5}
                marginLeft={10}
              />
              <Text style={styles.TextMore}>Shopee Xu</Text>
            </View>
            <View style={{ flex: 9, flexDirection: "row" }}>
              <View flex={5}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#9C9C9C",
                    marginBottom: 10,
                    paddingLeft: 50,
                  }}
                >
                  0 Xu
                </Text>
              </View>
              <View flex={1}>
                <Icon
                  name="chevron-right"
                  size={15}
                  color={"#9C9C9C"}
                  marginTop={2}
                />
              </View>
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="star"
                size={24}
                color="#00FF7F"
                marginBottom={10}
                marginLeft={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Đánh giá của tôi
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginBottom={6}
              />
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <MaterialIcons
                name="shopping-bag"
                size={24}
                color="#FF0000"
                marginBottom={10}
                marginLeft={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Shopee Tiếp Thị Liên Kết
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginBottom={6}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 15, flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="gift-open-outline"
                size={24}
                color="#FF3333"
                marginBottom={10}
                marginLeft={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Gói Siêu Voucher
              </Text>
            </View>
            <View style={{ flex: 15, flexDirection: "row" }}>
              <View flex={8}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#9C9C9C",
                    marginBottom: 7,
                  }}
                >
                  Nhận x100 Voucher Freeship
                </Text>
              </View>
              <View flex={1}>
                <Icon
                  name="chevron-right"
                  size={15}
                  color={"#9C9C9C"}
                  marginTop={2}
                />
              </View>
            </View>
          </View>
        </View>
        {/*Hỗ trợ*/}
        <View style={styles.Help}>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <FontAwesome
                name="user-o"
                size={24}
                color="#205AA7"
                marginLeft={10}
                marginTop={8}
              />
              <Text
                style={{ fontSize: 15, marginLeft: 10, marginVertical: 10 }}
              >
                Thiết lập tài khoản
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginTop={4}
              />
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <AntDesign
                name="questioncircleo"
                size={24}
                color="#00FF7F"
                marginLeft={10}
                marginBottom={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Trung tâm trợ giúp
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginBottom={6}
              />
            </View>
          </View>
          <View style={styles.ViewMore}>
            <View style={{ flex: 18, flexDirection: "row" }}>
              <Entypo
                name="chat"
                size={24}
                color="#FF3333"
                marginLeft={10}
                marginBottom={10}
              />
              <Text style={styles.TextMore} marginTop={2}>
                Trò Chuyện Với Shopee
              </Text>
            </View>
            <View flex={1}>
              <Icon
                name="chevron-right"
                size={15}
                color={"#9C9C9C"}
                marginBottom={6}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default User;
