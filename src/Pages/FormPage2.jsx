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
    <div className="max-w-6xl relative h-screen flex flex-col gap-4  py-7 md:py-10  lg:justify-evenly  left-1/2 -translate-x-1/2 px-[5%]">
      <h2
        className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[40px]
    font-uber text-center  leading-snug whitespace-break-spaces
  "
      >
        Come possiamo rimanere in contatto?
        <br />
        <span
          className="
      block mt-3
      text-lg sm:text-xl  xl:text-2xl 2xl:text-[28px]
      font-uber font-light
    "
        >
          Ti avviseremo quando i nostri servizi saranno disponibili nel tuo
          Comune.
        </span>
      </h2>
      <form
        className="
          grid grid-cols-1 gap-4 sm:gap-5 md:gap-[18px]
          
          md:grid-cols-6 md:grid-rows-4
          font-uber-medium
          mx-auto w-full
     
        "
      >
        {/* Nome: mobile full width; da md: col 1–3 */}
        <input
          required
          type="text"
          placeholder="Il tuo nome *"
          className="
            rounded-lg md:px-3 md:py-5 p-3  border-none outline-none bg-[#F2F2F2]
            placeholder:text-[#949494] placeholder:font-extralight
            md:col-span-3 md:row-span-1
          "
          value={inputs.nome}
          name="nome"
          onChange={handleChanges}
        />

        {/* Cognome: mobile sotto; da md: col 4–6 */}
        <input
          required
          type="text"
          placeholder="Il tuo cognome *"
          className="
            rounded-lg md:px-3 md:py-5 p-3  border-none outline-none bg-[#F2F2F2]
            placeholder:text-[#949494] placeholder:font-extralight
            md:col-start-4 md:col-end-7 md:row-span-1
          "
          value={inputs.cognome}
          name="cognome"
          onChange={handleChanges}
        />

        {/* Email: riga 2 su tutta larghezza da md */}
        <input
          required
          type="email"
          placeholder="Il tuo indirizzo e-mail *"
          className="
            rounded-lg md:px-3 md:py-5 p-3  border-none outline-none bg-[#F2F2F2]
            placeholder:text-[#949494] placeholder:font-extralight
            md:col-span-6 md:row-start-2 md:row-end-3
          "
          value={inputs.email}
          name="email"
          onChange={handleChanges}
        />

        {/* Ruolo: riga 3 intera da md */}
        <input
          type="text"
          placeholder="Il tuo ruolo / ente"
          className="
            rounded-lg md:px-3 md:py-5 p-3  border-none outline-none bg-[#F2F2F2]
            placeholder:text-[#949494] placeholder:font-extralight
            md:col-span-6 md:row-start-3 md:row-end-4
          "
          value={inputs.ruolo}
          name="ruolo"
          onChange={handleChanges}
        />

        {/* Comune: riga 4 intera da md */}
        <input
          required
          type="text"
          placeholder="Il tuo comune *"
          className="
            rounded-lg md:px-3 md:py-5 p-3 border-none outline-none bg-[#F2F2F2]
            placeholder:text-[#949494] placeholder:font-extralight
            md:col-span-6 md:row-start-4 md:row-end-5
          "
          value={inputs.comune}
          name="comune"
          onChange={handleChanges}
        />
        <div
          className="
      md:col-span-6 md:row-start-5 md:row-end-6
      text-center md:text-left"
        >
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-uber-medium my-5 text-[#FF2727] ${
              errorMessage ? "block" : "hidden"
            }`}
          >
            Compila tutti i campi obbligatori per continuare.
          </p>
          <p className="text-[#949494b5] text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-uber-medium my-5  md:my-7">
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
      </form>

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
          onClick={handleSubmit}
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
          Invia →{" "}
        </button>
      </div>
    </div>
  );
}
