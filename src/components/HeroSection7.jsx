import { useScroll } from '../contexts/ScrollContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function HeroSection7() {
  const { section7Ref } = useScroll();

  const images = [
    { src: '/img/box/section7-box1.png', alt: 'section7-box1' },
    { src: '/img/box/section7-box2.png', alt: 'section7-box2' },
    { src: '/img/box/section7-box3.png', alt: 'section7-box3' },
  ];

  return (
    <section ref={section7Ref} className="h-full w-full bg-white">
      <div className="mx-auto flex h-[574px] w-[1440px] items-center justify-between px-[120px] py-[120px]">
        <div className="flex h-[248px] w-[594px] flex-col items-start justify-start gap-6">
          <div className="flex h-[160px] w-[436px] flex-col gap-2">
            <p className="text-left font-suit text-[20px] font-semibold leading-[32px] tracking-[-0.02em] text-[#00000099]">
              비대면 근무인데 소통이 불편하지 않을까요?
            </p>
            <h3 className="text-left font-suit text-[40px] font-bold leading-[60px] tracking-[-0.02em] text-[#000000E5]">
              옆자리 앉은 직원과 다름없는
              <br />
              실시간 커뮤니케이션
            </h3>
          </div>
          <pre className="text-left font-suit text-[20px] font-normal leading-[32px] tracking-[-0.02em] text-[#000000CC]">
            디하의 모든 디자이너들은 업무 시간 내{' '}
            <span className="text-left font-suit text-[20px] font-bold leading-[32px] tracking-[-0.02em]">
              실시간 소통을 원칙
            </span>
            으로 하고 있습니다.
            <br />
            디자인 시안에 대한{' '}
            <span className="text-left font-suit text-[20px] font-bold leading-[32px] tracking-[-0.02em]">
              즉각적인 수정 요청과 피드백
            </span>
            을 받아보세요.
          </pre>
        </div>
        <div className="h-[334px] w-[480px] overflow-hidden">
          <Swiper
            key="images-swiper"
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="w-[480px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="w-[327px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[334px] w-[327px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HeroSection7;
