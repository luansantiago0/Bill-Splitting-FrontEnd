import Header from "@/components/Header";
import Home from "./(home)";
import Modal from "../components/ModalLogin";

const App: React.FC = () => {
  return (
    <div className="App bg-[#FFFFFF]">
      <Header />
      <Home />
      <Modal />
    </div>
  );
};

export default App;
