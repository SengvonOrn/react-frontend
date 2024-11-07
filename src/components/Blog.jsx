const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      imag: "src/assets/image/image 18.png",
    },
    {
      id: 2,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      imag: "src/assets/image/image 19.png",
    },
    {
      id: 3,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      imag: "src/assets/image/image 20.png",
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutral-700 font-semibold mb-4">
          How to design your site footer like we did
        </h2>
        <p className="text-sm text-neutral-700 mb-8 md:w-3/4 mx-auto">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
        </p>
      </div>
      {/* ==== */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.imag}
              alt="01"
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-2 py-4 bg-white shadow-lg rounded-md md:w-5/6 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutral-700 font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="font-bold text-green-500  hover:text-neutral-700"
                >
                  Readmore
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
        ))}
      </div>
    </div>
  );
};

export default Blog;
