import { useState, useEffect } from "react";

function HeroSection8() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getClassName = (index) => {
    return activeIndex === index
      ? "w-[480px] h-[118px] p-[2px] rounded-[20px] bg-section8-gradient-border shadow-[0px_0px_10px_0px_rgba(121,91,249,0.3)]"
      : "w-[480px] h-[118px] gap-5 rounded-[20px] bg-[#FFFFFF]";
  };

  return (
    <section className="w-full h-full bg-[#0000000A]">
      <div className="max-h-[628px] max-w-[1440px] w-full mx-auto flex justify-between items-start px-[120px] py-[120px]">
        <div className="w-[480px] h-[388px] gap-[17px] flex flex-col justify-start items-start">
          <div className={getClassName(0)}>
            <div className="w-full h-full bg-white rounded-[18px] p-4 flex justify-between items-center">
              <img
                src="/img/icon/section8-icon1.png"
                alt="section8-icon1"
                className="w-[86px] h-[86px]"
              />
              <div className="flex flex-col justify-start items-start w-[342px] h-[86px] gap-2">
                <p className="font-suit font-bold text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
                  업무 시작 안내 및 브리핑
                </p>
                <pre className="font-suit font-normal text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
                  업무 시작 시간 정각에 맞추어 매일 디자이너가
                  <br />
                  인사드리고, 당일 진행할 업무를 브리핑합니다.
                </pre>
              </div>
            </div>
          </div>
          <div className={getClassName(1)}>
            <div className="w-full h-full bg-white rounded-[18px] p-4 flex justify-between items-center">
              <img
                src="/img/icon/section8-icon2.png"
                alt="section8-icon2"
                className="w-[86px] h-[86px]"
              />
              <div className="flex flex-col justify-start items-start w-[342px] h-[86px] gap-2">
                <p className="font-suit font-bold text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
                  진행 상황 브리핑 및 중간 보고
                </p>
                <pre className="font-suit font-normal text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
                  예상 업무 완료 시안과 중간 시안 전달 일정을 항상
                  <br />
                  공유하여, 업무에 진행에 차질이 없도록 관리합니다.
                </pre>
              </div>
            </div>
          </div>
          <div className={getClassName(2)}>
            <div className="w-full h-full bg-white rounded-[18px] p-4 flex justify-between items-center">
              <img
                src="/img/icon/section8-icon3.png"
                alt="section8-icon3"
                className="w-[86px] h-[86px]"
              />
              <div className="flex flex-col justify-start items-start w-[342px] h-[86px] gap-2">
                <p className="font-suit font-bold text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
                  업무 마감 보고
                </p>
                <pre className="font-suit font-normal text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
                  업무 마감 시간이 되면 디자이너가 마감 인사와 함께
                  <br />
                  명일 진행할 업무에 대해 미리 정리해 드립니다.
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[641px] h-[188px] gap-6 pt-[40px] flex flex-col items-start justify-start">
          <div className="w-[422px] h-[100px] gap-2 flex flex-col justify-start items-start">
            <p className="font-suit font-medium text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#00000099]">
              시간제 근무인데 업무에 차질이 생기면 어떡하죠?
            </p>
            <h4 className="font-suit font-bold text-[40px] leading-[60px] tracking-[-0.02em] text-left text-[#000000E5]">
              하루 세번, 정확한 업무 보고
            </h4>
          </div>
          <pre className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#000000CC]">
            시간제 근무인 만큼 업무에 차질이 없도록{" "}
            <span className="font-suit font-bold text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#000000CC]">
              일 3회 업무 보고를 필수
            </span>
            로 하고 있습니다.
            <br />
            체계적인 업무 보고로 확실하게 관리되는 우리회사 전담 디자이너와 함께
            일해보세요.
          </pre>
        </div>
      </div>
    </section>
  );
}

export default HeroSection8;
