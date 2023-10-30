import { Flex, Link, Image } from "@kuma-ui/core";

type Props = {
  social: {
    target: string;
    link: string;
    icon: string;
  };
};

export default function ThirdLineItem({ social }: Props) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      aspectRatio={"1"}
    >
      <Link
        target="_blank"
        rel="noopener nofollow noreferrer"
        href={social.link}
        aspectRatio={"1"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={["28px", "36px", "56px"]}
        height={["28px", "36px", "56px"]}
      >
        <Image
          width={"100%"}
          height={"100%"}
          src={social.icon}
          alt={social.target}
        />
      </Link>
    </Flex>
  );
}
