import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'swiper/css';
import 'swiper/css/autoplay';

function HeroSection13() {
  const logos = [
    { src: '/img/logo/brand-logo1.png', alt: 'brand-logo1', width: 180 },
    { src: '/img/logo/brand-logo2.png', alt: 'brand-logo2', width: 153 },
    { src: '/img/logo/brand-logo3.png', alt: 'brand-logo3', width: 138 },
    { src: '/img/logo/brand-logo4.png', alt: 'brand-logo4', width: 180 },
    { src: '/img/logo/brand-logo5.png', alt: 'brand-logo5', width: 180 },
    { src: '/img/logo/brand-logo6.png', alt: 'brand-logo6', width: 165 },
    { src: '/img/logo/brand-logo7.png', alt: 'brand-logo7', width: 105 },
    { src: '/img/logo/brand-logo8.png', alt: 'brand-logo8', width: 90 },
    { src: '/img/logo/brand-logo9.png', alt: 'brand-logo9', width: 180 },
    { src: '/img/logo/brand-logo10.png', alt: 'brand-logo10', width: 180 },
  ];

  const logos2 = [
    { src: '/img/logo/brand-logo11.png', alt: 'brand-logo11', width: 180 },
    { src: '/img/logo/brand-logo12.png', alt: 'brand-logo12', width: 180 },
    { src: '/img/logo/brand-logo13.png', alt: 'brand-logo13', width: 163 },
    { src: '/img/logo/brand-logo14.png', alt: 'brand-logo14', width: 170 },
    { src: '/img/logo/brand-logo15.png', alt: 'brand-logo15', width: 143 },
    { src: '/img/logo/brand-logo16.png', alt: 'brand-logo16', width: 157 },
    { src: '/img/logo/brand-logo17.png', alt: 'brand-logo17', width: 180 },
    { src: '/img/logo/brand-logo18.png', alt: 'brand-logo18', width: 180 },
    { src: '/img/logo/brand-logo19.png', alt: 'brand-logo19', width: 163 },
    { src: '/img/logo/brand-logo20.png', alt: 'brand-logo20', width: 180 },
  ];

  const testimonials = [
    {
      title: '피드백도 빠르고 4시간 플랜인데\n체감상 풀타임 직원 같았어요',
      company: '교육 콘텐츠 기업 (기업 요청 익명 처리)',
      content: (
        <>
          담당해주시는 디자이너님이 손이 빠르시고 피드백도
          <br />
          빠르게 반영해주셔서{' '}
          <span className="font-bold">
            4시간 플랜인데도 체감상 풀타임
            <br />
            으로 일해주시는 느낌
          </span>
          을 받았습니다. 따로 업무를 체크
          <br />
          하고 있지 않아도 고정 업무 시간대에 들어오셔서,
          <br />
          한치의 오차도,{' '}
          <span className="font-bold">
            낭비하는 시간이 없게 일사천리로
            <br />
            진행
          </span>
          해주셨어요.{' '}
          <span className="font-bold">
            도대체 어떻게 디자이너 풀을
            <br />
            관리하시길래 이렇게 잘해주시는 건지...
          </span>
        </>
      ),
    },
    {
      title:
        '언제든 디자이너를 교체 가능해 고용에\n대한 리스크를 헷지할 수 있어 좋아요',
      company: '디더블유씨',
      content: (
        <>
          디자이너님을 채용할 때 가장 어려운 점은 직접 일을
          <br /> 해보지 않으면 모른다는 점이었어요. 채용 시에
          <br /> 디자이너님이 저희와 안맞는 경우가 있어도, 인원을
          <br /> 정리하기가 어려울 떄가 있는데{' '}
          <span className="font-bold">
            디자이너하이어 구독은
            <br /> 디자이너를 필요할 때 언제든 교체 가능하다는 옵션
          </span>
          이
          <br /> 있어 이런{' '}
          <span className="font-bold">리스크 헷지가 가능해서 좋다</span>고
          생각합니다.
        </>
      ),
    },
    {
      title:
        '일일히 오더하지 않아도 취향을\n파악하고 계시고 작업도 빨라서 좋아요',
      company: '부카즈',
      content: (
        <>
          저희는 상세페이지를 많이 필요로 하는 기업이에요.
          <br /> 인테리어 소품이나 오브제 등을 판매하다보니 감성적인
          <br />
          상세페이지가 주로 필요한데, 한번 배정된 디자이너님과
          <br /> 오래 작업을 하다보니{' '}
          <span className="font-bold">
            하나하나 오더드리지 않아도 저희
            <br /> 취향을 파악
          </span>
          하고 계시고, 작업 속도도 빨라서 좋아요.
          <br />{' '}
          <span className="font-bold">
            수정하는 시간도 거의 없다시피하니 속도도 정말 빠르고
            <br /> 단가를 고려해도 효율이 좋다
          </span>
          고 생각합니다.
        </>
      ),
    },
    {
      title: '인건비를 줄일 수 있어서\n정말 좋았어요',
      company: '디자이너하이어',
      content:
        '업무 커뮤니케이션을 원활하게 하고 서로 의견을 교환하며 함께 서비스를 성장시킬 멋진 디자이너를 배정해 드려요업무 커뮤니케이션을 원활하게 하고 서로 의견을 교환하며 함께 서비스를 성장시킬 멋진 디자이너를 배정해 드려요업무 커뮤니케이션을 원활하게 하고 서로 의견을 교환하며 함께 서비스를 성장시킬 멋진.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    variableWidth: true,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    adaptiveHeight: true,
    centerMode: false,
    variableWidth: true,
    arrows: false,
  };

  return (
    <section className="h-full w-full bg-[#131733]">
      <div className="relative mx-auto flex h-[1017px] w-[1440px] flex-col items-center justify-start py-[96px]">
        <div className="h-[156px] w-[473px] gap-1">
          <p className="text-center font-suit text-[20px] font-semibold leading-[32px] tracking-[-0.02em] text-[#FFFFFFE5]">
            검증된 디자이너 구독 서비스
          </p>
          <h4 className="text-center font-suit text-[40px] font-bold leading-[60px] tracking-[-0.02em] text-[#FFFFFFE5]">
            스타트업부터 중소·대기업까지
            <br />
            디하와 함께하고 있습니다
          </h4>
        </div>

        <div className="mt-[10px] w-[1440px] overflow-hidden">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} style={{ width: `${logo.width}px` }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[60px] object-contain px-[12px]"
                  style={{ width: `${logo.width}px` }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-[20px] w-[1440px] overflow-hidden">
          <Slider {...settings}>
            {logos2.map((logo, index) => (
              <div key={index} style={{ width: `${logo.width}px` }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[60px] object-contain px-[12px]"
                  style={{ width: `${logo.width}px` }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-[64px] w-[1440px] overflow-hidden">
          <Slider {...settings2} className="ml-[120px] w-[1320px]">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[387px] pl-[20px]">
                <div className="group relative">
                  <div className="absolute inset-0 rounded-[20px] bg-transparent opacity-0 transition-all duration-300 group-hover:bg-section13-gradient-border group-hover:opacity-100"></div>
                  <div className="absolute inset-[1px] rounded-[19px] bg-[#131733]"></div>
                  <div className="relative z-10 h-[380px] w-[387px] rounded-[20px] bg-[#FFFFFF33] px-[24px] pb-[32px] pt-[48px]">
                    <div className="h-[85px] w-[300px] gap-1">
                      <h5 className="whitespace-pre-line text-left font-suit text-[20px] font-bold leading-[30px] tracking-[-0.02em] text-[#FFFFFF]">
                        {testimonial.title}
                      </h5>
                      <p className="text-left font-suit text-[14px] font-normal leading-[21px] tracking-[-0.02em] text-[#FFFFFFCC]">
                        {testimonial.company}
                      </p>
                    </div>
                    <p className="mt-[33px] text-wrap text-left font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#FFFFFFE5]">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default HeroSection13;
