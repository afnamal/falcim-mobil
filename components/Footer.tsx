import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        {/* Section 1: Navigation Links */}
        <View style={styles.footerColumn}>
          <Text style={styles.footerTitle}>Your Brand</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Fortune</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Terms</Text>
          </TouchableOpacity>
        </View>

        {/* Section 2: Language Selection and Info */}
        <View style={styles.footerColumn}>
          <Text style={styles.footerTitle}>Global Presence</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>
              <Image
                source={require("../assets/tr-flag.png")}
                style={styles.flagIcon}
              />{" "}
              Turkish
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>
              <Image
                source={require("../assets/en-flag.png")}
                style={styles.flagIcon}
              />{" "}
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>
              <Image
                source={require("../assets/ar-flag.png")}
                style={styles.flagIcon}
              />{" "}
              Arabic
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>
              <Image
                source={require("../assets/gr-flag.png")}
                style={styles.flagIcon}
              />{" "}
              Greek
            </Text>
          </TouchableOpacity>
        </View>

        {/* Section 3: Social Media Links */}
        <View style={styles.footerColumn}>
          <Text style={styles.footerTitle}>Social Media</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Blog</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#343a40",
    padding: 20,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerColumn: {
    flex: 1,
  },
  footerTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  footerLink: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  flagIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default Footer;
