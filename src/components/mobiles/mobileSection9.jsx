function MobileSection9() {
  return (
    <section className="w-full h-full bg-white">
      <div
        className="flex-col gap-12 mx-auto flex justify-between items-start px-4 py-12">
        <div
          className="gap-2 flex flex-col justify-start items-start pt-[40px]">
          <div className="gap-2">
            <p
              className="font-suit font-semibold text-[14px] leading-[22.4px] tracking-[-0.02em] text-left text-[#00000099]">
              디자이너님이 잘 집중하고 계신 걸까요?
            </p>
            <h3
              className="font-suit font-semibold text-[28px] leading-[42px] tracking-[-0.02em] text-left text-[#000000E5]">
              월간 업무 보고서로<br/>확인하는 근무 환경
            </h3>
          </div>

          <pre
            className="font-suit font-normal text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
            월 1회 디자이너의 업무 환경을 트래킹한{" "}
            <span
              className="font-suit font-bold text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
              보고서를 이메일<br/>로 전송
            </span>
            해 드립니다. 디자이너의 업무 환경이 궁금하다면<br/>
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
  )
}

export default MobileSection9;
