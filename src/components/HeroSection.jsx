function HeroSection() {
  return (
    <section className="h-full w-full bg-hero-section-gradient">
      <div className="mx-auto flex max-h-[476px] min-h-[476px] min-w-[1440px] max-w-[1440px] flex-col items-center justify-center gap-[24px]">
        <article className="flex h-full w-full flex-col items-center justify-center gap-2">
          <h1 className="text-center font-suit text-[48px] font-normal leading-[1.35] tracking-[-0.02em] text-white text-opacity-90">
            좋은 디자이너를 찾아
            <br />
            <span className="text-center font-suit text-[48px] font-extrabold leading-[1.35] tracking-[-0.02em] text-white">
              헤매고 계셨다면
            </span>
          </h1>
          <p className="font-suit text-[20px] font-normal leading-[1.6] tracking-[-0.02em] text-white text-opacity-90">
            우리 기업에 딱! 맞는
            <span className="font-suit text-[20px] font-bold leading-[32px] tracking-[-0.02em] text-white text-opacity-90">
              실력있고 성실한 전담 디자이너
            </span>
            를
            <br />
            직원처럼 쓸 수 있는 방법을 알려드릴게요
          </p>
        </article>
        <article className="flex h-full w-full items-center justify-center gap-2">
          <button className="h-[50px] w-[206px] rounded-lg bg-white px-6 py-3">
            <p className="whitespace-nowrap bg-hero-button-gradient bg-clip-text text-left font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-transparent">
              3일 무료! 디자이너 구독
            </p>
          </button>
          <button className="h-[50px] w-[148px] rounded-lg bg-white bg-opacity-[0.16] px-6 py-3">
            <p className="whitespace-nowrap font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-white">
              24시 즉시 상담
            </p>
          </button>
        </article>
      </div>
    </section>
  );
}

export default HeroSection;
