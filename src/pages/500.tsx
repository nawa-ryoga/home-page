import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import Main from "@/components/Layouts/Main";
import ErrorPageContainer from "@/components/Layouts/Error/Parts/Container";
import ErrorPageHeader from "@/components/Layouts/Error/Parts/Header";
import Image from "next/image";
import { Text } from "@kuma-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Error500() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUrl(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <Header title="500" />

      <Main>
        <ErrorPageContainer>
          <ErrorPageHeader>
            <Text color={"colors.font.darken.1"}>Server Error on</Text>
            <Text letterSpacing={"0.1rem"}>{url}</Text>
          </ErrorPageHeader>
          <Image
            src={
              "https://images.microcms-assets.io/assets/c987b67b4da34a3d8860df3dc1a06811/e0ab32414bb94d8e9d56121c9a2dc0b6/404.png"
            }
            alt={""}
            width={600}
            height={600}
            quality={100}
            style={{ borderRadius: "8px", height: "auto", maxWidth: "100%" }}
          />
        </ErrorPageContainer>
      </Main>

      <Footer />
    </>
  );
}
