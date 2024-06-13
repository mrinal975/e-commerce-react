import img from "../assets/img/file.png";
function Home() {
  return (
    <>
      <div className="bg-[#e3edf6] banner mt-4 bg-[url('../assets/bg.png)]">
        <div className="py-4 px-18 container grid md:grid-cols-2 oy-8 w-full">
          <div className="flex items-center">
            <div className="max-w-[450px] space-y-4 bg-white p-4 rounded-bg shadow">
              <h2 className="text-headingFirst font-bold text-3xl md:text-4xl">
                The best mobile phone collection 2024
              </h2>
              <h3 className="text-3xl font-semibold">
                Christmas special offer
                <span className="text-red-500 font-secondary">
                  -10% discount
                </span>
              </h3>
              <a
                href="#"
                className="inline-block bg-sky-500 text-white rounded-md
              px-6 py-3 hover:bg-sky-600  transition-all duration-200"
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="w-full">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
