import {useRef, useState} from "react";

function MobileSection2() {
    const slides = [
        {
            id: 1,
            title: "디자이너를 채용 사례",
            case: "# CASE 01",
            img: "/img/logo/logo1.png",
            headline: "이건 이래서 안되고 저건 저래서 안된다는데....",
            description: "디자이너 한명 채용하면 다 될줄 알았는데, 디자이너마다 전문 업무 분야가 따로 있대요. 이건 이래서, 저건 저래서 안된다고 하시는데 어떡하죠?"
        },
        {
            id: 2,
            title: "프리랜서 플랫폼 이용 사례",
            case: "# CASE 02",
            img: "/img/logo/logo2.png",
            headline: "바로바로 수정하고 싶은데, 소통이 힘들어요...",
            description: "오늘 내로 수정본을 빠르게 받을 순 없는걸까요? 급하게 수정을 요청드리긴 했지만, 프리랜서 디자이너님의 업무 일정에 맞추어야 해서 답답해요."
        },
        {
            id: 3,
            title: "디자인 대행사 이용 사례",
            case: "# CASE 03",
            img: "/img/logo/logo3.png",
            headline: "데일리한 업무를 맡기기에는 프로젝트 당 비용이 부담돼요",
            description: "매일매일 맡기고 싶은 데일리 업무가 있는데 대행사를 이용하기엔 적합하지 않다고 느껴져요. 그렇다고 프로젝트 당 업무를 맡기자니 비용이 부담되구요."
        },
        {
            id: 4,
            title: "타 구독 서비스 이용 사례",
            case: "# CASE 04",
            img: "/img/logo/logo4.png",
            headline: "우리 기업을 좀 더 신경써주면 좋을텐데 아쉬워요",
            description: "디자이너가 우리 기업 업무만 맡고 있지 않은 것 같아요. 저희 업무를 담당할 때 좀 더 신경써서 작업해주셨으면 좋겠는데 어딘지 모르게 아쉬운 느낌이에요."
        }
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
        <section className="w-full h-full bg-[#0000000A] py-12">
            <div className="md:min-w-[375px] md:max-w-[500px] w-full mx-auto flex flex-col pl-4">
                <article className="w-full h-full flex flex-col items-start gap-2">
                    <p className="font-suit font-normal text-base leading-[1.6] tracking-[-0.02em] text-[#000000] text-opacity-80">
                        디하가 묻습니다
                    </p>
                    <h2 className="font-suit font-bold text-[28px] leading-[1.5] tracking-[-0.02em] text-[#000000E5] text-left">
                        디자이너, 아쉬웠던 경험
                        <br/>한 번도 없으신가요?
                    </h2>
                </article>

                <div
                    ref={containerRef}
                    className="flex mt-[32px] overflow-x-scroll flex space-x-4 scrollbar-hide"
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="flex-shrink-0 w-[285px] h-[376px] bg-white rounded-[20px] p-6 cursor-pointer"
                        >
                            <div className="flex flex-col justify-center items-start gap-5">
                                <img
                                    src={slide.img}
                                    alt={`logo${slide.id}`}
                                    className="w-[100px] h-[100px] rounded-full object-contain"
                                    loading="lazy"
                                />
                                <div
                                    className="flex flex-col justify-center items-start gap-2 w-full h-[208px] whitespace-nowrap">
                                    <div className="flex flex-row items-center gap-2">
                                        <div
                                            className="flex flex-row items-center py-[2px] px-2 rounded bg-[#795BF914]">
                                            <p className="text-[#6F42F0] font-medium text-sm leading-[19.6px] tracking-[-0.02em]">
                                                {slide.case}
                                            </p>
                                        </div>
                                        <p className="font-suit font-bold text-sm leading-[19.6px] tracking-[-0.02em] text-[#6F42F0]">
                                            {slide.title}
                                        </p>
                                    </div>
                                    <div
                                        className="text-left font-suit font-bold text-xl leading-[32px] tracking-[-0.02em] text-[#000000CC] w-full whitespace-break-spaces">
                                        {slide.headline}
                                    </div>
                                    <div
                                        className="text-left font-suit font-normal text-[16px] leading-[25.6px] tracking-[0.02em] text-[#000000CC] w-full whitespace-break-spaces">
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
