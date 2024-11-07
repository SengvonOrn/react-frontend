import aboutImage from "../assets/image/Frame 35.png";
const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImage} alt="" />
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
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-slate-100 py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutral-700 font-semibold mb-4 md:w-4/5">
              Helping a local
              <span className="text-green-500"> business reinvent itself</span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutral-700 mb-8">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* ================== */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="src/assets/image/Icon (4).png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutral-700 font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="src/assets/image/Icon (5).png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutral-700 font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="src/assets/image/Icon (6).png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutral-700 font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="src/assets/image/Icon (7).png" alt="01" />
                <div>
                  <h4 className="text-2xl text-neutral-700 font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
