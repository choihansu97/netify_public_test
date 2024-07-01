import { useState } from 'react';
import MobileForm from './mobileForm';

function MobileSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="h-full w-full bg-hero-section-gradient pb-12 pt-24">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-[48px] md:max-h-[640px] md:min-h-[640px] md:min-w-[375px] md:max-w-[500px]">
        <article className="flex h-full w-full flex-col items-center justify-center gap-y-2 md:gap-1">
          <h1 className="text-center font-suit text-[32px] font-normal leading-[1.35] tracking-[-0.02em] text-white text-opacity-90 md:text-[24px] md:leading-[1.35]">
            좋은 디자이너를 찾아
            <br />
            <span className="text-center font-suit text-[32px] font-extrabold leading-[1.35] tracking-[-0.02em] text-white md:text-[24px] md:leading-[1.35]">
              헤매고 계셨다면
            </span>
          </h1>

          <p className="flex flex-col font-suit text-[16px] font-normal leading-[1.6] tracking-[-0.02em] text-white text-opacity-90 md:text-[14px] md:leading-[1.6]">
            우리 기업에 딱! 맞는 실력있고
            <span className="font-suit text-[16px] font-bold leading-[32px] tracking-[-0.02em] text-white text-opacity-90 md:text-[14px] md:leading-[1.6]">
              성실한 전담 디자이너를 직원처럼
            </span>
            쓸 수 있는 방법을 알려드릴게요
          </p>
        </article>
        <article className="flex h-full w-full flex-col items-center justify-center gap-2 md:gap-1">
          <button className="h-[50px] w-[206px] rounded-lg bg-white px-6 py-3">
            <p className="whitespace-nowrap bg-hero-button-gradient bg-clip-text text-left font-suit text-[16px] font-bold leading-[26px] text-transparent">
              3일 무료! 디자이너 구독
            </p>
          </button>
          <button className="h-[50px] w-[206px] rounded-lg bg-white bg-opacity-[0.16] px-9 py-3 md:px-3 md:py-1.5">
            <p
              className="whitespace-nowrap font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-white"
              onClick={openModal}
            >
              24시 즉시 상담 신청
            </p>
          </button>
        </article>
      </div>
      <MobileForm isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default MobileSection;
