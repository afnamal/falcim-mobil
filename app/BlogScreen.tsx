// app/screens/BlogScreen.tsx
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const BlogScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.icon}>📝</Text>
        Kahve ve Fal: Gelenekten Güne
      </Text>
      <Image
        source={{
          uri: 'https://d1fm27ee7pjs8v.cloudfront.net/images/thumbnails/1000/posts/original/img_620111240a033.jpg',
        }}
        style={styles.headerImage}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giriş</Text>
        <Text style={styles.paragraph}>
          Fal bakma geleneği yüzyıllardır pek çok kültürde varlığını sürdürmektedir. Kahve falı ise özellikle Türkiye'de ve Orta Doğu'da oldukça popülerdir. Ancak kahve sadece fal bakmak için değil, sağlığa faydaları ile de bilinen bir içecektir.
        </Text>
        <View style={styles.blockquote}>
          <Text style={styles.quote}>
            "Kahve falı, telveyle başlayan bir serüvendir."
          </Text>
          <Text style={styles.quoteFooter}>Falcım</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fal Bakma Geleneği</Text>
        <Text style={styles.paragraph}>
          Kahve falı bakma, Türk kahvesi içildikten sonra fincanın kapatılmasıyla başlar. Kapalı fincan ters çevrilir ve soğuması beklenir. Fincandaki telvenin oluşturduğu şekiller yorumlanarak fal bakılır.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Fincan Kapağı:</Text> Fincanın tabak ile kapalı kısmı genellikle fal bakmanın ilk adımıdır. Kapak açıldığında telvenin fincana nasıl aktığına bakılır.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Telve Şekilleri:</Text> Telvenin oluşturduğu şekiller, semboller ve desenler fal yorumunun anahtarıdır. Her şekil farklı anlamlar taşır.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Fincan Tabanı:</Text> Fincanın tabanında oluşan şekiller, genellikle kişinin iç dünyası ve ruh haliyle ilgilidir.
        </Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1541167760496-1628856ab772',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kahvenin Sağlığa Faydaları</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Antioksidan Kaynağı:</Text> Kahve, serbest radikallerle savaşan antioksidanlar açısından zengin bir kaynaktır.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Zihinsel Uyanıklık:</Text> İçeriğindeki kafein sayesinde zihinsel uyanıklığı ve konsantrasyonu artırır. Öğrenciler ve çalışanlar için idealdir.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Kalp Sağlığı:</Text> Düzenli kahve tüketimi, kalp hastalıkları riskini azaltabilir. Ancak fazla tüketimden kaçınmak önemlidir.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Fiziksel Performans:</Text> Kahve, kafein sayesinde enerji seviyelerini artırır ve fiziksel performansı destekler. Egzersiz öncesi bir fincan kahve idealdir.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Diyabet Riski:</Text> Yapılan araştırmalar, düzenli kahve tüketiminin Tip 2 diyabet riskini azaltabileceğini göstermiştir.
        </Text>
        <Image
          source={{
            uri: 'https://www.yourimageurl.com/assets/dokulenKahve.webp',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sonuç</Text>
        <Text style={styles.paragraph}>
          Kahve, sadece fal bakmak için değil, günlük yaşamın bir parçası olarak da tüketilmesi gereken bir içecektir. Hem lezzetiyle hem de sağlığa olan faydalarıyla vazgeçilmezdir. Bir fincan kahveyle falınıza bakarken keyif alın ve kahvenin büyülü dünyasına adım atın!
        </Text>
        <View style={styles.blockquote}>
          <Text style={styles.quote}>
            "Bir fincan kahvenin kırk yıl hatırı vardır."
          </Text>
          <Text style={styles.quoteFooter}>Atasözü</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  blockquote: {
    backgroundColor: '#f7f7f7',
    borderLeftWidth: 4,
    borderLeftColor: '#ff6200',
    padding: 10,
    marginBottom: 20,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  quoteFooter: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
    textAlign: 'right',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default BlogScreen;
