import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import Menu from "./Layouts/Menu";
import { SITE_TITLE } from "../../../../kuma.config";
import Meta from "@/components/Meta";
import { secondIn } from "@/styles/animation.css";

export default function Top() {
  return (
    <>
      <Meta />

      <Header
        isTopPage={true}
        title={SITE_TITLE}
      />

      <main className={secondIn}>
        <Menu />
      </main>

      <Footer />
    </>
  );
}
