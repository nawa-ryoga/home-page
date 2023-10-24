import Header from "@/components/Layouts/Header";
import Main from "@/components/Layouts/Main";
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
