import { Fragment } from "react";
import logo from "../../assets/logo-footer.png"


const Footer = () => {
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center bg-[#06091A]">
        <div className="pt-60 pb-15">
          <img src={logo} alt="logo" />
        </div>

        <div className="grid grid-cols-3 gap-44 mb-18">
          <div className="flex flex-col gap-4 text-white">
            <h4 className="font-semibold text-[18px]">About us</h4>

            <p className="text-white/60">
              We are a passionate team <br />
              dedicated to providing the best <br />
              services to our customers.
            </p>
          </div>

          <div className="text-white flex flex-col gap-4">
            <h4 className="font-semibold text-[18px]">Quick Links</h4>

            <ul className="flex flex-col gap-4">
              <li>
                <a href="">• Home</a>
              </li>
              <li>
                <a href="">• Services</a>
              </li>
              <li>
                <a href="">• About</a>
              </li>
              <li>
                <a href="">• Contact</a>
              </li>
            </ul>
          </div>

          <div className="text-white flex flex-col gap-4">
            <h4 className="font-semibold text-[18px]">Subscribe</h4>

            <p className="opacity-60">
              Subscribe to our newsletter for the <br />
              latest updates.
            </p>

            <div>




              <div className="join">
                <div>
                  <label className="input validator join-item">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input className="text-black" type="email" placeholder="mail@site.com"/>
                  </label>
                </div>
                <button className="btn text-black w-22 btn-neutral join-item bg-linear-to-r from-pink-300 to-amber-300">Join</button>
              </div>


            </div>






            
          </div>
        </div>

        <div className="border-t border-t-white border-t/60 w-full flex justify-center items-center py-8 text-white">
          <p className="opacity-60">@ 2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;