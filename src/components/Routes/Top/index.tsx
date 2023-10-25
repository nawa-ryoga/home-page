import Header from "@/components/Layouts/Header";
import Menu from "./Layouts/Menu";
import { SITE_TITLE } from "../../../../kuma.config";
import Meta from "@/components/Meta";

export default function Top() {
  return (
    <>
      <Meta />

      <Header
        isTopPage={true}
        title={SITE_TITLE}
      />

      <Menu />
    </>
  );
}
