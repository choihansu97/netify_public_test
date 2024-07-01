const SlideCard = ({ step, title, description, imgSrc, imgAlt }) => (
  <div className="flex h-auto w-full max-w-[500px] flex-col items-start justify-start rounded-[20px] bg-[#0000000A] px-6 pt-[40px]">
    <div className="flex w-full max-w-[500px] flex-col items-start justify-start gap-2">
      <p className="text-left font-suit text-2xl font-extrabold leading-[28px] tracking-[-0.02em] text-[#795BF9]">
        {step}
      </p>
      <p className="text-left font-suit text-2xl font-bold leading-[28px] tracking-[-0.02em] text-[#000000E5]">
        {title}
      </p>
      <pre className="text-smfont-normal whitespace-break-spaces text-left font-suit leading-[28px] tracking-[-0.02em] text-[#000000CC]">
        {description}
      </pre>
    </div>
    <div className="mt-8 flex h-full w-full items-start justify-center">
      <img src={imgSrc} alt={imgAlt} loading={'lazy'} />
    </div>
  </div>
);

function MobileSection4() {
  return (
    <section className="h-full w-full bg-white">
      <div className="mx-auto flex h-auto w-full flex-col px-4 py-[48px]">
        <div className="flex flex-col items-center gap-2">
          <p className="text-left font-suit text-[16px] font-medium tracking-[-0.02em] text-[#000000CC]">
            어떻게 가능한가요?
          </p>
          <div className="text-left text-center font-suit text-[28px] font-bold leading-[36px] tracking-[-0.02em] text-[#000000E5]">
            간단한 신청서만 작성하면
            <br />
            디자이너와 바로 일할 수 있어요
          </div>
        </div>

        <div className="mt-5 flex w-full flex-col items-center justify-between gap-5">
          <SlideCard
            step="01"
            title="기업 정보와 필요 업무 기입"
            description="기업의 업종과 희망 업무를 잘 수행할 수 있는 맞춤형 디자이너를 배정해요"
            imgSrc="/img/box/section4-box1.png"
            imgAlt="section4-box1"
          />
          <SlideCard
            step="02"
            title="업무 시간대와 시작일 선택"
            description="2시간/3시간/4시간/8시간 필요한 만큼, 원하는 날부터 진행이 가능해요"
            imgSrc="/img/box/section4-box2.png"
            imgAlt="section4-box2"
          />
          <SlideCard
            step="03"
            title="희망 디자이너 성향 선택"
            description="배정받을 디자이너에게 꼭 필요한 업무 스택, 스킬이 있다면 요청이 가능해요"
            imgSrc="/img/box/section4-box3.png"
            imgAlt="section4-box3"
          />
        </div>
      </div>
    </section>
  );
}

export default MobileSection4;
