import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobeAsia,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-teal-800 py-16 text-white font-serif px-[10vw]">
          <article className="flex flex-col gap-32 text-center">
            <main className="flex justify-between items-center ">
              <div className="italic text-3xl font-bold max-md:text-2xl max-[460px]:text-[18px]">Momos Centre</div>
              <nav>
                <ul className="flex items-center gap-10 max-md:gap-6 ">
                  <li>
                    <Link
                      className="text-3xl max-md:text-2xl max-[460px]:text-[18px] "
                      to={"https://gunjangaurav.netlify.app/"}
                    >
                      <FaGlobeAsia />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-3xl max-md:text-2xl max-[460px]:text-[18px]"
                      to={"https://www.linkedin.com/in/i-am-ggunjan/"}
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-3xl max-md:text-2xl max-[460px]:text-[18px]"
                      to={"https://github.com/i-am-ggunjan"}
                    >
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-3xl max-md:text-2xl max-[460px]:text-[18px]"
                      to={"https://www.instagram.com/i_am_ggunjan/"}
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </nav>
            </main>
            <main>Made with ❤ by Gaurav Gunjan</main>
          </article>
        </footer>
      </>
    );
  }
}

export default Footer;
