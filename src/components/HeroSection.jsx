function HeroSection() {
  return (
    <section className="bg-hero-section-gradient w-full h-full">
      <div className="min-h-[476px] min-w-[1440px] max-h-[476px] max-w-[1440px] mx-auto gap-[24px] flex flex-col justify-center items-center">
        <article className="flex flex-col justify-center items-center w-full h-full gap-2">
          <h1 className="font-suit font-normal text-[48px] leading-[1.35] text-center tracking-[-0.02em] text-white text-opacity-90">
            좋은 디자이너를 찾아
            <br />
            <span className="font-suit font-extrabold text-[48px] leading-[1.35] text-center tracking-[-0.02em] text-white">
              헤매고 계셨다면
            </span>
          </h1>
          <p className="font-suit font-normal text-[20px] leading-[1.6] tracking-[-0.02em] text-white text-opacity-90">
            우리 기업에 딱! 맞는
            <span className="font-suit font-bold text-[20px] leading-[32px] tracking-[-0.02em] text-white text-opacity-90">
              실력있고 성실한 전담 디자이너
            </span>
            를
            <br />
            직원처럼 쓸 수 있는 방법을 알려드릴게요
          </p>
        </article>
        <article className="flex justify-center items-center w-full h-full gap-2">
          <button className="w-[206px] h-[50px] px-6 py-3 bg-white rounded-lg">
            <p className="font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-left bg-clip-text text-transparent bg-hero-button-gradient whitespace-nowrap">
              3일 무료! 디자이너 구독
            </p>
          </button>
          <button className="px-6 py-3 w-[148px] h-[50px] bg-white bg-opacity-[0.16] rounded-lg">
            <p className="font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-white whitespace-nowrap">
              24시 즉시 상담
            </p>
          </button>
        </article>
      </div>
    </section>
  );
}

export default HeroSection;
