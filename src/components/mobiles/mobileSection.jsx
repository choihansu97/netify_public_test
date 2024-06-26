function MobileSection() {
    return (
        <section className="bg-hero-section-gradient w-full h-full pt-24 pb-12">
            <div
                className="mx-auto gap-[48px] flex flex-col justify-center items-center
                md:min-w-[375px] w-full">
                <article
                    className="flex flex-col justify-center items-center w-full h-full gap-y-2">
                    <h1 className="font-suit font-normal text-[32px] leading-[1.35] text-center tracking-[-0.02em] text-white text-opacity-90">
                        좋은 디자이너를 찾아
                        <br/>
                        <span
                            className="font-suit font-extrabold text-[32px] leading-[1.35] text-center tracking-[-0.02em] text-white">
                            헤매고 계셨다면
                        </span>
                    </h1>

                    <p className="flex flex-col font-suit font-normal text-[16px] leading-[1.6] tracking-[-0.02em] text-white text-opacity-90">
                        우리 기업에 딱! 맞는 실력있고
                        <span
                            className="font-suit font-bold text-[16px] leading-[32px] tracking-[-0.02em] text-white text-opacity-90">
                             성실한 전담 디자이너를 직원처럼
                        </span>
                        쓸 수 있는 방법을 알려드릴게요
                    </p>
                </article>
                <article
                    className="flex flex-col justify-center items-center w-full h-full gap-2">
                    <button
                        className="w-[206px] h-[50px] px-6 py-3 bg-white rounded-lg">
                        <p className="font-suit text-[16px] font-bold leading-[26px] text-left bg-clip-text text-transparent bg-hero-button-gradient whitespace-nowrap">
                            3일 무료! 디자이너 구독
                        </p>
                    </button>
                    <button
                        className="px-9 py-3 w-[206px] h-[50px] bg-white bg-opacity-[0.16] rounded-lg">
                        <p className="font-suit text-[16px] font-bold leading-[26px] tracking-[0.45px] text-white whitespace-nowrap">
                            24시 즉시 상담 신청
                        </p>
                    </button>
                </article>
            </div>
        </section>
    )
}

export default MobileSection;
