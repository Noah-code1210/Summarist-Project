import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Info from "../../components/Info";
import Reviews from "../../components/Reviews";
import Statistics from "../../components/Statistics";
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
      <Reviews />
      <Statistics />
      <Footer />
    </>
  );
}
