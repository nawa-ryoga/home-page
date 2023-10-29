import { Flex, Image } from "@kuma-ui/core";
import ExternalLink from "@/components/Commons/ExternalLink";

type Props = {
  social: {
    target: string;
    link: string;
    icon: string;
  };
};

export default function ThirdLineItem({ social }: Props) {
  const size = {
    small: social.target !== "note" ? 48 : 56,
    large: social.target !== "note" ? 52 : 72,
  };
  return (
    <Flex
      aspectRatio={"1 /1"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ExternalLink href={social.link}>
        <Image
          src={social.icon}
          width={[size.small, size.large]}
          height={[size.small, size.large]}
          alt={social.target}
        />
      </ExternalLink>
    </Flex>
  );
}
