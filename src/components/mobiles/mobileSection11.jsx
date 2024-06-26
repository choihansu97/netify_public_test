function MobileSection11() {
  return (
    <section className="w-full h-full bg-white">
      <div
        className="mx-auto flex flex-col items-start px-4 py-12 gap-8">
        <div
          className="gap-2 flex flex-col justify-start items-start">
          <div
            className="flex flex-col justify-start items-start">
            <p
              className="font-suit font-semibold text-[14px] leading-[22.4px] tracking-[-0.02em] text-left text-[#00000099]">
              그래도 출근하는 직원보단 관리가 어렵지 않을까요?
            </p>
            <h4
              className="font-suit font-bold text-[28px] leading-[42px] tracking-[-0.02em] text-left text-[#000000E5]">
              담당 매니저의 밀착 관리로
              <br/>
              HR 리스크 없는 전담 디자이너
            </h4>
          </div>
          <pre
            className="font-suit font-normal text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
            담당 매니저가 주기적으로 트래킹하며{" "}
            <span className="font-semibold">업무 환경을 관리</span><br/>
            하고 있습니다.
            <span className="font-bold">
              직원 관리에 대한 부담과 걱정 없이
            </span>{" "}
            전담<br/> 디자이너 구독의 장점만 누려보세요.
          </pre>
        </div>

        <img
          src="/img/box/section11-box1.png"
          alt="section11-box1"
          className="w-full"
        />
      </div>
    </section>
  )
}

export default MobileSection11;
