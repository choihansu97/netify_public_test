import { useScroll } from '../../contexts/ScrollContext';

function MobileSection6() {
  const { scrollToSection7 } = useScroll();

  return (
    <section className="h-full w-full bg-[#131733]">
      <div className="mx-auto flex flex-col items-center justify-start gap-12 pt-12">
        <div className="flex h-[166px] w-[403px] flex-col items-center justify-start gap-2">
          <p className="text-left font-suit text-[16px] font-medium leading-[25.6px] tracking-[-0.02em] text-[#FFFFFFE5]">
            오직 디하에서만 가능해요
          </p>
          <div className="flex w-[403px] flex-col items-center justify-start">
            <h4 className="text-center font-suit text-[24px] font-bold leading-[32px] tracking-[-0.02em] text-[#FFFFFF]">
              200% 효율과 생산성을 위한
            </h4>
            <h3 className="text-center font-suit text-[32px] font-bold leading-[48px] tracking-[-0.02em] text-[#FFFFFF]">
              디자이너 관리 시스템
            </h3>
          </div>
        </div>
        <div className="flex h-full w-[403px] flex-col items-center justify-start">
          <p
            className="trackin-[-0.02em] mb-2 animate-bounce text-center font-suit text-[16px] font-medium leading-[25.6px] text-[#FFFFFFE5]"
            onClick={scrollToSection7}
          >
            스크롤해서 보기
          </p>

          <div className="relative mt-4 h-3 w-3">
            <div className="absolute left-0 top-0 h-full w-full animate-blink rounded-full bg-white shadow-blur"></div>
            <div className="relative h-3 w-3 rounded-full bg-white"></div>
          </div>
          <div className="h-14 w-px bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default MobileSection6;
