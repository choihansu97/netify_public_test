import { useRef, useState } from 'react';

function SectionText({ className, children }) {
  return (
    <p className={`${className} text-center font-suit tracking-[-0.02em]`}>
      {children}
    </p>
  );
}

function Button({ color, children }) {
  return (
    <button
      className={`flex h-[50px] w-full items-center justify-center whitespace-nowrap rounded-[8px] px-6 py-3 ${color}`}
    >
      <SectionText className="text-[16px] font-bold leading-[26px] tracking-[0.45px]">
        {children}
      </SectionText>
    </button>
  );
}

function ImageBlock({ src, alt, description }) {
  return (
    <div className="rounded-4 flex w-[288px] flex-none flex-col items-center justify-start rounded-[16px] bg-[#FFFFFF] px-4 pb-[21px] pt-4 shadow-[4px_4px_15px_0px_rgba(0,0,0,0.05)]">
      <img src={src} alt={alt} className="h-[156px] w-[253px]" />
      <SectionText className="mt-[15px] text-[20px] font-normal leading-[32px]">
        {description}
      </SectionText>
    </div>
  );
}

function MobileSection14() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const imageBlocks = [
    {
      src: '/img/list/section14-list-img1.png',
      alt: 'section14-list-img1',
      description: '상세페이지 및 콘텐츠',
    },
    {
      src: '/img/list/section14-list-img2.png',
      alt: 'section14-list-img2',
      description: '광고 소재 제작',
    },
    {
      src: '/img/list/section14-list-img3.png',
      alt: 'section14-list-img3',
      description: 'UI·UX 설계 및 디자인',
    },
    {
      src: '/img/list/section14-list-img4.png',
      alt: 'section14-list-img4',
      description: '브랜딩·로고',
    },
    {
      src: '/img/list/section14-list-img5.png',
      alt: 'section14-list-img5',
      description: '편집 및 인쇄물',
    },
    {
      src: '/img/list/section14-list-img6.png',
      alt: 'section14-list-img6',
      description: '패키지 디자인',
    },
    {
      src: '/img/list/section14-list-img7.png',
      alt: 'section14-list-img7',
      description: '카페24·아임웹 관리',
    },
    {
      src: '/img/list/section14-list-img8.png',
      alt: 'section14-list-img8',
      description: '영상 및 썸네일 제작',
    },
    {
      src: '/img/list/section14-list-img9.png',
      alt: 'section14-list-img9',
      description: 'PPT 및 제안서',
    },
    {
      src: '/img/list/section14-list-img10.png',
      alt: 'section14-list-img10',
      description: '일러스트',
    },
    {
      src: '/img/list/section14-list-img11.png',
      alt: 'section14-list-img11',
      description: '행사 등 키비주얼',
    },
    {
      src: '/img/list/section14-list-img12.png',
      alt: 'section14-list-img12',
      description: '인테리어·제품 디자인',
    },
  ];

  return (
    <section className="h-full w-full bg-[#0000000A]">
      <div className="mx-auto flex w-full flex-col items-center justify-start px-4 py-12">
        <div className="flex w-full flex-col items-center justify-start gap-2">
          <div className="gap-1">
            <SectionText className="text-[14px] font-medium leading-[22.4px] text-[#00000099]">
              검증된 디자이너 구독 서비스
            </SectionText>
            <h4 className="text-center font-suit text-[28px] font-bold leading-[42px] text-[#000000E5]">
              필요한 업무는 무엇이든
              <br />
              가능합니다
            </h4>
          </div>
          <pre className="text-center font-suit text-[16px] font-normal leading-[25.6px] text-[#000000CC]">
            희망 업종과 업무 스택이 무엇이든, 디하만의 노하우로
            <br />
            99.999% 적합한 디자이너를 배정해 드립니다.
          </pre>

          <div className="mt-4 flex w-[206] flex-col items-center justify-between gap-2">
            <Button color="bg-[#795BF9] text-[#FFFFFF]">
              3일 무료! 디자이너 구독
            </Button>

            <Button color="bg-[#795BF929] text-[#795BF9]">
              24시 즉시 상담
            </Button>
          </div>

          <div className="mx-auto mt-8 flex w-full flex-col items-center justify-start">
            <div
              ref={containerRef}
              className="flex w-full cursor-pointer items-center justify-start gap-2 overflow-x-scroll scrollbar-hide"
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
            >
              {imageBlocks.map((block) => (
                <ImageBlock
                  key={block.alt}
                  src={block.src}
                  alt={block.alt}
                  description={block.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileSection14;
