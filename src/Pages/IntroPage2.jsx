import { useNavigate } from "react-router";

export default function IntroPage2() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between h-screen gap-7 py-8 md:py-22">
      <div className="flex-center gap-6">
        <h1 className="text-5xl  sm:text-5xl md:text-6xl lg:text-9xl xl:text-11xl  text-center font-uber-medium ">
          Uber |{" "}
        </h1>
        <img
          src="/images/anci.png"
          alt="Anci Logo"
          loading="lazy"
          className="
      h-14 sm:h-15 md:h-16 lg:h-24 xl:h-32 2xl:h-40
      w-auto object-contain
    "
        />
      </div>
      <h1 className="font-uber-medium z-10  text-center  whitespace-nowrap text-responsive-title">
        Scopri come Uber può aiutare
        <br /> il tuo Comune a muoversi meglio.
      </h1>
      <div
        className="
    flex flex-col md:flex-row lg:flex-col-reverse xl:flex-row-reverse
    md:flex-center gap-3 sm:gap-4 md:gap-6
    w-full md:w-auto  px-[5%] lg:gap-5
  "
      >
        <button
          onClick={() => navigate("/form2")}
          className="
      w-full  lg:w-full xl:w-1/3
      whitespace-nowrap
      text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
      bg-[#f2f2f2] text-black
      px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 lg:px-8 lg:py-5
      rounded-xl
      font-uber-bold
      my-2 lg:my-0 md:my-4
      min-h-11 sm:min-h-12
      shadow-sm hover:shadow md:transition active:scale-[0.98]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30
      cursor-pointer
    "
        >
          Richiedi informazioni
        </button>

        <button
          onClick={() => navigate("/services")}
          className="
      w-full  lg:w-full xl:w-1/3
      whitespace-nowrap
      text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
      bg-black text-white
      px-4 py-3 lg:my-0 sm:px-5 sm:py-3.5 md:px-6 md:py-4 lg:px-8 lg:py-5
      rounded-xl
      font-uber-medium
      my-2 md:my-4
      min-h-11 sm:min-h-12
      shadow-sm hover:shadow md:transition active:scale-[0.98]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
      cursor-pointer
    "
        >
          Sogna con noi
        </button>
      </div>
    </div>
  );
}
