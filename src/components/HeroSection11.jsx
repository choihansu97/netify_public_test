function HeroSection11() {
  return (
    <section className="w-full h-full bg-white">
      <div className="h-[574px] w-[1440px] mx-auto flex justify-between items-start px-[120px] py-[120px]">
        <div className="w-[577px] h-[248px] gap-6 flex flex-col justify-start items-start pt-[40px]">
          <div className="w-[468px] h-[160px] gap-2 flex flex-col justify-start items-start">
            <p className="font-suit font-semibold text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#00000099]">
              그래도 출근하는 직원보단 관리가 어렵지 않을까요?
            </p>
            <h4 className="font-suit font-bold text-[40px] leading-[60px] tracking-[-0.02em] text-left text-[#000000E5]">
              담당 매니저의 밀착 관리로
              <br />
              HR 리스크 없는 전담 디자이너
            </h4>
          </div>
          <pre className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#000000CC]">
            담당 매니저가 주기적으로 트래킹하며{" "}
            <span className="font-semibold">업무 환경을 관리</span>하고
            있습니다.
            <br />
            <span className="font-bold">
              직원 관리에 대한 부담과 걱정 없이
            </span>{" "}
            전담 디자이너 구독의 장점만 누려보세요.
          </pre>
        </div>
        <img
          src="/img/box/section11-box1.png"
          alt="section11-box1"
          className="w-[480px] h-[334px]"
        />
      </div>
    </section>
  );
}

export default HeroSection11;
