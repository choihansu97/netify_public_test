import {useRef, useState} from 'react';

function SectionText({className, children}) {
  return (
    <p className={`${className} font-suit text-center tracking-[-0.02em]`}>
      {children}
    </p>
  );
}

function Button({color, children}) {
  return (
    <button
      className={`w-full h-[50px] py-3 px-6 rounded-[8px] flex justify-center items-center whitespace-nowrap ${color}`}>
      <SectionText
        className="font-bold text-[16px] leading-[26px] tracking-[0.45px]">
        {children}
      </SectionText>
    </button>
  );
}

function ImageBlock({src, alt, description}) {
  return (
    <div
      className="w-[288px] pt-4 pb-[21px] px-4 rounded-4 flex-none flex flex-col items-center justify-start bg-[#FFFFFF] shadow-[4px_4px_15px_0px_rgba(0,0,0,0.05)] rounded-[16px]">
      <img src={src} alt={alt} className="w-[253px] h-[156px]"/>
      <SectionText className="font-normal text-[20px] leading-[32px] mt-[15px]">
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
      src: "/img/list/section14-list-img1.png",
      alt: "section14-list-img1",
      description: "상세페이지 및 콘텐츠"
    },
    {
      src: "/img/list/section14-list-img2.png",
      alt: "section14-list-img2",
      description: "광고 소재 제작"
    },
    {
      src: "/img/list/section14-list-img3.png",
      alt: "section14-list-img3",
      description: "UI·UX 설계 및 디자인"
    },
    {
      src: "/img/list/section14-list-img4.png",
      alt: "section14-list-img4",
      description: "브랜딩·로고"
    },
    {
      src: "/img/list/section14-list-img5.png",
      alt: "section14-list-img5",
      description: "편집 및 인쇄물"
    },
    {
      src: "/img/list/section14-list-img6.png",
      alt: "section14-list-img6",
      description: "패키지 디자인"
    },
    {
      src: "/img/list/section14-list-img7.png",
      alt: "section14-list-img7",
      description: "카페24·아임웹 관리"
    },
    {
      src: "/img/list/section14-list-img8.png",
      alt: "section14-list-img8",
      description: "영상 및 썸네일 제작"
    },
    {
      src: "/img/list/section14-list-img9.png",
      alt: "section14-list-img9",
      description: "PPT 및 제안서"
    },
    {
      src: "/img/list/section14-list-img10.png",
      alt: "section14-list-img10",
      description: "일러스트"
    },
    {
      src: "/img/list/section14-list-img11.png",
      alt: "section14-list-img11",
      description: "행사 등 키비주얼"
    },
    {
      src: "/img/list/section14-list-img12.png",
      alt: "section14-list-img12",
      description: "인테리어·제품 디자인"
    }
  ];

  return (
    <section className="w-full h-full bg-[#0000000A]">
      <div
        className="w-full mx-auto flex flex-col justify-start items-center px-4 py-12">
        <div className="w-full gap-2 flex flex-col justify-start items-center">
          <div className="gap-1">
            <SectionText
              className="font-medium text-[14px] leading-[22.4px] text-[#00000099]">
              검증된 디자이너 구독 서비스
            </SectionText>
            <h4
              className="font-suit font-bold text-[28px] leading-[42px] text-center text-[#000000E5]">
              필요한 업무는 무엇이든<br/>가능합니다
            </h4>
          </div>
          <pre
            className="font-suit font-normal text-[16px] leading-[25.6px] text-center text-[#000000CC]">
            희망 업종과 업무 스택이 무엇이든, 디하만의 노하우로
            <br/>
            99.999% 적합한 디자이너를 배정해 드립니다.
          </pre>

          <div
            className="mt-4 flex-col w-[206] gap-2 flex justify-between items-center">
            <Button color="bg-[#795BF9] text-[#FFFFFF]">
              3일 무료! 디자이너 구독
            </Button>

            <Button color="bg-[#795BF929] text-[#795BF9]">
              24시 즉시 상담
            </Button>
          </div>

          <div
            className="w-full mx-auto flex flex-col justify-start items-center mt-8">
            <div
              ref={containerRef}
              className="w-full gap-2 flex justify-start items-center overflow-x-scroll scrollbar-hide cursor-pointer"
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
            >
              {imageBlocks.map(block => (
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
