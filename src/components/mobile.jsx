import '../App.css';
import { ScrollProvider } from '../contexts/ScrollContext.jsx';
import MobileSection from './mobiles/mobileSection.jsx';
import MobileSection2 from './mobiles/mobileSection2.jsx';
import MobileSection3 from './mobiles/mobileSection3.jsx';
import MobileSection4 from './mobiles/mobileSection4.jsx';
import MobileSection5 from './mobiles/mobileSection5.jsx';
import MobileSection6 from './mobiles/mobileSection6.jsx';
import MobileSection7 from './mobiles/mobileSection7.jsx';
import MobileSection8 from './mobiles/mobileSection8.jsx';
import MobileSection9 from './mobiles/mobileSection9.jsx';
import MobileSection10 from './mobiles/mobileSection10.jsx';
import MobileSection11 from './mobiles/mobileSection11.jsx';
import MobileSection12 from './mobiles/mobileSection12.jsx';
import MobileSection13 from './mobiles/mobileSection13.jsx';
import MobileSection14 from './mobiles/mobileSection14.jsx';
import MobileSection15 from './mobiles/mobileSection15.jsx';

function Mobile() {
  return (
    <main className="flex h-full w-[375px] flex-col items-center justify-start">
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
        <MobileSection />
        <MobileSection2 />
        <MobileSection3 />
        <MobileSection4 />
        <MobileSection5 />
        <MobileSection6 />
        <MobileSection7 />
        <MobileSection8 />
        <MobileSection9 />
        <MobileSection10 />
        <MobileSection11 />
        <MobileSection12 />
        <MobileSection13 />
        <MobileSection14 />
        <MobileSection15 />
      </ScrollProvider>
    </main>
  );
}

export default Mobile;
