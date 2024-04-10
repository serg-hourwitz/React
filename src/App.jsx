import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Lesson from "./components/Lesson/Lesson";

const App = () => {
  return (
    <div>
      {/* /* * Lesson */}
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
