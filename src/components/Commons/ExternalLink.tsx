import { Link } from "@kuma-ui/core";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function ExternalLink({ children, href }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener nofollow noreferrer"
      color={"colors.font.darken.1"}
      _visited={{ color: "colors.font.darken.2" }}
    >
      {children}
    </Link>
  );
}
