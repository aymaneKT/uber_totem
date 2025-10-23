import { useState } from "react";
import { useNavigate } from "react-router";
export default function FormStart() {
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
    navigate("/map");
  };

  return (
    <div>
      {/* <motion.div
        animate={{
          transform: "translateX(0%)",
          transition: { duration: 2 },
        }}
        exit={{
          transform: "translateX(200%)",
          transition: { duration: 2 },
        }}
        className="absolute inset-0 bg-white z-50 -translate-x-full"
      ></motion.div> */}
      <div className="px-[5%]">
        <h1 className="text-5xl mt-8 sm:text-5xl md:text-6xl lg:text-9xl xl:text-11xl  text-center font-uber-medium font-medium md:mt-22 ">
          Uber
        </h1>
        <p className="text-center text-[20px] sm:text-lg md:text-2xl lg:text-5xl xl:text-6xl font-extralight font-uber-medium mt-5  lg:mt-15">
          Prima di iniziare,
          <br />
          inserisci i tuoi dati.
        </p>
        {/* Form: mobile = 1 colonna; da md: griglia 6×5 con le stesse aree del tuo layout */}
        <div className="max-w-6xl flex flex-col  relative left-1/2 -translate-x-1/2 ">
          <form
            className="
          grid grid-cols-1 gap-4 sm:gap-5 md:gap-[18px]
          mt-10 sm:mt-12 md:mt-20 lg:mt-52 xl:mt-20
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
          </form>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-uber-medium my-5 text-[#FF2727] ${
              errorMessage ? "block" : "hidden"
            }`}
          >
            Compila tutti i campi obbligatori per continuare.
          </p>
          <p className="text-[#949494b5] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-uber-medium my-5  md:my-7">
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
          <button
            onClick={handleSubmit}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-black cursor-pointer  md:px-3 md:py-5 p-3  text-white  rounded-lg font-uber-medium w-full my-6 lg:mt-95 xl:mt-15"
          >
            Avanti
          </button>
        </div>
      </div>
    </div>
  );
}
