import React from "react";
import { StyleSheet, Image, Platform } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HelpScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/falcilar.webp")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Help</ThemedText>
      </ThemedView>
      <ThemedText>
        Here you can find answers to common questions and more information about
        our services.
      </ThemedText>

      <Collapsible title="Fortune Types">
        <ThemedText>
          Our application supports several types of fortune telling:
          <ThemedText type="defaultSemiBold"> Coffee Fortune:</ThemedText>{" "}
          Description about coffee fortune.
          <ThemedText type="defaultSemiBold"> Palm Fortune:</ThemedText>{" "}
          Description about palm fortune.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Membership">
        <ThemedText>
          Information about membership options and benefits.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Process">
        <ThemedText>
          Step-by-step guide on how to use our application and services.
        </ThemedText>
      </Collapsible>

      <Collapsible title="History">
        <ThemedText>
          Background and history of our services and development.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Contact">
        <ThemedText>
          If you have any questions, feel free to contact us at{" "}
          <ExternalLink href="mailto:afnamal@hotmail.com">
            afnamal@hotmail.com
          </ExternalLink>
          .
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: -30,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 20,
    marginBottom: 20,
  },
});
