import { ScrollProvider } from '../contexts/ScrollContext.jsx';
import HeroSection from './HeroSection.jsx';
import HeroSection2 from './HeroSection2.jsx';
import HeroSection3 from './HeroSection3.jsx';
import HeroSection4 from './HeroSection4.jsx';
import HeroSection5 from './HeroSection5.jsx';
import HeroSection6 from './HeroSection6.jsx';
import HeroSection7 from './HeroSection7.jsx';
import HeroSection8 from './HeroSection8.jsx';
import HeroSection9 from './HeroSection9.jsx';
import HeroSection10 from './HeroSection10.jsx';
import HeroSection11 from './HeroSection11.jsx';
import HeroSection12 from './HeroSection12.jsx';
import HeroSection13 from './HeroSection13.jsx';
import HeroSection14 from './HeroSection14.jsx';
import HeroSection15 from './HeroSection15.jsx';

function Desktop() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-start">
      <ScrollProvider>
        <div className="align-center flex gap-4 py-2">
          <a
            href="/"
            className="rounded bg-black px-2 py-1 text-sm font-semibold text-white shadow-sm"
          >
            데스크탑
          </a>
          <a
            href="/mobile"
            className="rounded bg-black px-2 py-1 text-sm font-semibold text-white shadow-sm"
          >
            모바일
          </a>
        </div>
        <HeroSection />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <HeroSection5 />
        <HeroSection6 />
        <HeroSection7 />
        <HeroSection8 />
        <HeroSection9 />
        <HeroSection10 />
        <HeroSection11 />
        <HeroSection12 />
        <HeroSection13 />
        <HeroSection14 />
        <HeroSection15 />
      </ScrollProvider>
    </main>
  );
}

export default Desktop;
