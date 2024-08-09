import React from "react";
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/falcilar.webp")}
          style={styles.headerImage}
          alt="Falcılar temalı başlık görseli"
        />
        <Text style={styles.headerTitle}>Yardım</Text>
        <Text style={styles.headerSubtitle}>
          Burada sıkça sorulan sorulara yanıtlar ve hizmetlerimiz hakkında daha fazla bilgi bulabilirsiniz.
        </Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.accordion}>
          <Text style={styles.accordionTitle}>Fal Türleri</Text>
          <View style={styles.accordionContent}>
            <Text style={styles.accordionItemTitle}>Kahve Falı</Text>
            <Text style={styles.accordionItemDescription}>Kahve falı hakkında açıklama.</Text>
            <View style={styles.divider} />
            <Text style={styles.accordionItemTitle}>El Falı</Text>
            <Text style={styles.accordionItemDescription}>El falı hakkında açıklama.</Text>
            <View style={styles.divider} />
            <Text style={styles.accordionItemTitle}>Tarot Falı</Text>
            <Text style={styles.accordionItemDescription}>Tarot falı hakkında açıklama.</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.accordion}>
          <Text style={styles.accordionTitle}>Üyelik</Text>
          <View style={styles.accordionContent}>
            <Text style={styles.accordionItemDescription}>
              Üyelik seçenekleri ve avantajları hakkında bilgi.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.accordion}>
          <Text style={styles.accordionTitle}>Süreç</Text>
          <View style={styles.accordionContent}>
            <Text style={styles.accordionItemDescription}>
              Uygulamamızı ve hizmetlerimizi nasıl kullanacağınıza dair adım adım kılavuz.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.accordion}>
          <Text style={styles.accordionTitle}>Tarihçe</Text>
          <View style={styles.accordionContent}>
            <Text style={styles.accordionItemDescription}>
              Hizmetlerimizin ve geliştirilme sürecimizin geçmişi.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.accordion}>
          <Text style={styles.accordionTitle}>İletişim</Text>
          <View style={styles.accordionContent}>
            <Text style={styles.accordionItemDescription}>
              Eğer herhangi bir sorunuz varsa, bize şu e-posta adresinden ulaşabilirsiniz:{" "}
              <Text style={styles.emailLink}>afnamal@hotmail.com</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Daha hafif bir gri arka plan
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff", // Beyaz arka planlı kart
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  accordion: {
    paddingVertical: 10,
  },
  accordionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  accordionContent: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  accordionItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  accordionItemDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  emailLink: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

export default HelpScreen;
