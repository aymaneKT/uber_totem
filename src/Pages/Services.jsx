import { useNavigate } from "react-router";
import UberService from "../../public/assets";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl relative min-h-screen flex flex-col gap-4 py-7 md:py-10 md:gap-12  lg:gap-88 xl:gap-5 justify-center left-1/2 -translate-x-1/2 px-[5%] ">
      {/* Header logo e titolo (versione mobile) */}
      <div className="flex-center gap-6 xl:hidden">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-9xl xl:text-11xl text-center font-uber-medium font-medium">
          Uber |{" "}
        </h1>
        <img
          src="/images/anci.png"
          alt="Anci Logo"
          loading="lazy"
          className="h-14 sm:h-15 md:h-16 lg:h-38 w-auto object-contain"
        />
      </div>

      {/* Titolo principale */}
      <h2
        className="
          md:col-span-6 md:row-start-1 mb-1
          text-xl sm:text-3xl md:text-4xl lg:text-5xl font-uber-medium
          text-center leading-snug whitespace-break-spaces max-xl:hidden
        "
      >
        Fra questi servizi già attivi in altri Paesi,
        <br />
        quali vorresti nel tuo Comune?
      </h2>

      {/* Griglia servizi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 font-uber-medium mx-auto w-full mb-3 md:mb-4 lg:mb-8 xl:mb-10">
        {/* Titolo responsive (mobile) */}
        <h2
          className="
            col-span-1 sm:col-span-2 lg:col-span-4
            mb-1 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            2xl:text-[40px] font-uber-medium text-center  whitespace-break-spaces xl:hidden
          "
        >
          Fra questi servizi già attivi in altri Paesi,
          <br />
          quali vorresti nel tuo Comune?
        </h2>

        {/* Mapping dei servizi */}
        {UberService.map((s, i) => (
          <div
            key={i}
            className={`
    rounded-4xl
    bg-[#F5F5F5]
    hover:shadow-md hover:scale-[1.01] transition
    flex flex-col justify-between
    p-5 sm:p-6
    min-h-[240px]
    cursor-pointer hover:bg-[#BEBEBE] hover:scale-105 duration-150
  `}
          >
            {/* Immagine */}
            <div className="flex items-center justify-center w-full h-[110px] sm:h-[120px] md:h-[130px] lg:h-[140px] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="max-h-full w-auto object-contain"
              />
            </div>

            {/* Testo */}
            <div className="mt-4 w-full text-center md:text-left flex flex-col justify-start">
              <h3
                className="
        font-uber-medium
        text-[18px] sm:text-[20px] md:text-[22px]
        leading-tight
      "
              >
                {s.title}
              </h3>
              <p
                className="
        text-[14px] sm:text-[15px] md:text-[16px]
        leading-snug font-uber-medium
      "
              >
                {s.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer con logo e bottone */}
      <div className="flex items-center justify-between">
        <div className="flex flex-center gap-2 md:gap-6 max-xl:hidden">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-11xl text-center font-uber-medium font-medium">
            Uber |{" "}
          </h1>
          <img
            src="/images/anci.png"
            alt="Anci Logo"
            loading="lazy"
            className="h-10 sm:h-12 md:h-13 lg:h-18 xl:h-24 2xl:h-20 w-auto object-contain"
          />
        </div>

        <button
          onClick={() => navigate("/form2")}
          className="
            w-full lg:w-full xl:w-1/2 whitespace-nowrap
            text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
            bg-black text-white px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 lg:px-8 lg:py-5
            rounded-xl font-uber-medium my-2 md:my-4 min-h-11 sm:min-h-12
            shadow-sm hover:shadow md:transition active:scale-[0.98]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
            cursor-pointer
          "
        >
          Avanti →
        </button>
      </div>
    </div>
  );
}
