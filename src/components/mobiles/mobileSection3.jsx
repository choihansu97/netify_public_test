import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function MobileSection3() {
  const steps = [
    {
      title: "1단계",
      description: "1:10 경쟁률 포트폴리오 심사",
      width: "w-[220px]",
      height: "h-[46px]",
    },
    {
      title: "2단계",
      description: "디자이너 면접",
      width: "w-[175px]",
      height: "h-[46px]",
    },
    {
      title: "3단계",
      description: "디자인 팀장 검수",
      width: "w-[129px]",
      height: "h-[46px]",
    },
    {
      title: "4단계",
      description: "최종 교육",
      width: "w-[86px]",
      height: "h-[46px]",
    },
  ];

  const details = [
    {
      title: "희망 업무 스택 99.999% 일치",
      description: "희망하는 업무 스택에 완벽히 일치하는\n디자이너를 배정합니다",
    },
    {
      title: "엄격한 심사로 검증된 퀄리티",
      description:
        "총 4단계를 거친 디자이너 합격 절차로\n확실한 퀄리티를 보장합니다",
    },
    {
      title: "직원보다 더 성실한 근무 태도",
      description:
        "디하의 관리 시스템으로 직원보다 성실한\n근무 태도로 일합니다",
    },
    {
      title: "우리 기업만 담당하는 전담 디자이너",
      description:
        "계약된 시간 동안에는 한 기업의 업무만\n전담하여 100% 집중합니다",
    },
  ];

  return (
    <section className="w-full bg-[#131733]">
      <div className="mx-auto flex flex-col px-4 py-12">
        <div className="flex justify-center items-center">
          <div className="gap-y-2">
            <p
              className="font-suit text-[28px] font-bold leading-[37.7px] tracking-[-0.02em] text-[#FFFFFF]">
              그래서 디하가 있습니다
            </p>
            <pre
              className="font-suit text-[16px] leading-[24px] tracking-[-0.02em] text-[#FFFFFF]">
              디자이너, 여기저기서 힘들게 구하지 마세요!
              <br/>
              디자이너하이어가 쉽게 해결해 드릴게요.
            </pre>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="w-full mt-6"
          autoplay={{delay: 2000}}
          pagination={{clickable: true}}
          modules={[Autoplay, Pagination]}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[500px] mx-auto">
                <div
                  className="h-[300px] py-7 rounded-[20px] shadow-section3-box-shadow section3-box">
                  {steps.slice(0, index + 1).map((s, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundImage: `url(/img/box/section3-box${idx
                        + 1}.png)`,
                      }}
                      className={`${s.width} ${s.height} flex flex-col justify-center items-center mx-auto mt-2 bg-cover`}
                    >
                      <p
                        className="text-[#FFFFFF] font-suit font-semibold leading-[17.47px] text-[12px]">
                        {s.title}
                      </p>
                      <p
                        className="text-[#FFFFFF] font-suit text-[12px] font-normal leading-[17.47px]">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="w-full gap-2 flex flex-col justify-start items-start mt-6 pb-10">
                  <div className="w-full gap-4">
                    <div className="w-full gap-1">
                      <p
                        className="font-suit font-bold text-[20px] leading-[30px] text-[#FFFFFF] text-center">
                        {details[index].title}
                      </p>
                      <pre
                        className="font-suit font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#FFFFFF] text-center">
                        {details[index].description}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MobileSection3;
