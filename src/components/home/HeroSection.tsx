import {
  IllustrationCoffee,
  IllustrationSparkle,
  IllustrationFlower,
} from "@/components/common/Illustrations";

export function HeroSection() {
  return (
    <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Rounded hero image - Gemini illustration of students studying */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Text overlay (bottom right) */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-right text-white z-10">
          <p className="text-xs sm:text-sm font-en tracking-[0.3em] opacity-80 mb-2 uppercase animate-fade-in">
            Innovation in Education
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-en font-medium tracking-widest leading-tight animate-fade-in-up [animation-delay:100ms]">
            TOHOKU UNIVERSITY
            <br />
            <span className="font-light">OFFICE OF MEDICAL EDUCATION</span>
          </h2>
        </div>
      </div>

      {/* Bold statement below the image - with playful illustrations */}
      <div className="mt-12 sm:mt-16 max-w-4xl relative">
        {/* Floating decorative illustrations */}
        <div className="absolute -right-4 sm:right-0 -top-8 sm:-top-6 opacity-20 animate-fade-in [animation-delay:600ms]">
          <IllustrationSparkle className="w-12 h-12 sm:w-16 sm:h-16 text-copper" />
        </div>

        <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1] tracking-tight text-ink-900 animate-fade-in-up [animation-delay:200ms]">
          医学教育を、もっと前へ。
        </h1>

        <div className="mt-6 flex items-start gap-4">
          <p className="max-w-xl text-base leading-[2] text-ink-600 animate-fade-in [animation-delay:400ms]">
            医学教育推進センターは、エビデンスに基づく
            医学教育の実践と改革を通じて、
            未来の医療を担う人材を育成します。
          </p>
          {/* Small coffee illustration - cafe warmth */}
          <div className="hidden sm:block animate-fade-in [animation-delay:700ms] shrink-0 mt-2">
            <IllustrationCoffee className="w-10 h-10 text-copper/30" />
          </div>
        </div>

        {/* Hand-drawn flower accent */}
        <div className="absolute -left-12 bottom-0 hidden lg:block opacity-15 animate-fade-in [animation-delay:800ms]">
          <IllustrationFlower className="w-14 h-14 text-terracotta" />
        </div>
      </div>
    </section>
  );
}
