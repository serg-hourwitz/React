import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Lesson from "./components/Lesson/Lesson";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />

      {/* Lesson */}
      <Lesson />
      {/* * Header */}
      <Header />
      {/* * Banner */}
      <Banner />
      {/* * Main */}
      <Main />
      {/* * Footer */}
      <Footer />
    </div>
  );
};

export default App;
