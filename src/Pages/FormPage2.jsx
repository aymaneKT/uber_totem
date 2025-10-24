import { useState } from "react";
import { useNavigate } from "react-router";
export default function FormPage2() {
  const [inputs, setInputs] = useState({
    nome: "",
    cognome: "",
    email: "",
    ruolo: "",
    comune: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();
  const handleChanges = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (!inputs.nome || !inputs.cognome || !inputs.email || !inputs.comune) {
      setErrorMessage(true);
      return;
    }
    navigate("/thank-you");
  };
  return (
    <div className="max-w-6xl relative min-h-screen flex flex-col gap-4  py-7 md:py-10   justify-center   left-1/2 -translate-x-1/2 px-[5%] md:gap-12  lg:gap-88 xl:gap-8">
      <div className="flex-center gap-6 xl:hidden">
        <h1 className="text-5xl  sm:text-5xl md:text-6xl lg:text-9xl xl:text-11xl  text-center font-uber-medium font-medium ">
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
      <h2
        className="
      md:col-span-6 md:row-start-1 mb-1 
      text-xl sm:text-3xl md:text-4xl lg:text-5xl 
      font-uber-bold text-center  leading-snug whitespace-break-spaces 
      max-xl:hidden
    "
      >
        Come possiamo rimanere in contatto?
        <br />
        <span className="block font-uber-medium font-light  text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[30px] text-center">
          Ti avviseremo quando i nostri servizi
          <br /> saranno disponibili nel tuo Comune.
        </span>
      </h2>
      <div
        className="
    grid grid-cols-1 gap-4 sm:gap-5 md:gap-[18px]
    md:grid-cols-6 md:auto-rows-min
    font-uber-medium
    mx-auto w-full mb-3 md:mb-4 lg:mb-8 xl:mb-10
  "
      >
        {/* Titolo: in alto,*/}
        <h2
          className="
      md:col-span-6 md:row-start-1 mb-1 
      text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[40px]
      font-uber-bold text-center  leading-snug whitespace-break-spaces xl:hidden lg:mb-
    "
        >
          Come possiamo rimanere in contatto?
          <br />
          <span className="block font-uber-medium font-light  text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[30px] text-center">
            Ti avviseremo quando i nostri servizi
            <br className="hidden lg:block" /> saranno disponibili nel tuo
            Comune.
          </span>
        </h2>

        {/* Nome */}
        <input
          required
          type="text"
          placeholder="Il tuo nome *"
          className="
      rounded-lg md:px-3 md:py-5 p-3 border-none outline-none bg-[#F2F2F2]
      placeholder:text-[#949494] placeholder:font-extralight
      md:col-span-3 md:row-start-2
    "
          value={inputs.nome}
          name="nome"
          onChange={handleChanges}
        />

        {/* Cognome */}
        <input
          required
          type="text"
          placeholder="Il tuo cognome *"
          className="
      rounded-lg md:px-3 md:py-5 p-3 border-none outline-none bg-[#F2F2F2]
      placeholder:text-[#949494] placeholder:font-extralight
      md:col-start-4 md:col-end-7 md:row-start-2
    "
          value={inputs.cognome}
          name="cognome"
          onChange={handleChanges}
        />

        {/* Email */}
        <input
          required
          type="email"
          placeholder="Il tuo indirizzo e-mail *"
          className="
      rounded-lg md:px-3 md:py-5 p-3 border-none outline-none bg-[#F2F2F2]
      placeholder:text-[#949494] placeholder:font-extralight
      md:col-span-6 md:row-start-3
    "
          value={inputs.email}
          name="email"
          onChange={handleChanges}
        />

        {/* Ruolo */}
        <input
          type="text"
          placeholder="Il tuo ruolo / ente"
          className="
      rounded-lg md:px-3 md:py-5 p-3 border-none outline-none bg-[#F2F2F2]
      placeholder:text-[#949494] placeholder:font-extralight
      md:col-span-6 md:row-start-4
    "
          value={inputs.ruolo}
          name="ruolo"
          onChange={handleChanges}
        />

        {/* Comune */}
        <input
          required
          type="text"
          placeholder="Il tuo comune *"
          className="
      rounded-lg md:px-3 md:py-5 p-3 border-none outline-none bg-[#F2F2F2]
      placeholder:text-[#949494] placeholder:font-extralight
      md:col-span-6 md:row-start-5
    "
          value={inputs.comune}
          name="comune"
          onChange={handleChanges}
        />

        {/* Messaggi + Privacy */}
        <div className="md:col-span-6 md:row-start-6 text-center md:text-left">
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-uber-medium my-5 text-[#FF2727] ${
              errorMessage ? "block" : "hidden"
            }`}
          >
            Compila tutti i campi obbligatori per continuare.
          </p>
          <p className="text-[#949494b5] text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-uber-medium">
            * Inviando questo modulo, dichiari di aver preso visione dell’{" "}
            <span className="text-[#3177ee] underline cursor-pointer">
              informativa sulla privacy{" "}
            </span>{" "}
            e acconsenti al{" "}
            <span className="text-[#3177ee] underline cursor-pointer">
              trattamento dei dati personali
            </span>{" "}
            per le finalità indicate.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <div className="flex flex-center gap-2 md:gap-6 max-xl:hidden">
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
          onClick={handleSubmit}
          className=" w-full lg:w-full xl:w-1/2
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
          Invia →{" "}
        </button>
      </div>
    </div>
  );
}
