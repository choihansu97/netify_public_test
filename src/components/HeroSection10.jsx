function HeroSection10() {
  return (
    <section className="w-full h-full bg-[#0000000A]">
      <div className="h-[574px] w-[1440px] mx-auto flex justify-between items-start px-[120px] py-[120px]">
        <img
          src="/img/box/section10-box1.png"
          alt="section10-box1"
          className="w-[480px] h-[334px]"
        />
        <div className="w-[620px] h-[188px] gap-6 flex flex-col justify-start items-start pt-[40px]">
          <div className="w-[574px] h-[100px] gap-2 flex flex-col justify-start items-start">
            <p className="font-suit font-semibold text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#00000099]">
              디자이너님이 우리 기업의 업무만 보는 것 맞나요?
            </p>
            <h4 className="font-suit font-bold text-[40px] leading-[60px] tracking-[-0.02em] text-left text-[#000000E5]">
              계약된 시간에는 한 기업만 전담으로
            </h4>
          </div>
          <pre className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#000000CC]">
            디하에서는 한명의 디자이너가 여러 고객사의 업무를 한번에 핸들링하지
            않습니다.
            <br />
            <span className="font-suit font-bold text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#000000CC]">
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
