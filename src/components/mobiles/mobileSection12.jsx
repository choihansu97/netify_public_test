function MobileSection12() {
  return (
    <section className="h-full w-full bg-white">
      <div className="mx-auto flex w-full flex-col items-center justify-start gap-8 px-4 py-12">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <div className="w-full gap-1">
            <p className="text-center font-suit text-[14px] font-semibold leading-[22.4px] tracking-[-0.02em] text-[#00000099]">
              직원보다 효율적입니다
            </p>
            <h3 className="text-center font-suit text-[28px] font-bold leading-[42px] tracking-[-0.02em] text-[#000000E5]">
              고정비용 지출 걱정 없이
              <br />
              필요한 만큼만 이용하세요
            </h3>
          </div>
          <pre className="w-full text-center font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
            4대보험, 퇴직금, 위약금... 고정비용 걱정 없이
            <br />
            월단위 구독제로 필요한만큼만 이용할 수 있습니다.
          </pre>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          <divc className="w-[164px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-4 py-2">
              <p className="text-center font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                전담 디자이너 배정
              </p>
            </div>
          </divc>
          <div className="w-[164px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-4 py-2">
              <p className="text-center font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                무제한 디자이너 교체
              </p>
            </div>
          </div>
          <div className="w-[118px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-4 py-2">
              <p className="text-center font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                무제한 수정
              </p>
            </div>
          </div>
          <div className="w-[118px] rounded-[28px] bg-section12-gradient-border-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center whitespace-nowrap rounded-[26px] bg-white px-4 py-2">
              <p className="text-center font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                원본파일 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileSection12;
