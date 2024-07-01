function HeroSection10() {
  return (
    <section className="h-full w-full bg-[#0000000A]">
      <div className="mx-auto flex h-[574px] w-[1440px] items-start justify-between px-[120px] py-[120px]">
        <img
          src="/img/box/section10-box1.png"
          alt="section10-box1"
          className="h-[334px] w-[480px]"
        />
        <div className="flex h-[188px] w-[620px] flex-col items-start justify-start gap-6 pt-[40px]">
          <div className="flex h-[100px] w-[574px] flex-col items-start justify-start gap-2">
            <p className="text-left font-suit text-[20px] font-semibold leading-[32px] tracking-[-0.02em] text-[#00000099]">
              디자이너님이 우리 기업의 업무만 보는 것 맞나요?
            </p>
            <h4 className="text-left font-suit text-[40px] font-bold leading-[60px] tracking-[-0.02em] text-[#000000E5]">
              계약된 시간에는 한 기업만 전담으로
            </h4>
          </div>
          <pre className="text-left font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
            디하에서는 한명의 디자이너가 여러 고객사의 업무를 한번에 핸들링하지
            않습니다.
            <br />
            <span className="text-left font-suit text-[20px] font-bold leading-[32px] tracking-[-0.02em] text-[#000000CC]">
              계약된 시간에는 한 기업만 전담
            </span>
            으로 맡아 집중하여 업무를 진행합니다.
          </pre>
        </div>
      </div>
    </section>
  );
}

export default HeroSection10;
