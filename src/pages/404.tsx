import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import Main from "@/components/Layouts/Main";
import Image from "next/image";
import { VStack, Text } from "@kuma-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Error404() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUrl(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <Header title="404" />

      <Main>
        <VStack
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack
            justifyContent={"center"}
            alignItems={"center"}
            gap={[24, 48]}
          >
            <VStack
              as="span"
              justifyItems={"center"}
              alignItems={"center"}
              gap={8}
              paddingTop={[16, 32]}
            >
              <Text letterSpacing={"0.1rem"}>{url}</Text>
              <Text color={"colors.font.darken.1"}>is Not Found.</Text>
            </VStack>
            <Image
              src={
                "https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/c4f45147f3754fb0b886d21aef8364f7/500.png"
              }
              alt={""}
              width={360}
              height={360}
              quality={100}
              style={{ borderRadius: "8px", height: "auto", maxWidth: "100%" }}
            />
          </VStack>
        </VStack>
      </Main>

      <Footer />
    </>
  );
}
