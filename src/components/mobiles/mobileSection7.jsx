import {useScroll} from '../../contexts/ScrollContext';

function MobileSection7() {
  const {section7Ref} = useScroll();

  return (
    <section ref={section7Ref}  className="w-full h-full bg-white">
      <div
        className="flex flex-col gap-8 justify-between items-center px-4 py-12">
        <div
          className="w-full gap-6 flex flex-col justify-start items-start">
          <div className="flex flex-col">
            <p
              className="text-left font-suit font-semibold text-[14px] leading-[32px] tracking-[-0.02em] text-[#00000099]">
              비대면 근무인데 소통이 불편하지 않을까요?
            </p>
            <h3
              className="text-left font-suit font-bold text-[28px] leading-[42px] tracking-[-0.02em] text-[#000000E5]">
              옆자리 앉은 직원과 다름없는
              <br/>
              실시간 커뮤니케이션
            </h3>
          </div>
          <pre
            className="font-suit font-normal text-[16px] leading-[25.6px] tracking-[-0.02em] text-left text-[#000000CC]">
            디하의 모든 디자이너들은 업무 시간 내{" "}
            <span
              className="font-suit font-bold text-[16px] leading-[25.6px] tracking-[-0.02em] text-left">
              실시간 소통을 원<br/>칙
            </span>
            으로 하고 있습니다.

            디자인 시안에 대한{" "}
            <span
              className="font-suit font-bold text-[16px] leading-[25.6px] tracking-[-0.02em] text-left">
              즉각적인 수정<br/>요청과 피드백
            </span>
            을 받아보세요.
          </pre>
        </div>
        <div
          className="w-full gap-[20px] flex justify-between items-center overflow-hidden">
          <img
            src="/img/box/section7-box1.png"
            alt="section7-box1"
            className="w-full h-full"
            loading={"lazy"}
          />
          <img
            src="/img/box/section7-box2.png"
            alt="section7-box2"
            className="w-full h-full"
            loading={"lazy"}
          />
        </div>
      </div>
    </section>
  );
}

export default MobileSection7;
