import {useScroll} from '../contexts/ScrollContext';

function HeroSection7() {
  const {section7Ref} = useScroll();

  return (
    <section ref={section7Ref} className="w-full h-full bg-white">
      <div
        className="h-[574px] w-[1440px] mx-auto flex justify-between items-center px-[120px] py-[120px]">
        <div
          className="w-[594px] h-[248px] gap-6 flex flex-col justify-start items-start">
          <div className="w-[436px] h-[160px] gap-2 flex flex-col">
            <p
              className="text-left font-suit font-semibold text-[20px] leading-[32px] tracking-[-0.02em] text-[#00000099]">
              비대면 근무인데 소통이 불편하지 않을까요?
            </p>
            <h3
              className="text-left font-suit font-bold text-[40px] leading-[60px] tracking-[-0.02em] text-[#000000E5]">
              옆자리 앉은 직원과 다름없는
              <br/>
              실시간 커뮤니케이션
            </h3>
          </div>
          <pre
            className="font-suit font-normal text-[20px] leading-[32px] tracking-[-0.02em] text-left text-[#000000CC]">
            디하의 모든 디자이너들은 업무 시간 내{" "}
            <span
              className="font-suit font-bold text-[20px] leading-[32px] tracking-[-0.02em] text-left">
              실시간 소통을 원칙
            </span>
            으로 하고 있습니다.
            <br/>
            디자인 시안에 대한{" "}
            <span
              className="font-suit font-bold text-[20px] leading-[32px] tracking-[-0.02em] text-left">
              즉각적인 수정 요청과 피드백
            </span>
            을 받아보세요.
          </pre>
        </div>
        <div
          className="w-[480px] h-[334px] gap-[20px] flex justify-between items-center">
          <img
            src="/img/box/section7-box1.png"
            alt="section7-box1"
            className="w-full h-full"
          />
          <img
            src="/img/box/section7-box2.png"
            alt="section7-box2"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection7;
