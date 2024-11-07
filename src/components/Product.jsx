import ProductImage from "../assets/image/pana.png";
import BranImage from "../assets/image/image 9.png";

const Product = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={ProductImage} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutral-700 font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutral-700 mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn more</button>
          </div>
        </div>
      </div>
      {/* ======================== */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-slate-100 py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="md:w-1/3">
            <img src={BranImage} alt="01" />
          </div>
          {/* === */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutral-700 mb-8 leading-7">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
              <h5 className="text-green-500 text-xl font-semibold mb-2">
                Sengvon
              </h5>
              <p className="text-base text-neutral-700 mb-8">
                he's software enginnering!
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src="src/assets/image/compIcon.png"
                    alt="01"
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/image/Logo (2).png"
                    alt="02"
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/image/Logo (3).png"
                    alt="03"
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/image/Logo (4).png"
                    alt="04"
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/image/Logo (5).png"
                    alt="05"
                    className="cursor-pointer"
                  />
                  <img
                    src="src/assets/image/Logo (6).png"
                    alt="06"
                    className="cursor-pointer"
                  />
                  <div className="flex items-center gap-8">
                    <a
                      href="/"
                      className="font-bold text-green-500 hover:text-neutral-700"
                    >
                      Mett all the customes
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 inline-block ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
