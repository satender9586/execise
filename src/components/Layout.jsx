import Navbaar from "./Navbaar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbaar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
