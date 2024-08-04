import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Preview from "./components/Preview";

export default function App() {
  return (
    <div className="bg-blackbg">
      <div className="w-[85%] mx-auto font-urbanist">
        {/*navbar*/}
        <Nav />
        {/*hero*/}
        <Hero />
        {/*preview*/}
        <Preview />
        {/*footer*/}
        <Footer/>
      </div>
    </div>
  );
}
