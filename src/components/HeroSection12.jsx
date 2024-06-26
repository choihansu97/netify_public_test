function HeroSection12() {
  return (
    <section className="w-full h-full bg-white">
      <div className="h-[1220px] max-w-[1440px] w-full mx-auto flex flex-col justify-start items-center px-[190px] pt-[40px] pb-[120px]">
        <div className="w-[394px] h-[236px] gap-4 flex flex-col justify-center items-start">
          <div className="w-[394px] h-[156px] gap-1">
            <p className="font-suit font-semibold text-[20px] leading-[32px] tracking-[-0.02em] text-center text-[#00000099]">
              직원보다 효율적입니다
            </p>
            <h3 className="font-suit font-bold text-[40px] leading-[60px] tracking-[-0.02em] text-center text-[#000000E5]">
              고정비용 지출 걱정 없이
              <br />
              필요한 만큼만 이용하세요
            </h3>
          </div>
          <pre className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-center text-[#000000CC]">
            4대보험, 퇴직금, 위약금... 고정비용 걱정 없이
            <br />
            월단위 구독제로 필요한만큼만 이용할 수 있습니다.
          </pre>
        </div>
        <div className="w-[748px] h-[56px] gap-4 mt-[56px] flex justify-between items-center">
          <div className="w-[194px] h-[56px] p-[2px] rounded-[28px] bg-section12-gradient-border-2">
            <div className="w-full h-full bg-white rounded-[26px] py-3 px-6 flex items-center justify-center whitespace-nowrap">
              <p className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-center text-[#000000CC]">
                전담 디자이너 배정
              </p>
            </div>
          </div>
          <div className="w-[211px] h-[56px] p-[2px] rounded-[28px] bg-section12-gradient-border-2">
            <div className="w-full h-full bg-white rounded-[26px] py-3 px-6 flex items-center justify-center whitespace-nowrap">
              <p className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-center text-[#000000CC]">
                무제한 디자이너 교체
              </p>
            </div>
          </div>
          <div className="w-[211px] h-[56px] p-[2px] rounded-[28px] bg-section12-gradient-border-2">
            <div className="w-full h-full bg-white rounded-[26px] py-3 px-6 flex items-center justify-center whitespace-nowrap">
              <p className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-center text-[#000000CC]">
                무제한 수정
              </p>
            </div>
          </div>
          <div className="w-[211px] h-[56px] p-[2px] rounded-[28px] bg-section12-gradient-border-2">
            <div className="w-full h-full bg-white rounded-[26px] py-3 px-6 flex items-center justify-center whitespace-nowrap">
              <p className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-center text-[#000000CC]">
                원본파일 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection12;
