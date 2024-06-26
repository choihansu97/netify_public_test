function HeroSection5() {
  return (
    <section className="w-full h-full bg-section5-gradient-color">
      <div className="h-[240px] w-[1440px] mx-auto flex justify-between items-center px-[120px] py-[71px]">
        <h2 className="font-suit font-normal text-[36px] leading-[48.6px] tracking-[-0.02em] text-left text-white">
          이젠 직원보다 열심히 일하는
          <br />
          <span className="font-suit font-bold text-[36px] leading-[48.6px] tracking-[-0.02em]">
            전담 디자이너와 함께 일하세요
          </span>
        </h2>
        <div className="w-[328px] h-[50px] gap-2 flex items-center">
          <button className="w-[172px] h-[50px] py-3 px-6 bg-[#FFFFFF] whitespace-nowrap">
            <p className="font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-left text-section5-gradient-text bg-clip-text bg-section5-gradient-text">
              지금 바로 구독하기
            </p>
          </button>
          <button className="w-[148px] h-[50px] py-3 px-6 bg-[#FFFFFF33] whitespace-nowrap">
            <p className="font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-left text-[#FFFFFF]">
              24시 즉시 상담
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection5;
