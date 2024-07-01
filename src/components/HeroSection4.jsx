function HeroSection4() {
  return (
    <section className="h-full w-full bg-white">
      <div className="mx-auto flex h-[812px] w-[1440px] flex-col px-[120px] py-[96px]">
        <div className="flex flex-col items-start gap-2">
          <p className="text-left font-suit text-[20px] font-medium tracking-[-0.02em] text-[#000000CC]">
            어떻게 가능한가요?
          </p>
          <pre className="text-left font-suit text-[36px] font-bold leading-[54px] tracking-[-0.02em] text-[#000000E5]">
            간단한 신청서만 작성하면
            <br />
            디자이너와 바로 일할 수 있어요
          </pre>
        </div>
        <div className="mt-[32px] flex h-[440px] w-[1200px] items-center justify-between gap-5">
          <div className="flex h-[440px] w-[386.67px] flex-col items-start justify-start rounded-[20px] bg-[#0000000A] px-6 pt-[40px]">
            <div className="flex h-[148px] w-[338.67px] flex-col items-start justify-start gap-2">
              <p className="text-left font-suit text-2xl font-extrabold leading-[33.6px] tracking-[-0.02em] text-[#795BF9]">
                01
              </p>
              <p className="text-left font-suit text-2xl font-bold leading-[33.6px] tracking-[-0.02em] text-[#000000E5]">
                기업 정보와 필요 업무 기입
              </p>
              <pre className="text-left font-suit text-xl font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
                기업의 업종과 희망 업무를 잘 수행할 수 있는
                <br />
                맞춤형 디자이너를 배정해요
              </pre>
            </div>
            <div className="mt-8 flex h-full w-full items-start justify-center">
              <img
                src="/img/box/section4-box1.png"
                alt="section4-box1"
                className="h-[222px] w-[240px]"
              />
            </div>
          </div>
          <div className="flex h-[440px] w-[386.67px] flex-col items-start justify-start rounded-[20px] bg-[#0000000A] px-6 pt-[40px]">
            <div className="flex h-[148px] w-[338.67px] flex-col items-start justify-start gap-2">
              <p className="text-left font-suit text-2xl font-extrabold leading-[33.6px] tracking-[-0.02em] text-[#795BF9]">
                02
              </p>
              <p className="text-left font-suit text-2xl font-bold leading-[33.6px] tracking-[-0.02em] text-[#000000E5]">
                업무 시간대와 시작일 선택
              </p>
              <pre className="text-left font-suit text-xl font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
                2시간/3시간/4시간/8시간 필요한 만큼,
                <br />
                원하는 날부터 진행이 가능해요
              </pre>
            </div>
            <div className="mt-8 flex h-full w-full items-start justify-center">
              <img
                src="/img/box/section4-box2.png"
                alt="section4-box2"
                className="h-[222px] w-[240px]"
              />
            </div>
          </div>
          <div className="flex h-[440px] w-[386.67px] flex-col items-start justify-start rounded-[20px] bg-[#0000000A] px-6 pt-[40px]">
            <div className="flex h-[148px] w-[338.67px] flex-col items-start justify-start gap-2">
              <p className="text-left font-suit text-2xl font-extrabold leading-[33.6px] tracking-[-0.02em] text-[#795BF9]">
                03
              </p>
              <p className="text-left font-suit text-2xl font-bold leading-[33.6px] tracking-[-0.02em] text-[#000000E5]">
                희망 디자이너 성향 선택
              </p>
              <pre className="text-left font-suit text-xl font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
                배정받을 디자이너에게 꼭 필요한 업무 스택,
                <br />
                스킬이 있다면 요청이 가능해요
              </pre>
            </div>
            <div className="mt-8 flex h-full w-full items-start justify-center">
              <img
                src="/img/box/section4-box3.png"
                alt="section4-box3"
                className="h-[222px] w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection4;
