function MobileSection9() {
  return (
    <section className="h-full w-full bg-white">
      <div className="mx-auto flex flex-col items-start justify-between gap-12 px-4 py-12">
        <div className="flex flex-col items-start justify-start gap-2 pt-[40px]">
          <div className="gap-2">
            <p className="text-left font-suit text-[14px] font-semibold leading-[22.4px] tracking-[-0.02em] text-[#00000099]">
              디자이너님이 잘 집중하고 계신 걸까요?
            </p>
            <h3 className="text-left font-suit text-[28px] font-semibold leading-[42px] tracking-[-0.02em] text-[#000000E5]">
              월간 업무 보고서로
              <br />
              확인하는 근무 환경
            </h3>
          </div>

          <pre className="text-left font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
            월 1회 디자이너의 업무 환경을 트래킹한{' '}
            <span className="text-left font-suit text-[16px] font-bold leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
              보고서를 이메일
              <br />로 전송
            </span>
            해 드립니다. 디자이너의 업무 환경이 궁금하다면
            <br />
            업무 보고서를 요청해 보세요.
          </pre>
        </div>

        <img
          src="/img/box/section9-box1.png"
          alt="section9-box1"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default MobileSection9;
