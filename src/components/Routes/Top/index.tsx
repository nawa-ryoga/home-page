import Header from "@/components/Layouts/Header";
import Menu from "./Layouts/Menu";

export default function Top() {
  return (
    <>
      <Header
        isTopPage={true}
        title={"NAARY.ME"}
      />

      <Menu />
    </>
  );
}
