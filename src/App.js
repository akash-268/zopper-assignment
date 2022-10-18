import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="outer">
        <Header />
        <Card heading={"Hospicash"} description={"Stay stressfree with group Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo contro."} image={"https://assets.leetcode.com/users/avatars/avatar_1646252799.png"}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
