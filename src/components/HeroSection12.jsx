function HeroSection12() {
  return (
    <section className="h-full w-full bg-white">
      <div className="mx-auto flex h-[1220px] w-full max-w-[1440px] flex-col items-center justify-start px-[190px] pb-[120px] pt-[40px]">
        <div className="flex h-[236px] w-[394px] flex-col items-start justify-center gap-4">
          <div className="h-[156px] w-[394px] gap-1">
            <p className="text-center font-suit text-[20px] font-semibold leading-[32px] tracking-[-0.02em] text-[#00000099]">
              직원보다 효율적입니다
            </p>
            <h3 className="text-center font-suit text-[40px] font-bold leading-[60px] tracking-[-0.02em] text-[#000000E5]">
              고정비용 지출 걱정 없이
              <br />
              필요한 만큼만 이용하세요
            </h3>
          </div>
          <pre className="text-center font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
            4대보험, 퇴직금, 위약금... 고정비용 걱정 없이
            <br />
            월단위 구독제로 필요한만큼만 이용할 수 있습니다.
          </pre>
        </div>
        <div className="mt-[56px] flex h-[56px] w-[748px] items-center justify-between gap-4">
          <div className="h-[56px] w-[194px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-6 py-3">
              <p className="text-center font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
                전담 디자이너 배정
              </p>
            </div>
          </div>
          <div className="h-[56px] w-[211px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-6 py-3">
              <p className="text-center font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
                무제한 디자이너 교체
              </p>
            </div>
          </div>
          <div className="h-[56px] w-[211px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-6 py-3">
              <p className="text-center font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
                무제한 수정
              </p>
            </div>
          </div>
          <div className="h-[56px] w-[211px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-6 py-3">
              <p className="text-center font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
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
