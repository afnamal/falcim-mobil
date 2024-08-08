import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";

const HomeView = () => {
  const navigation = useNavigation();

  const pushLogin = (destination) => {
    // Authentication kontrolü ve yönlendirme
    // Bu kısmı kendi authentication yönteminizle entegre edin
    navigation.navigate("Login", { redirectTo: destination });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image
          source={require("@/assets/headerPhoto2.jpg")}
          style={styles.headerImage}
        />
        <View style={styles.headerTriangle}></View>
        <View style={styles.headerCaption}>
          <Text style={styles.headerTitle}>Your App Title</Text>
          <Text style={styles.headerSubtitle}>Your App Subtitle</Text>
        </View>
      </View>

      <View style={styles.features}>
        <Swiper showsPagination={true} loop={true}>
          <TouchableOpacity
            style={styles.featureItem}
            onPress={() => pushLogin("/fal/kahve")}
          >
            <Image
              source={require("@/assets/step_01.png")}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.featureItem}
            onPress={() => pushLogin("/fal/kahve")}
          >
            <Image
              source={require("@/assets/step_02.png")}
              style={styles.featureImage}
            />
            <Text style={styles.featureText}>Enter Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.featureItem}
            onPress={() => pushLogin("/fal/kahve")}
          >
            <Image
              source={require("@/assets/falcilar22.jpg")}
              style={[styles.featureImage, { borderRadius: 30 }]}
            />
            <Text style={styles.featureText}>Get Reading</Text>
          </TouchableOpacity>
        </Swiper>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Main Title</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Blog")}
        >
          <Image
            source={require("@/assets/coffeeBG.jpg")}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Title 1</Text>
            <Text style={styles.cardText}>Description 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Blog2")}
        >
          <Image
            source={require("@/assets/coffeeBG2.jpg")}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Title 2</Text>
            <Text style={styles.cardText}>Description 2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistics</Text>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>1000 Daily Users</Text>
            <Text style={styles.cardText}>
              Enjoy the fun of fortune-telling!
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>5000 Total Readings</Text>
            <Text style={styles.cardText}>
              We specialize in coffee fortune-telling!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "relative",
    textAlign: "center",
    marginBottom: 40,
  },
  headerImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  headerTriangle: {
    width: "100%",
    height: 0,
    paddingTop: 30,
    backgroundColor: "white",
  },
  headerCaption: {
    marginTop: 30,
    color: "#1d1b1b",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 18,
    color: "#a00",
    fontWeight: "bold",
    marginTop: 5,
  },
  features: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: 40,
  },
  featureItem: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "large",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  },
  featureImage: {
    width: "100%",
    maxWidth: 220,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#f7f7f7",
    padding: 60,
  },
  sectionTitle: {
    fontSize: 28,
    color: "#444",
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  card: {
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardText: {
    color: "#666",
  },
});

export default HomeView;
