import { FaEnvelopeOpen, FaPhone } from "react-icons/fa6";
import { TiLocation } from "react-icons/ti";
import footerlogo from "/footer_logo.png";
import fb from "/fb.svg";
import insta from "/insta.svg";
import twitter from "/twitter.svg";
import linkedin from "/link.svg";
export default function Footer() {
  return (
    <section>
      <footer className="footer  text-white py-10">
        <aside className="flex flex-col max-md:text-center gap-4 max-md:mx-auto">
          <img
            src={footerlogo}
            className="max-md:text-center max-md:w-[150px] max-md:self-center"
            alt="logo"
          />
          <p className="max-w-[300px]">
            Click TO Food offers 24/7 reliable delivery in UAE, enhancing food
            order effeciency and supporting business growth.
          </p>
        </aside>
        <nav className="max-md:hidden">
          <h6 className="font-bold leading-[20px] capitalize text-white">
            Quick Links
          </h6>
          <a className="link link-hover font-normal text-sm leading-6">
            Author
          </a>
          <a className="link link-hover font-normal text-sm leading-6">
            Privacy Policy
          </a>
          <a className="link link-hover font-normal text-sm leading-6">Teams</a>
        </nav>
        <nav className="max-md:hidden">
          <h6 className="font-bold leading-[20px] capitalize text-white">
            Join Us
          </h6>
          <a className="link link-hover font-normal text-sm leading-6">
            Join as Vendor
          </a>
          <a className="link link-hover font-normal text-sm leading-6">
            Join as Restaurant Partner
          </a>
        </nav>
        <nav className="max-md:hidden">
          <h6 className="font-bold leading-[20px] capitalize text-white">
            Contact
          </h6>
          <a className="link link-hover font-normal text-sm leading-6 flex items-center gap-3">
            <FaEnvelopeOpen /> sales@click.com
          </a>
          <a className="link link-hover font-normal text-sm leading-6 flex items-center gap-3">
            <TiLocation /> 14 Street, Sharjah
          </a>
        </nav>
        {/*
          mobile footer extra section
        */}
        <div className="contact_section flex flex-wrap justify-center gap-4 md:hidden">
        <a className="link link-hover font-normal text-sm leading-6 flex items-center gap-3">
            <FaPhone /> +880 - 017
          </a>
        <a className="link link-hover font-normal text-sm leading-6 flex items-center gap-3">
            <FaEnvelopeOpen /> sales@click.com
          </a>
          <a className="link link-hover font-normal text-sm leading-6 flex items-center gap-3">
            <TiLocation /> 14 Street, Sharjah
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center mx-auto md:hidden">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
      </footer>
      <footer className="footer text-white border-[#ffffff29] border-t  py-4">
        <aside className="grid-flow-col items-center max-md:self-center max-md:justify-center">
          <p>©2024 Click To Food. All Rights Reserved️</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end max-md:hidden">
          <div className="flex items-center gap-4">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </nav>
      </footer>
    </section>
  );
}
