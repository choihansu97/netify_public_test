function HeroSection9() {
  return (
    <section className="h-full w-full bg-white">
      <div className="mx-auto flex h-[574px] w-[1440px] items-start justify-between px-[120px] py-[120px]">
        <div className="flex h-[188px] w-[590px] flex-col items-start justify-start gap-6 pt-[40px]">
          <div className="h-[100px] w-[590px] gap-2">
            <p className="text-left font-suit text-[20px] font-semibold leading-[32px] tracking-[-0.02em] text-[#00000099]">
              디자이너님이 잘 집중하고 계신 걸까요?
            </p>
            <h3 className="text-left font-suit text-[40px] font-semibold leading-[60px] tracking-[-0.02em] text-[#000000E5]">
              월간 업무 보고서로 확인하는 근무 환경
            </h3>
          </div>
          <pre className="text-left font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
            월 1회 디자이너의 업무 환경을 트래킹한{' '}
            <span className="text-left font-suit text-[20px] font-bold leading-[32px] tracking-[-0.02em] text-[#000000CC]">
              보고서를 이메일로 전송
            </span>
            해 드립니다.
            <br />
            디자이너의 업무 환경이 궁금하다면 업무 보고서를 요청해 보세요.
          </pre>
        </div>
        <img
          src="/img/box/section9-box1.png"
          alt="section9-box1"
          className="h-[334px] w-[480px]"
        />
      </div>
    </section>
  );
}

export default HeroSection9;
