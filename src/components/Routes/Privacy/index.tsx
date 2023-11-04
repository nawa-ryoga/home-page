import Meta from "@/components/Meta";
import Header from "@/components/Layouts/Header";
import Main from "@/components/Layouts/Main";
import { SITE_TITLE } from "../../../../kuma.config";
import Paragraph from "./Parts/Paragpraph";
import Heading2 from "./Parts/Heading2";
import Heading3 from "./Parts/Heading3";
import { Box } from "@kuma-ui/core";

export default function Page() {
  return (
    <>
      <Meta
        title={"Privacy"}
        content={`${SITE_TITLE}'s privacy policy`}
      />

      <Header title="Privacy" />

      <Main>
        <Box
          as={"article"}
          maxWidth={"578px"}
          marginX={"auto"}
          paddingTop={"80px"}
        >
          <Box
            as={"header"}
            marginBottom="4rem"
          >
            <Heading2>{`${SITE_TITLE}におけるプライバシー`}</Heading2>
            <Paragraph>
              当ウェブサイトでは、広告の配信やアクセス解析は行われず、特定を目的とした個人情報を収集することはありません。
            </Paragraph>
          </Box>

          <Box as={"section"}>
            <Heading3>IPアドレス、Cookie等の収集</Heading3>
            <Paragraph>
              当ウェブサイトでは、一般的なトラフィック分析やサイトの改善のために、IPアドレス、Cookie、ウェブブラウザの種類などの情報を匿名で収集することがあります。これらは個人を特定するためには使用されません。
            </Paragraph>
            <Heading3>外部サイトへのリンク</Heading3>
            <Paragraph>
              当ウェブサイトには、他のウェブサイトへのリンクが含まれている場合がありますが、外部サイトにおける個人情報の保護については当ウェブサイトは関与しておりません。リンク先サイトのプライバシーポリシーをご確認いただき、個人情報の取り扱いについてご注意ください。
            </Paragraph>
            <Paragraph>
              プライバシーポリシーに関するご質問やご不明な点がございましたら、
              <span>nawaryoga@gmail.com</span>
              までお問い合わせください。
            </Paragraph>
          </Box>
        </Box>
      </Main>
    </>
  );
}
