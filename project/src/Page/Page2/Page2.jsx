import { Header } from "../../components/index";
import { getCoinList } from "../../data/index";
import TestAPI from "../../data/test";

function Page2() {
  return (
    <>
      <Header />
      <getCoinList />
      {/* <TestAPI /> */}
    </>
  );
}

export default Page2;
