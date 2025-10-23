import { useNavigate } from "react-router";
import UberService from "../../public/assets";

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl relative h-screen flex flex-col gap-7 xl:gap-10  py-7 md:py-10  lg:justify-evenly  left-1/2 -translate-x-1/2 px-[5%]">
      <h2
        className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
    font-uber text-center  leading-snug whitespace-break-spaces
  "
      >
        Fra questi servizi già attivi in altri Paesi,
        <br />
        <span>quali vorresti nel tuo Comune?</span>
      </h2>
      <div className="mx-auto w-full max-w-6xl">
        <div
          className="
      grid text-center md:text-left
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4
      gap-4 sm:gap-5 md:gap-6
    "
        >
          {UberService.map((s, i) => (
            <div
              key={i}
              className={`
          rounded-[20px]
          ${i === 0 ? "bg-[#E9E9E9]" : "bg-[#F5F5F5]"}
         
          hover:shadow-md hover:scale-[1.01] transition
          flex flex-col items-center md:items-start
          p-5 sm:p-6
          min-h-[180px] sm:min-h-[200px] md:min-h-[220px] cursor-pointer hover:bg-[#BEBEBE] hover:scale-105  duration-150
        `}
            >
              {/* blocco immagine */}
              <div className="h-24 sm:h-28 md:h-32 flex items-start">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* testo */}
              <div className="mt-4">
                <h3 className="font-uber-medium text-[18px] sm:text-[20px] md:text-[22px] leading-tight">
                  {s.title}
                </h3>
                <p className=" text-[14px] sm:text-[15px] md:text-[16px] leading-snug font-uber-medium">
                  {s.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex-center gap-2 md:gap-6">
          <h1 className="text-2xl  sm:text-3xl md:text-3xl lg:text-6xl xl:text-11xl  text-center font-uber-medium font-medium ">
            Uber |{" "}
          </h1>
          <img
            src="/images/anci.png"
            alt="Anci Logo"
            loading="lazy"
            className="
      h-10 sm:h-12 md:h-13 lg:h-18 xl:h-24 2xl:h-20
      w-auto object-contain
    "
          />
        </div>
        <button
          onClick={() => navigate("/form2")}
          className=" w-7/15 md:w-2/4 lg:w-1/2
            whitespace-nowrap
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
            bg-black text-white
            px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 lg:px-8 lg:py-5
            rounded-xl
            font-uber-medium
            my-2 md:my-4 
            min-h-11 sm:min-h-12
            shadow-sm hover:shadow md:transition active:scale-[0.98]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
            cursor-pointer"
        >
          Avanti{" "}
        </button>
      </div>
    </div>
  );
}
