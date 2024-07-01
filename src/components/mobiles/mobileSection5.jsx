function MobileSection5() {
  return (
    <section className="h-full w-full bg-section5-gradient-color">
      <div className="mx-auto flex flex-col items-center justify-between px-4 py-14">
        <h2 className="mb-6 text-left font-suit text-2xl font-normal leading-[36px] tracking-[-0.02em] text-white">
          이젠 직원보다 열심히 일하는
          <br />
          <span className="font-suit text-2xl font-bold leading-[36px] tracking-[-0.02em]">
            전담 디자이너와 함께 일하세요
          </span>
        </h2>
        <div className="flex w-[172px] flex-col items-center gap-2">
          <button className="flex h-[50px] w-full items-center justify-center whitespace-nowrap rounded-lg bg-[#FFFFFF] px-6 py-3">
            <p className="bg-section5-gradient-text bg-clip-text font-suit text-[16px] font-bold tracking-[0.45px] text-section5-gradient-text">
              지금 바로 구독하기
            </p>
          </button>
          <button className="flex h-[50px] w-full items-center justify-center whitespace-nowrap rounded-lg bg-[#FFFFFF33] px-6 py-3">
            <p className="font-suit text-[16px] font-bold tracking-[0.45px] text-[#FFFFFF]">
              24시 즉시 상담 신청
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MobileSection5;
