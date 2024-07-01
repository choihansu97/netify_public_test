import { useRef, useState } from 'react';

function MobileSection2() {
  const slides = [
    {
      id: 1,
      title: '디자이너를 채용 사례',
      case: '# CASE 01',
      img: '/img/logo/section2-logo1.png',
      headline: '이건 이래서 안되고 저건 저래서 안된다는데....',
      description:
        '디자이너 채용하면 다 될줄 알았는데, 디자이너마다 전문 업무 분야가 따로 있대요. 이건 이래서, 저건 저래서 안된다고 하시는데 어떡하죠?',
    },
    {
      id: 2,
      title: '프리랜서 플랫폼 이용 사례',
      case: '# CASE 02',
      img: '/img/logo/section2-logo2.png',
      headline: '바로바로 수정하고 싶은데, 소통이 힘들어요...',
      description:
        '오늘 내로 수정본을 받을 순 없을까요? 급하게 수정을 요청하긴 했지만, \n' +
        '프리랜서 디자이너님의 업무 일정에 \n' +
        '맞추어야 해서 답답해요. ',
    },
    {
      id: 3,
      title: '디자인 대행사 이용 사례',
      case: '# CASE 03',
      img: '/img/logo/section2-logo3.png',
      headline: '데일리한 업무를 맡기기에는 \n 프로젝트 당 비용이 부담돼요',
      description:
        '매일매일 맡기고 싶은 데일리 업무가\n' +
        '있는데 대행사를 이용하기엔 적합하지' +
        '않다고 느껴져요. 그렇다고 프로젝트 당' +
        '업무를 맡기자니 비용이 부담되구요.',
    },
    {
      id: 4,
      title: '타 구독 서비스 이용 사례',
      case: '# CASE 04',
      img: '/img/logo/section2-logo4.png',
      headline: '우리 기업을 좀 더 신경써주면 좋을텐데 아쉬워요',
      description:
        '디자이너가 우리 기업 업무만 맡고 있지\n' +
        '않은 것 같아요. 저희 업무를 담당할 때\n' +
        '좀 더 신경써서 작업해주면 좋겠는데 \n' +
        '어딘지 모르게 아쉬운 느낌이에요.',
    },
  ];

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
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="h-full w-full bg-[#0000000A] py-12">
      <div className="mx-auto flex w-full flex-col pl-4 md:min-w-[375px] md:max-w-[500px]">
        <article className="flex h-full w-full flex-col items-start gap-2">
          <p className="font-suit text-base font-normal leading-[1.6] tracking-[-0.02em] text-[#000000] text-opacity-80">
            디하가 묻습니다
          </p>
          <h2 className="text-left font-suit text-[28px] font-bold leading-[1.5] tracking-[-0.02em] text-[#000000E5]">
            디자이너, 아쉬웠던 경험
            <br />한 번도 없으신가요?
          </h2>
        </article>

        <div
          ref={containerRef}
          className="mt-[32px] flex space-x-4 overflow-x-scroll scrollbar-hide"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="h-[376px] w-[285px] flex-shrink-0 cursor-pointer rounded-[20px] bg-white p-6"
            >
              <div className="flex flex-col items-start justify-center gap-5">
                <img
                  src={slide.img}
                  alt={`logo${slide.id}`}
                  className="h-[100px] w-[100px] rounded-full object-contain"
                  loading="lazy"
                />
                <div className="flex h-[208px] w-full flex-col items-start justify-center gap-2 whitespace-nowrap">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center rounded bg-[#795BF914] px-2 py-[2px]">
                      <p className="text-sm font-medium leading-[19.6px] tracking-[-0.02em] text-[#6F42F0]">
                        {slide.case}
                      </p>
                    </div>
                    <p className="font-suit text-sm font-bold leading-[19.6px] tracking-[-0.02em] text-[#6F42F0]">
                      {slide.title}
                    </p>
                  </div>
                  <div className="w-full whitespace-break-spaces text-left font-suit text-xl font-bold leading-[32px] tracking-[-0.02em] text-[#000000CC]">
                    {slide.headline}
                  </div>
                  <div className="w-full whitespace-break-spaces text-left font-suit text-[16px] font-normal leading-[25.6px] tracking-[-0.02em] text-[#000000CC]">
                    {slide.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MobileSection2;
