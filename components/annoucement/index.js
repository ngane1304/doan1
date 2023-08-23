import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import {
  Feather,
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Thongbao() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <View style={styles.icon}>
          <AntDesign
            name="tago"
            size={36}
            color="orange"
            style={{ marginRight: 5 }}
          />
        </View>
        <View>
          <ScrollView>
            <Text>Khuyễn Mãi </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Thêm mã thời trang lên đến 40.000Đ Cùng Mã làm đẹp{" "}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <View style={styles.icon} >
          <MaterialCommunityIcons
            name="heart-box-outline"
            size={36}
            color="green"
            style={{ marginRight: 5 }}
          />
        </View>
        <View>
          <ScrollView>
            <Text>Shoppe Live </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Thêm mã thời trang lên đến 40.000Đ Cùng Mã làm đẹp{" "}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <View style={styles.icon}>
          <Octicons
            name="credit-card"
            size={36}
            color="orange"
            style={{ marginRight: 5 }}
          />
        </View>
        <View>
          <ScrollView>
            <Text>Thông tin Tài chính </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Thêm mã thời trang lên đến 40.000Đ Cùng Mã làm đẹp{" "}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <View style={styles.icon}>
          <Feather
            name="shopping-bag"
            size={36}
            color="orange"
            style={{ marginRight: 5 }}
          />
        </View>
        <View>
          <ScrollView>
            <Text>Cập nhật Shoppe </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Thêm mã thời trang lên đến 40.000Đ Cùng Mã làm đẹp{" "}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        <View style={styles.icon} >
          <Feather
            name="gift"
            size={36}
            color="blue"
            style={{ marginRight: 5 }}
          />
        </View>
        <View>
          <ScrollView>
            <Text>Giải thưởng Shoppe </Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Thêm mã thời trang lên đến 40.000Đ Cùng Mã làm đẹp{" "}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={{flexDirection:'row',marginVertical:10, backgroundColor:'#C0C0C0', height:50, alignItems:'center', marginHorizontal:-8}}>
        <Text style={{flex:5}}>Cập nhật đơn hàng </Text>
        <Text style={{flex:1, color:'grey'}}>Đọc tất cả</Text>
      </View>
      <View>
        <View>
          
        </View>
        <View>
          <Text>Đánh giá sản phảm</Text>
          <Text>Abc đã đánh giá đơn hàng </Text>
          <Text>119123479216PE. Vui lòng đánh giá sản phảm trước ngày 13-08-2023</Text>
        </View>
      </View>
      <View>
        <View></View>
        <View>
          <Text>Đánh giá sản phảm</Text>
          <Text>Abc đã đánh giá đơn hàng </Text>
          <Text>119123479216PE. Vui lòng đánh giá sản phảm trước ngày 13-08-2023</Text>
        </View>
      </View>
      <View>
        <View></View>
        <View>
          <Text>Đánh giá sản phảm</Text>
          <Text>Abc đã đánh giá đơn hàng </Text>
          <Text>119123479216PE. Vui lòng đánh giá sản phảm trước ngày 13-08-2023</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "darkgray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});