export default function ThankYouPage() {
  return (
    <div className="col-center gap-2.5 lg:gap-15 abs-center w-full">
      <div className="flex-center gap-6">
        <h1 className="text-5xl  sm:text-5xl md:text-6xl lg:text-9xl xl:text-11xl  text-center font-uber-medium font-medium ">
          Uber |{" "}
        </h1>
        <img
          src="/images/anci.png"
          alt="Anci Logo"
          loading="lazy"
          className="
      h-14 sm:h-15 md:h-16 lg:h-30 mt-7 xl:h-35
      w-auto object-contain
    "
        />
      </div>
      <h1 className="text-responsive-title font-uber-medium">
        Grazie! Ti contatteremo presto.
      </h1>
    </div>
  );
}
