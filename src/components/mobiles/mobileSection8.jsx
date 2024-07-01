import { useEffect, useState } from 'react';

function MobileSection8() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getClassName = (index) => {
    return activeIndex === index
      ? 'p-[2px] rounded-[20px] bg-section8-gradient-border shadow-[0px_0px_10px_0px_rgba(121,91,249,0.3)]'
      : 'gap-5 rounded-[20px] bg-[#FFFFFF]';
  };

  return (
    <section className="h-full w-full bg-[#0000000A]">
      <div className="mx-auto flex w-full flex-col items-start justify-between px-4 py-12">
        <div className="mb-8 flex flex-col items-start justify-start gap-2">
          <div className="flex flex-col items-start justify-start">
            <p className="text-left font-suit text-[14px] font-medium leading-[22.4px] tracking-[-0.02em] text-[#00000099]">
              시간제 근무인데 업무에 차질이 생기면 어떡하죠?
            </p>
            <h4 className="text-left font-suit text-[28px] font-bold leading-[42px] tracking-[-0.02em] text-[#000000E5]">
              하루 세번, 정확한 업무 보고
            </h4>
          </div>

          <div className="whitespace-break-spaces text-left font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
            시간제 근무인 만큼 업무에 차질이 없도록{' '}
            <span className="text-left font-suit text-[16px] font-bold leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
              일 3회 업무 보<br />
              고를 필수
            </span>
            로 하고 있습니다.체계적인 업무 보고로 확실하
            <br />게 관리되는 우리회사 전담 디자이너와 함께 일해보세요.
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-[17px]">
          <div className={getClassName(0)}>
            <div className="flex h-full w-full items-center justify-between gap-5 rounded-[18px] bg-white p-4">
              <img
                src="/img/icon/section8-icon1.png"
                alt="section8-icon1"
                className="h-[86px] w-[86px]"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-left font-suit text-[16px] font-bold leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                  업무 시작 안내 및 브리핑
                </p>
                <pre className="text-left font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                  업무 시작 시간 정각에 맞추어 매<br />
                  일 디자이너가 인사드리고, <br />
                  당일 진행할 업무를 브리핑합니다.
                </pre>
              </div>
            </div>
          </div>
          <div className={getClassName(1)}>
            <div className="flex h-full w-full items-center justify-between gap-5 rounded-[18px] bg-white p-4">
              <img
                src="/img/icon/section8-icon2.png"
                alt="section8-icon2"
                className="h-[86px] w-[86px]"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-left font-suit text-[16px] font-bold leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                  진행 상황 브리핑 및 중간 보고
                </p>
                <pre className="text-left font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                  예상 업무 완료 시안과 중간 시안
                  <br />
                  전달 일정을 항상 공유하여, 업무
                  <br />
                  에 진행에 차질이 없도록 관리합
                  <br />
                  니다.
                </pre>
              </div>
            </div>
          </div>
          <div className={getClassName(2)}>
            <div className="flex h-full w-full items-center justify-between gap-5 rounded-[18px] bg-white p-4">
              <img
                src="/img/icon/section8-icon3.png"
                alt="section8-icon3"
                className="h-[86px] w-[86px]"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <p className="text-left font-suit text-[16px] font-bold leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                  업무 마감 보고
                </p>
                <pre className="text-left font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                  업무 마감 시간이 되면 디자이너
                  <br />
                  가 마감 인사와 함께 명일 진행할
                  <br />
                  업무에 대해 미리 정리해 드립니
                  <br />
                  다.
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileSection8;
