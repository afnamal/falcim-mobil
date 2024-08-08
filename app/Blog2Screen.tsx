import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const Blog2Screen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>
        <Text style={styles.icon}>📝</Text> Fal Bakmanın Eğlenceli Dünyası ve Falcım'ın Deneyimi
      </Text>
      <Image
        source={require("../assets/falcigenisaci.webp")}
        style={styles.headerImage}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giriş</Text>
        <Text style={styles.paragraph}>
          Kahve falı bakmak, yalnızca bir kehanet yöntemi değil, aynı zamanda eğlenceli ve keyifli bir deneyimdir. Bu yazıda fal bakmanın ne kadar eğlenceli olduğundan ve bizim fal bakma konusunda ne kadar deneyimli olduğumuzdan bahsedeceğiz.
        </Text>
        <View style={styles.blockquote}>
          <Text style={styles.blockquoteText}>
            "Falcılık, geleceği keşfetmenin gizemli bir yolculuğudur."
          </Text>
          <Text style={styles.blockquoteFooter}>Falcım</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fal Bakmanın Eğlenceli Dünyası</Text>
        <View>
          {[
            { title: "Sürprizlerle Dolu:", text: "Her fincan, sürprizlerle dolu yeni bir hikaye sunar. Kahve telvesinin her deseni farklı bir hikaye barındırır." },
            { title: "Yaratıcı Hikayeler:", text: "Falcılar, telvenin oluşturduğu şekillerden yaratıcı hikayeler üretir. Bu hikayeler, farklı kültürlerde farklı anlamlara gelir." },
            { title: "Bağ Kurar:", text: "Arkadaşlarla birlikte fal bakmak, aradaki bağı güçlendirir ve eğlenceli anılar biriktirir." },
            { title: "Gizemli ve Büyülü:", text: "Her fincan, kendine özgü gizemli ve büyülü bir dünya sunar. Falın öngörüleri hayal dünyanıza renk katar." },
            { title: "Gülümsetir:", text: "Kahve fincanından çıkan komik ve eğlenceli hikayeler, herkesi gülümsetir. Fal bakmak, kahkahalarla dolu bir deneyimdir." },
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listItemText}>{item.text}</Text>
            </View>
          ))}
        </View>
        <Image
          source={require("../assets/falcitek.webp")}
          style={styles.sectionImage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Falcım'ın Deneyimi</Text>
        <View>
          {[
            { title: "Deneyimli Falcılar:", text: "Falcılarımızın her biri alanında deneyimli ve eğitimlidir. Falcım ekibi, size en doğru fal yorumlarını sunar." },
            { title: "Doğru ve Anlamlı Yorumlar:", text: "Yaptığımız yorumlar, hem doğru hem de anlamlıdır. Fal deneyiminizi unutulmaz kılmak için buradayız." },
            { title: "Eğlenceli Deneyim:", text: "Sizi gülümsetecek ve keyifli bir deneyim sunacak yorumlar yapıyoruz. Güzel bir kahve eşliğinde fal baktırmak, gününüzü aydınlatır." },
            { title: "Gizlilik ve Güven:", text: "Falınıza bakarken gizlilik ve güvenliği en üst düzeyde tutuyoruz. Yorumlarımızda kişisel bilgilerinizi koruma taahhüdümüz var." },
            { title: "Çeşitli Fal Türleri:", text: "Sadece kahve falı değil, aynı zamanda tarot, el falı ve daha birçok fal türünde de hizmet sunuyoruz." },
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listItemText}>{item.text}</Text>
            </View>
          ))}
        </View>
        <Image
          source={{ uri: "https://apicms.thestar.com.my/uploads/images/2023/12/14/2437763.jpg" }}
          style={styles.sectionImage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kahve Falı ile Eğlenceli Bir Yolculuk</Text>
        <View>
          {[
            { title: "Samimi Bir Ortam:", text: "Arkadaşlarınızla kahve eşliğinde samimi bir ortam oluşturun. Bir fincan kahveyle başlayan sohbetler, dostlukları derinleştirir." },
            { title: "Sürpriz Hikayeler:", text: "Herkesin fincanından çıkan hikayelere sürpriz bir dokunuş katın. Fincanlar, anlatılmayı bekleyen hikayelerle dolu." },
            { title: "Gizem ve Büyü:", text: "Falcının gizemli ve büyülü anlatımıyla hayal dünyanıza adım atın. Her fal, yeni bir maceraya kapı aralar." },
            { title: "Fal Partileri:", text: "Eğlenceli bir fal partisi düzenleyin ve kahve falının keyfini çıkarın. Falcım ekibi, fal partilerinizde size eşlik eder." },
            { title: "Falcım Uygulaması:", text: "Falcım uygulaması ile falınızı en eğlenceli ve güvenilir şekilde öğrenin! Kahve falı, tarot ve daha birçok fal türüyle tanışın." },
          ].map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listItemText}>{item.text}</Text>
            </View>
          ))}
        </View>
        <Image
          source={require("../assets/falPartsi.jpg")}
          style={styles.sectionImage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sonuç</Text>
        <Text style={styles.paragraph}>
          Kahve falı bakmak, sadece eğlenceli bir aktivite değil, aynı zamanda arkadaşlarla bağ kurmanın ve sürprizlerle dolu hikayelerin keyfini çıkarmanın harika bir yoludur. Falcım ekibi olarak, sizinle birlikte bu büyülü dünyaya adım atmak için sabırsızlanıyoruz!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fefefe",
    borderRadius: 10,
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    marginRight: 8,
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  blockquote: {
    padding: 10,
    backgroundColor: "#f7f7f7",
    borderLeftWidth: 4,
    borderLeftColor: "#ff6200",
    marginTop: 20,
  },
  blockquoteText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  blockquoteFooter: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff6200",
  },
  listItemText: {
    fontSize: 16,
  },
  sectionImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 20,
  },
});

export default Blog2Screen;
