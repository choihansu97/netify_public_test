function MobileSection5() {
  return (
    <section className="w-full h-full bg-section5-gradient-color">
      <div
        className="mx-auto flex flex-col justify-between items-center px-4 py-14">
        <h2
          className="font-suit font-normal text-2xl	leading-[36px] tracking-[-0.02em] text-left text-white mb-6">
          이젠 직원보다 열심히 일하는
          <br/>
          <span
            className="font-suit font-bold text-2xl	 leading-[36px] tracking-[-0.02em]">
            전담 디자이너와 함께 일하세요
          </span>
        </h2>
        <div className="w-[172px] flex-col gap-2 flex items-center">
          <button
            className="flex justify-center items-center w-full h-[50px] py-3 px-6 bg-[#FFFFFF] whitespace-nowrap">
            <p
              className=" font-suit text-[16px] font-bold tracking-[0.45px] text-section5-gradient-text bg-clip-text bg-section5-gradient-text">
              지금 바로 구독하기
            </p>
          </button>
          <button
            className="flex justify-center items-center w-full h-[50px] py-3 px-6 bg-[#FFFFFF33] whitespace-nowrap">
            <p
              className="font-suit text-[16px] font-bold tracking-[0.45px] text-[#FFFFFF]">
              24시 즉시 상담 신청
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MobileSection5;
