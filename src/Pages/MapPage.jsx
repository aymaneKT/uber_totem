import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapPage() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/aymanekabti/cmh0jrn8o00ae01qug9m9cv2s",
      center: [12.5, 42.8],
      zoom: 5,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });
    mapRef.current = map;

    // map.on("style.load", () => {
    //   const canvas = map.getCanvas();
    //   canvas.style.filter = "grayscale(100%)";
    // });

    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl,
    //     placeholder: "Cerca il tuo comune",
    //     countries: "it",
    //     marker: false,
    //   }),
    //   "top-left"
    // );

    // map.addControl(new mapboxgl.NavigationControl(), "top-right");
    // map.addControl(new mapboxgl.FullscreenControl(), "top-right");

    return () => map.remove();
  }, []);

  const [comuni, setComuni] = useState([]); // [{ name, lon, lat }]
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]); // array di stringhe (nomi),

  // carica elenco comuni con coordinate
  useEffect(() => {
    fetch("/data/elenco_comuni_con_coordinate.json")
      .then((res) => res.json())
      .then((data) => setComuni(data)); // data: [{ name, lon, lat }]
  }, []);

  // normalizza per ricerca tollerante ad accenti / maiuscole
  const norm = (s) =>
    s
      ?.toString()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase() ?? "";

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const nv = norm(value);

    // filtered come array di STRINGHE (nomi), così il JSX resta invariato
    const results = comuni
      .filter((c) => norm(c.name).includes(nv))
      .map((c) => c.name);

    setFiltered(results);
  };

  const handleSelect = (comuneInput) => {
    // comuneInput arriva come STRINGA dal JSX
    const comuneObj =
      typeof comuneInput === "string"
        ? comuni.find((x) => x.name === comuneInput)
        : comuneInput;

    setQuery(comuneObj?.name || "");
    setFiltered([]);

    // zoom al comune selezionato
    const map = mapRef.current;
    if (map && comuneObj?.lon != null && comuneObj?.lat != null) {
      map.flyTo({
        center: [comuneObj.lon, comuneObj.lat],
        zoom: 11, // regola se vuoi più vicino/lontano
        speed: 0.9,
        essential: true,
      });
    }
  };

  return (
    <>
      <div className="px-[5%]">
        <h1
          className="
    text-center font-uber-medium font-medium
    // text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] 
    mt-6 sm:mt-10 md:mt-16 lg:mt-24 xl:mt-32
  "
        >
          Uber
        </h1>

        <p
          className="
    text-center font-extralight font-uber-medium
    text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl
    mt-4 sm:mt-6 md:mt-10 lg:mt-14 xl:mt-20
  "
        >
          Scopri il tasso di apertura
          <br />
          dell’app Uber nel tuo comune.
        </p>
        <div className="relative">
          <div
            ref={mapContainer}
            className="  my-10 sm:mt-12 md:mt-20 lg:mt-30 xl:mt-15 w-full rounded-3xl overflow-hidden
          h-[80dvh] min-h-[380px]
          sm:h-[65dvh]
          md:h-[68dvh]
          lg:h-[70dvh]
          [@media(orientation:landscape)]:h-[80dvh] border-2 border-black  "
          />
          <div className="flex-center  absolute bottom-2 bg-white w-[95%] left-1/2 -translate-1/2 rounded-full px-6   transition-all duration-150 ">
            <img
              src="images/image.png"
              className=" w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-16"
              loading="lazy"
            />
            <input
              type="text"
              placeholder="Cerca il tuo comune"
              value={query}
              onChange={handleChange}
              className="w-full rounded-4xl border-none outline-none font-uber-medium placeholder:text-[#949494] text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl p-3 sm:p-4 md:px-6 md:py-5 lg:px-8 lg:py-6 xl:px-10 xl:py-8"
            />
            {query && filtered.length > 0 && (
              <ul className="absolute bottom-full left-0 w-full bg-white rounded-3xl shadow-lg border border-gray-100 max-h-80 overflow-auto z-50 mt-2">
                {filtered.map((c, i) => (
                  <li
                    key={i}
                    onClick={() => handleSelect(c)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-lg border-b border-gray-100 last:border-b-0"
                  >
                    <div className="bg-[#545454] p-3 rounded-full">
                      <img
                        src="/images/location.png"
                        alt="icon"
                        className="opacity-70 invert w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>
            )}
            <img
              src="/images/close.png"
              alt="icon"
              className=" w-5 sm:w-6 md:w-8 lg:w-8 xl:w-9 2xl:w-12 opacity-70"
              onClick={() => setQuery("")}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
