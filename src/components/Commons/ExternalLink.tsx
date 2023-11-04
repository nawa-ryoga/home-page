import { Link } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
  href: string;
  color?: string;
  textDecoration?: string;
};

export default function ExternalLink(props: Props) {
  return (
    <Link
      target="_blank"
      rel="noopener nofollow noreferrer"
      _visited={{ color: "colors.font.darken.2" }}
      {...props}
    />
  );
}
