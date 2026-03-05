export function HeroSection() {
  return (
    <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Rounded hero image */}
      <div
        className="relative w-full h-[400px] sm:h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group"
        role="img"
        aria-label="図書館で学ぶ医学生たち"
      >
        {/* Background image with zoom on hover */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 hero-bg"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Large text overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-12 text-white z-10">
          <p className="text-[10px] sm:text-xs font-en tracking-[0.4em] opacity-70 mb-3 uppercase animate-fade-in">
            Innovation in Education
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-en font-bold tracking-wide leading-[0.95] animate-fade-in-up [animation-delay:100ms]">
            TOHOKU
            <br />
            UNIVERSITY
          </h2>
          <p className="text-sm sm:text-xl md:text-2xl font-en font-light tracking-[0.2em] mt-2 sm:mt-3 opacity-80 animate-fade-in-up [animation-delay:200ms]">
            Office of Medical Education
          </p>
        </div>
      </div>

      {/* Bold statement below the image */}
      <div className="mt-12 sm:mt-16 max-w-4xl">
        <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1] tracking-tight text-ink-900 animate-fade-in-up [animation-delay:200ms]">
          医学教育を、もっと前へ。
        </h1>

        <div className="mt-6">
          <p className="max-w-xl text-base leading-[2] text-ink-500 animate-fade-in [animation-delay:400ms]">
            医学教育推進センターは、エビデンスに基づく
            医学教育の実践と改革を通じて、
            未来の医療を担う人材を育成します。
          </p>
        </div>
      </div>
    </section>
  );
}
