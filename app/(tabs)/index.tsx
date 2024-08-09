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
          <Text style={styles.headerTitle}>Fotoğrafınızı Yükleyin</Text>
          <Text style={styles.headerSubtitle}>Falınıza Hızlıca Bakalım</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bloglar</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("BlogScreen")}
        >
          <Image
            source={require("@/assets/coffeeBG.jpg")}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Kahvenin Hatrı</Text>
            <Text style={styles.cardText}>
              Bir fincan kahvenin kırk yıl hatırı vardır.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Blog2Screen")}
        >
          <Image
            source={require("@/assets/coffeeBG2.jpg")}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Kahve Diyarı</Text>
            <Text style={styles.cardText}>Kahve falı dünyasını keşfet</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>İstatistikler</Text>
        <View style={styles.statCard}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Günlük 1678 Kullanıcı</Text>
            <Text style={styles.cardText}>Falınızın tadını çıkarın!</Text>
          </View>
        </View>
        <View style={styles.statCard}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Toplam 5612 fala bakıldı</Text>
            <Text style={styles.cardText}>Kahve falında 1 numarayız!</Text>
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
    marginBottom: 20,
  },
  headerImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  headerTriangle: {
    width: "100%",
    height: 0,
    borderTopWidth: 30,
    borderTopColor: "#fff",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginTop: -10,
  },
  headerCaption: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#a00",
    fontWeight: "bold",
    marginTop: 5,
  },
  section: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#444",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  cardBody: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    color: "#666",
    marginTop: 5,
  },
  statCard: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
  },
});

export default HomeView;
