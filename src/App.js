import ModalComponent from "./BootstrapModal/index";
import BuySomething from "./BuySomething/index";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsVisible(true);
  //   }, 2000);
  // }, []);
  return (
    <div className="container bg-primary">
      <BuySomething />
      <ModalComponent
        isVisible={isVisible}
        isSuccess
        status={"success"}
        description={"Kullanıcı başari ile silindi."}
      />
    </div>
  );
}

export default App;
