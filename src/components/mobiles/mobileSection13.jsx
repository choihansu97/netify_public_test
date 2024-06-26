import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

function MobileSection13() {
  const logos = [
    { src: "/img/logo/brand-logo10.png", alt: "brand-logo1", width: 96 },
    { src: "/img/logo/brand-logo3.png", alt: "brand-logo3", width: 74 },
    { src: "/img/logo/brand-logo7.png", alt: "brand-logo7", width: 56 },
    { src: "/img/logo/brand-logo5.png", alt: "brand-logo5", width: 96 },
    { src: "/img/logo/brand-logo6.png", alt: "brand-logo6", width: 88 },
    { src: "/img/logo/brand-logo14.png", alt: "brand-logo14", width: 90 },
  ];

  const logos2 = [
    { src: "/img/logo/brand-logo9.png", alt: "brand-logo9", width: 96 },
    { src: "/img/logo/brand-logo10.png", alt: "brand-logo10", width: 96 },
    { src: "/img/logo/brand-logo4.png", alt: "brand-logo4", width: 96 },
    { src: "/img/logo/brand-logo13.png", alt: "brand-logo13", width: 86 },
    { src: "/img/logo/brand-logo20.png", alt: "brand-logo20", width: 76 },
    { src: "/img/logo/brand-logo12.png", alt: "brand-logo12", width: 96 },
  ];

  const logos3 = [
    { src: "/img/logo/brand-logo19.png", alt: "brand-logo19", width: 86 },
    { src: "/img/logo/brand-logo18.png", alt: "brand-logo18", width: 96 },
    { src: "/img/logo/brand-logo8.png", alt: "brand-logo08", width: 48 },
    { src: "/img/logo/brand-logo16.png", alt: "brand-logo16", width: 84 },
    { src: "/img/logo/brand-logo1.png", alt: "brand-logo1", width: 96 },
    { src: "/img/logo/brand-logo15.png", alt: "brand-logo15", width: 76 },
    { src: "/img/logo/brand-logo11.png", alt: "brand-logo11", width: 96 },
  ];

  const testimonials = [
    {
      title: "피드백도 빠르고 4시간 플랜인데\n체감상 풀타임 직원 같았어요",
      company: "교육 콘텐츠 기업 (기업 요청 익명 처리)",
      content: (
        <>
          담당해주시는 디자이너님이 손이 빠르시고 피드백도 빠르게 반영해주셔서{" "}
          <span className="font-bold">
            4시간 플랜인데도 체감상 풀타임으로 일해주시는 느낌
          </span>{" "}
          을 받았습니다. 따로 업무를 체크하고 있지 않아도 고정 업무 시간대에
          들어오셔서, 한치의 오차도,{" "}
          <span className="font-bold">
            낭비하는 시간이 없게 일사천리로 진행
          </span>
          해주셨어요.{" "}
          <span className="font-bold">
            도대체 어떻게 디자이너 풀을 관리하시길래 이렇게 잘해주시는 건지...
          </span>
        </>
      ),
    },
    {
      title:
        "언제든 디자이너를 교체 가능해 고용에 대한 리스크를 헷지할 수 있어 좋아요",
      company: "디더블유씨",
      content: (
        <>
          디자이너님을 채용할 때 가장 어려운 점은 직접 일을 해보지 않으면
          모른다는 점이었어요. 채용 시에 디자이너님이 저희와 안맞는 경우가
          있어도, 인원을 정리하기가 어려울 떄가 있는데{" "}
          <span className="font-bold">
            디자이너하이어 구독은 디자이너를 필요할 때 언제든 교체 가능하다는
            옵션
          </span>{" "}
          이 있어서 이런{" "}
          <span className=" ```javascript
            font-bold">리스크 헷지가 가능해서 좋다</span>고 생각합니다.
        </>
      ),
    },
    {
      title:
        "일일히 오더하지 않아도 취향을\n파악하고 계시고 작업도 빨라서 좋아요",
      company: "부카즈",
      content: (
        <>
          저희는 상세페이지를 많이 필요로 하는 기업이에요. 인테리어 소품이나
          오브제 등을 판매하다보니 감성적인 상세페이지가 주로 필요한데, 한번
          배정된 디자이너님과 오래 작업을 하다보니{" "}
          <span className="font-bold">
            특별히 하나하나 오더드리지 않아도 저희 취향을 파악
          </span>
          하고 계시고, 작업 속도도 빨라서 좋아요.{" "}
          <span className="font-bold">
            수정하는 시간도 거의 없다시피하니 속도도 정말 빠르고 단가를 고려해도
            효율이 좋다고 생각
          </span>
          합니다.
        </>
      ),
    },
    {
      title: "인건비를 줄일 수 있어서\n정말 좋았어요",
      company: "디자이너하이어",
      content:
        "업무 커뮤니케이션을 원활하게 하고 서로 의견을 교환하며 함께 서비스를 성장시킬 멋진 디자이너를 배정해 드려요업무 커뮤니케이션을 원활하게 하고 서로 의견을 교환하며 함께 서비스를 성장시킬 멋진 디자이너를 배정해 드려요업무 커뮤니케이션을 원활하게 하고 서로 의견을 교환하며 함께 서비스를 성장시킬 멋진.",
    },
  ];

  return (
    <section className="w-full h-full bg-[#131733]">
      <div className="mx-auto flex flex-col justify-start items-center px-4 py-12 relative">
        <div className="gap-1">
          <p className="font-suit font-semibold text-[14px] leading-[22.4px] tracking-[-0.02em] text-center text-[#FFFFFFE5]">
            검증된 디자이너 구독 서비스
          </p>
          <h4 className="font-suit font-bold text-[28px] leading-[42px] tracking-[-0.02em] text-center text-[#FFFFFFE5]">
            스타트업부터 중소·대기업까지
            <br />
            디하와 함께하고 있습니다
          </h4>
        </div>
        <div className="mt-[30px] overflow-hidden max-w-[500px] w-full">
          <Swiper
            key="logos-swiper"
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} style={{ width: `${logo.width}px` }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  style={{ width: `${logo.width}px` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-[12px] overflow-hidden max-w-[500px] w-full">
          <Swiper
            key="logos2-swiper"
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {logos2.map((logo, index) => (
              <SwiperSlide key={index} style={{ width: `${logo.width}px` }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  style={{ width: `${logo.width}px` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-[12px] overflow-hidden max-w-[500px] w-full">
          <Swiper
            key="logos3-swiper"
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {logos3.map((logo, index) => (
              <SwiperSlide key={index} style={{ width: `${logo.width}px` }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                className="object-contain"
                style={{ width: `${logo.width}px` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[64px] overflow-hidden w-full">
          <Swiper
            key="testimonials-swiper"
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="">
                <div className="relative group w-[302px]">
                  <div className="absolute inset-0 bg-transparent group-hover:bg-section13-gradient-border rounded-[20px] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="py-8 px-4 absolute inset-[1px] bg-[#131733] rounded-[19px]"></div>
                  <div className="py-8 px-4 bg-[#FFFFFF33] rounded-[20px] relative z-10">
                    <div className="w-[270px] h-[85px] gap-1">
                      <h5 className="font-suit font-bold text-[20px] leading-[30px] tracking-[-0.02em] text-left text-[#FFFFFF] whitespace-pre-line">
                        {testimonial.title}
                      </h5>
                      <p className="font-suit font-normal text-[14px] leading-[21px] tracking-[-0.02em] text-left text-[#FFFFFFCC]">
                        {testimonial.company}
                      </p>
                    </div>
                    <p className="mt-[33px] text-wrap font-suit font-normal text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#FFFFFFE5]">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default MobileSection13;