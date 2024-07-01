import { useState, useEffect } from 'react';

function HeroSection3() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: '1단계',
      description: '1:10 경쟁률 포트폴리오 심사',
      width: 'w-[338.72px]',
      height: 'h-[92.77px]',
    },
    {
      title: '2단계',
      description: '디자이너 면접',
      width: 'w-[268.57px]',
      height: 'h-[93.16px]',
    },
    {
      title: '3단계',
      description: '디자인 팀장 검수',
      width: 'w-[200.07px]',
      height: 'h-[93.16px]',
    },
    {
      title: '4단계',
      description: '최종 교육',
      width: 'w-[130.93px]',
      height: 'h-[71.03px]',
    },
  ];

  const details = [
    {
      number: '01',
      title: '희망 업무 스택 99.999% 일치',
      description: '희망하는 업무 스택에 완벽히 일치하는 디자이너를 배정합니다',
    },
    {
      number: '02',
      title: '엄격한 심사로 검증된 퀄리티',
      description:
        '총 4단계를 거친 디자이너 합격 절차로 확실한 퀄리티를 보장합니다',
    },
    {
      number: '03',
      title: '직원보다 더 성실한 근무 태도',
      description:
        '디하의 관리 시스템으로 직원보다 성실한 근무 태도로 일합니다',
    },
    {
      number: '04',
      title: '우리 기업만 담당하는 전담 디자이너',
      description:
        '계약된 시간 동안에는 한 기업의 업무만 전담하여 100% 집중합니다',
    },
  ];

  return (
    <section className="h-full w-full bg-[#131733]">
      <div className="mx-auto flex h-[870px] w-[1440px] flex-col px-[120px] py-[96px]">
        <div className="flex items-center justify-center">
          <div className="h-[130px] w-[360px]">
            <p className="font-suit text-[40px] font-bold leading-[54px] tracking-[-0.02em] text-[#FFFFFF]">
              그래서 디하가 있습니다
            </p>
            <pre className="mt-4 font-suit text-xl font-normal leading-[30px] tracking-[-0.02em] text-[#FFFFFF]">
              디자이너, 여기저기서 힘들게 구하지 마세요!
              <br />
              디자이너하이어가 쉽게 해결해 드릴게요.
            </pre>
          </div>
        </div>
        <div className="mt-[56px] flex items-center justify-between">
          <div className="section3-box flex h-[500px] w-[640px] flex-col items-center justify-center gap-y-2 rounded-[20px] bg-[#1F2340] px-[150.64px] py-[63.51px] shadow-section3-box-shadow">
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(/img/box/section3-box${index + 1}.png)`,
                  opacity: activeStep > index ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
                className={`${step.width} ${step.height} flex flex-col items-center justify-center`}
              >
                <p className="font-suit text-[14px] font-semibold leading-[17.47px] text-[#FFFFFF]">
                  {step.title}
                </p>
                <p className="font-suit text-[14px] font-normal leading-[17.47px] text-[#FFFFFF]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex h-[460px] w-[480px] flex-col items-start justify-start gap-2">
            {details.map((detail, index) => (
              <div
                key={index}
                className="h-[109px] w-[480px] gap-4 border-b-[1px] border-solid border-[#D9D9D9]"
              >
                <div className="h-[92px] w-[376px] gap-1">
                  <p
                    className="text-left font-suit text-[16px] font-normal leading-[24px] tracking-[-0.02em] text-[#FFFFFF]"
                    style={{
                      opacity: activeStep > index ? 1 : 0.1,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  >
                    {detail.number}
                  </p>
                  <p
                    className="text-left font-suit text-[20px] font-bold leading-[30px] text-[#FFFFFF]"
                    style={{
                      opacity: activeStep > index ? 1 : 0.1,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  >
                    {detail.title}
                  </p>
                  <pre
                    className="text-left font-suit text-[16px] font-normal leading-[24px] tracking-[-0.02em] text-[#FFFFFF]"
                    style={{
                      opacity: activeStep > index ? 1 : 0.1,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  >
                    {detail.description}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection3;
