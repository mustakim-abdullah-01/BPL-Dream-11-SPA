import { Fragment} from "react";
import gradTop from "../../assets/news-letter-grad-top.png";
import gradBottom from "../../assets/news-letter-grad-bottom.png";

const NewsLetter = () => {
  
  return (
    <Fragment>
      <div className="bg-white/10 max-w-335 p-6 mx-auto rounded-3xl z-10">
        <div
          className="
        relative flex justify-center items-center flex-col mx-auto rounded-3xl bg-white py-22 px-59 max-w-323 
        "
        >
          <img
            className="
          absolute right-0 top-0 rounded-3xl
          "
            src={gradTop}
          />
          <img
            className="
          absolute left-0 top-0 rounded-3xl
          "
            src={gradBottom}
          />
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-[#131313] text-[32px]">
              Subscribe to our Newsletter
            </h1>
            <p className="font-medium text-[20px] mt-4 mb-6 text-[#131313]/70">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <div>
            <div className="flex gap-4">
              <div>
                <label className="input validator">
                  <input
                    className="text-black h-14 w-60 rounded-xl"
                    type="email"
                    placeholder="mail@site.com"
                  />
                </label>
              </div>
              <button
                className="
              btn w-36 text-black bg-linear-to-r from-pink-500 to-amber-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsLetter;
