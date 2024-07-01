function HeroSection5() {
  return (
    <section className="h-full w-full bg-section5-gradient-color">
      <div className="mx-auto flex h-[240px] w-[1440px] items-center justify-between px-[120px] py-[71px]">
        <h2 className="text-left font-suit text-[36px] font-normal leading-[48.6px] tracking-[-0.02em] text-white">
          이젠 직원보다 열심히 일하는
          <br />
          <span className="font-suit text-[36px] font-bold leading-[48.6px] tracking-[-0.02em]">
            전담 디자이너와 함께 일하세요
          </span>
        </h2>
        <div className="flex h-[50px] w-[328px] items-center gap-2">
          <button className="h-[50px] w-[172px] whitespace-nowrap rounded-lg bg-[#FFFFFF] px-6 py-3">
            <p className="bg-section5-gradient-text bg-clip-text text-left font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-section5-gradient-text">
              지금 바로 구독하기
            </p>
          </button>
          <button className="h-[50px] w-[148px] whitespace-nowrap rounded-lg bg-[#FFFFFF33] px-6 py-3">
            <p className="text-left font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-[#FFFFFF]">
              24시 즉시 상담
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection5;
