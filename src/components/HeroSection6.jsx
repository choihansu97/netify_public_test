import { useScroll } from '../contexts/ScrollContext';

function HeroSection6() {
  const { scrollToSection7 } = useScroll();

  return (
    <section className="w-full h-full bg-[#131733]">
      <div className="h-[469px] w-[1440px] mx-auto flex flex-col justify-start items-center px-[120px] pt-[96px]">
        <div className="w-[403px] h-[166px] gap-2 flex flex-col justify-start items-center">
          <p className="font-suit font-medium text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#FFFFFFE5]">
            오직 디하에서만 가능해요
          </p>
          <div className="w-[403px] h-[126px] flex flex-col justify-start items-center">
            <h4 className="font-suit font-bold text-[36px] leading-[54px] tracking-[-0.02em] text-center text-[#FFFFFF]">
              200% 효율과 생산성을 위한
            </h4>
            <h3 className="font-suit font-bold text-[48px] leading-[72px] tracking-[-0.02em] text-center text-[#FFFFFF]">
              디자이너 관리 시스템
            </h3>
          </div>
        </div>
        <div
          className="w-[403px] h-full flex flex-col justify-start items-center mt-[90px]">
          <p
            className="font-suit font-medium text-[16px] leading-[25.6px] trackin-[-0.02em] text-center text-[#FFFFFFE5] cursor-pointer"
            onClick={scrollToSection7}
          >
            스크롤해서 보기
          </p>

          <img
            src="/img/box/section6-rounded.png"
            alt="section6-rounded"
            className="cursor-pointer"
            onClick={scrollToSection7}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection6;
