import Image from "next/image";
import ExternalLink from "@/components/Commons/ExternalLink";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import type { DomElement } from "htmlparser2";
import SectionContainer from "../Parts/Section";
import type { Blog } from "../../../../../lib/client";
import Paragraph from "../Parts/Section/Content/Paragraph";
import LinkCard from "../Parts/Section/Content/LinkCard";
import Heading2 from "../Parts/Section/Content/Heading2";
import Heading3 from "../Parts/Section/Content/Heading3";
import OrderedList from "../Parts/Section/Content/List/Ordered";
import UnorderedList from "../Parts/Section/Content/List/Unordered";
import ListItem from "../Parts/Section/Content/List/Item";
import HorizontalRule from "../Parts/Section/Content/HorizontalRule";
import Figure from "../Parts/Section/Content/Figure";
import Figcaption from "../Parts/Section/Content/Figcaption";
import Blockquote from "../Parts/Section/Content/Blockquote";
import BlockquoteParagraph from "../Parts/Section/Content/BlockquoteParagraph";

type Props = Pick<Blog, "content">;

function transform(node: DomElement, index: number) {
  if (node.type === "tag") {
    if (node.name === "div" && node.attribs && node.attribs["class"].includes("iframely-embed")) {
      const href = node.children?.[0]?.children?.[0]?.attribs?.["href"];
      if (href) {
        return (
          <LinkCard
            key={index}
            href={href}
          />
        );
      }
    }
    if (node.name === "p" && node.children) {
      const alignRight = node.attribs && node.attribs["style"] === "text-align: right";
      return (
        <Paragraph
          key={index}
          alignRight={alignRight}
        >
          {node.children.map((child, i) => {
            if (child.name === "a" && child.children && child.attribs) {
              return (
                <ExternalLink
                  key={i}
                  href={child.attribs["href"]}
                  color={"colors.font.darken.2"}
                  textDecoration={"underline"}
                >
                  {child.children.map((child, i) => convertNodeToElement(child, i, transform))}
                </ExternalLink>
              );
            } else {
              return convertNodeToElement(child, i, transform);
            }
          })}
        </Paragraph>
      );
    }
    if (node.name === "h2" && node.children) {
      return (
        <Heading2 key={index}>
          {node.children.map((child, i) => convertNodeToElement(child, i, transform))}
        </Heading2>
      );
    }
    if (node.name === "h3" && node.children) {
      return (
        <Heading3 key={index}>
          {node.children.map((child, i) => convertNodeToElement(child, i, transform))}
        </Heading3>
      );
    }
    if ((node.name === "ul" || node.name === "ol") && node.children) {
      const List = node.name === "ul" ? UnorderedList : OrderedList;
      return (
        <List key={index}>
          {node.children.map((child, i) => {
            if (child.name === "li" && child.children) {
              return (
                <ListItem key={i}>
                  {child.children.map((child, i) => convertNodeToElement(child, i, transform))}
                </ListItem>
              );
            } else {
              return convertNodeToElement(child, i, transform);
            }
          })}
        </List>
      );
    }
    if (node.name === "hr") {
      return <HorizontalRule key={index} />;
    }
    if (node.name === "figure" && node.children) {
      return (
        <Figure key={index}>
          {node.children.map((child, i) => {
            if (child.name === "img" && child.attribs) {
              return (
                <Image
                  key={i}
                  src={child.attribs["src"]}
                  alt={child.attribs["alt"]}
                  width={Number(child.attribs["width"])}
                  height={Number(child.attribs["height"])}
                  loading="lazy"
                  quality={100}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "4px",
                  }}
                />
              );
            } else {
              return convertNodeToElement(child, i, transform);
            }
          })}
        </Figure>
      );
    }
    if (node.name === "figcaption" && node.children) {
      return <Figcaption key={index}>{convertNodeToElement(node, index, transform)}</Figcaption>;
    }
  }
  if (node.name === "blockquote" && node.children) {
    return (
      <Blockquote key={index}>
        {node.children.map((child, i) => {
          if (child.name === "p" && child.attribs && child.children) {
            const alignRight = child.attribs && child.attribs["style"] === "text-align: right";

            return (
              <BlockquoteParagraph
                key={i}
                alignRight={alignRight}
              >
                {child.children.map((child, i) => {
                  if (child.name === "a" && child.children && child.attribs) {
                    return (
                      <ExternalLink
                        key={i}
                        href={child.attribs["href"]}
                        color={"colors.font.darken.2"}
                        textDecoration={"underline"}
                      >
                        {child.children.map((child, i) =>
                          convertNodeToElement(child, i, transform),
                        )}
                      </ExternalLink>
                    );
                  } else {
                    return convertNodeToElement(child, i, transform);
                  }
                })}
              </BlockquoteParagraph>
            );
          } else {
            return convertNodeToElement(child, i, transform);
          }
        })}
      </Blockquote>
    );
  }
}

export default function BlogSection({ content }: Props) {
  return (
    <SectionContainer>
      {ReactHtmlParser(content, { decodeEntities: false, transform })}
    </SectionContainer>
  );
}
