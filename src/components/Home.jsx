import { Carousel } from "flowbite-react";
import imgSlider from "../assets/image/Illustration.png";
const Home = () => {
  return (
    <>
      <div className="bg-bg-w1" id="home">
        <div className="px-4 lg:px-14 mx-auto max-h-screen h-screen">
          <Carousel className="w-full mx-auto">
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={imgSlider} alt="" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutral-700 md:w-3/4">
                  Lessiion and insight
                  <span className="text-green-500 leading-snug">
                    from 8 years
                  </span>
                </h1>
                <p className="text-green-500 text-base mb-8">
                  where to grow your business as a photoraper: site or social
                  media?
                </p>
                <button className="btn-primary">Register</button>
              </div>
            </div>
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={imgSlider} alt="" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutral-700 md:w-3/4">
                  Lessiion and insight
                  <span className="text-green-500 leading-snug">
                    from 8 years
                  </span>
                </h1>
                <p className="text-green-500 text-base mb-8">
                  where to grow your business as a photoraper: site or social
                  media?
                </p>
                <button className="btn-primary">Register</button>
              </div>
            </div>
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={imgSlider} alt="" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutral-700 md:w-3/4">
                  Lessiion and insight{" "}
                  <span className="text-green-500 leading-snug">
                    from 8 years
                  </span>
                </h1>
                <p className="text-green-500 text-base mb-8">
                  where to grow your business as a photoraper: site or social
                  media?
                </p>
                <button className="btn-primary">Register</button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
