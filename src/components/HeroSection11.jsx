function HeroSection11() {
  return (
    <section className="h-full w-full bg-white">
      <div className="mx-auto flex h-[574px] w-[1440px] items-start justify-between px-[120px] py-[120px]">
        <div className="flex h-[248px] w-[577px] flex-col items-start justify-start gap-6 pt-[40px]">
          <div className="flex h-[160px] w-[468px] flex-col items-start justify-start gap-2">
            <p className="text-left font-suit text-[20px] font-semibold leading-[32px] tracking-[-0.02em] text-[#00000099]">
              그래도 출근하는 직원보단 관리가 어렵지 않을까요?
            </p>
            <h4 className="text-left font-suit text-[40px] font-bold leading-[60px] tracking-[-0.02em] text-[#000000E5]">
              담당 매니저의 밀착 관리로
              <br />
              HR 리스크 없는 전담 디자이너
            </h4>
          </div>
          <pre className="text-left font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
            담당 매니저가 주기적으로 트래킹하며{' '}
            <span className="font-semibold">업무 환경을 관리</span>하고
            있습니다.
            <br />
            <span className="font-bold">
              직원 관리에 대한 부담과 걱정 없이
            </span>{' '}
            전담 디자이너 구독의 장점만 누려보세요.
          </pre>
        </div>
        <img
          src="/img/box/section11-box1.png"
          alt="section11-box1"
          className="h-[334px] w-[480px]"
        />
      </div>
    </section>
  );
}

export default HeroSection11;
