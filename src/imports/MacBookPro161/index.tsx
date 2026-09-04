import svgPaths from "./svg-29bxr3lx43";
import imgLogo from "./797e6ecb66d43d94aef10e64bd2daff188d8d26c.png";
import imgHeroImage from "./9abeb8731fe348252dea037676e224e84968e313.png";
import imgGimmeyzehSun1 from "./20854e491a003a1c0e0374803ee59a87f1eb9360.png";
import imgEx1 from "./3119fd656523042c6894913cb05025c747879137.png";
import imgBjtmTote11 from "./5c2e2008c2e1d9c956ca400316d97ae6b68399c1.png";
import imgTiger1 from "./17da8e297b463395a19191b82a332c87c8a0b4d2.png";

function MenuItems() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Festivo_Letters_No1:Regular',sans-serif] leading-[normal] left-[608px] not-italic text-[24px] text-black top-[45px] whitespace-nowrap" data-name="Menu items">
      <p className="absolute left-[608px] top-[45px]">shop</p>
      <p className="absolute left-[981px] top-[45px]">about</p>
      <p className="absolute left-[1075px] top-[45px]">blog</p>
      <p className="absolute left-[821px] top-[45px]">experiences</p>
      <p className="absolute left-[691px] top-[45px]">weddings</p>
    </div>
  );
}

function MenuIcons() {
  return (
    <div className="absolute h-[23px] left-[1569.51px] top-[50px] w-[113px]" data-name="Menu icons">
      <div className="absolute inset-[-2.17%_-0.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 24">
          <g id="Menu icons">
            <g id="Bag">
              <path d={svgPaths.p2a203780} fill="var(--fill-0, black)" />
              <path d={svgPaths.p225ea200} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2a203780} stroke="var(--stroke-0, black)" strokeLinecap="round" />
              <path d={svgPaths.p225ea200} stroke="var(--stroke-0, black)" strokeLinecap="round" />
            </g>
            <path d={svgPaths.p26730080} fill="var(--fill-0, black)" id="Profile " stroke="var(--stroke-0, black)" strokeWidth="0.5" />
            <g id="Search">
              <path d={svgPaths.p1fa44b80} fill="var(--fill-0, black)" />
              <path d={svgPaths.p15f02200} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1fa44b80} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p15f02200} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[43px] top-[-2px]" data-name="Header">
      <MenuItems />
      <div className="absolute flex h-[124.867px] items-center justify-center left-[43px] top-[-2px] w-[154.52px]">
        <div className="flex-none rotate-[-15.05deg]">
          <div className="h-[93px] relative w-[135px]" data-name="Logo">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
          </div>
        </div>
      </div>
      <MenuIcons />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute contents left-[-51px] top-[123px]" data-name="Hero image">
      <div className="absolute h-[913px] left-[-51px] top-[123px] w-[1779px]" data-name="Hero image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.86%] left-0 max-w-none top-[-15.12%] w-[110.23%]" src={imgHeroImage} />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.19)] h-[913px] left-0 top-[123px] w-[1782px]" data-name="Hero overlay" />
    </div>
  );
}

function HeroButton() {
  return (
    <div className="absolute contents left-[120px] top-[775px]" data-name="Hero Button">
      <div className="absolute flex h-[70.367px] items-center justify-center left-[120px] top-[797px] w-[247.243px]">
        <div className="flex-none rotate-[-0.14deg]">
          <div className="bg-[#fd82c6] border-0 border-[rgba(0,0,0,0.94)] border-solid h-[69.761px] relative rounded-[91px] w-[247.072px]" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_28pt:Medium',sans-serif] leading-[114px] left-[151.07px] not-italic text-[36px] text-white top-[775px] tracking-[-1.44px] whitespace-nowrap">SHOP NOW</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute contents left-[-51px] top-[123px]" data-name="Hero">
      <HeroImage />
      <HeroButton />
      <div className="[word-break:break-word] absolute font-['Festivo_Letters_No1:Regular',sans-serif] leading-[0] left-[120px] not-italic text-[128px] text-white top-[444px] tracking-[-5.12px] whitespace-nowrap">
        <p className="leading-[114px] mb-0">Lorem ipsum</p>
        <p className="leading-[114px]">dolor sit</p>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_28pt:Medium',sans-serif] leading-[114px] left-[125px] not-italic text-[32px] text-white top-[672px] tracking-[-1.28px] whitespace-nowrap">Lorem ipsum dolor sit amet, consectetur</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[30px] inset-[30.57%_-9.43%_66.17%_-3.18%] items-center overflow-clip">
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.92px] whitespace-nowrap">Inspired by beirut</p>
      <div className="h-[85px] relative shrink-0 w-[93px]" data-name="Gimmeyzeh Sun 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[303.54%] left-[-17.21%] max-w-none top-[-13.85%] w-[223.74%]" src={imgGimmeyzehSun1} />
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute contents inset-[30.57%_-9.43%_66.17%_-3.18%]" data-name="Banner">
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[536px] left-[143px] overflow-clip top-[1497px] w-[445px]">
      <div className="absolute h-[586px] left-0 top-0 w-[469px]" data-name="Ex 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEx1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[536px] left-[645px] overflow-clip top-[1497px] w-[445px]">
      <div className="absolute h-[586px] left-0 top-0 w-[469px]" data-name="Ex 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEx1} />
      </div>
      <div className="absolute h-[617px] left-0 top-[-19px] w-[511px]" data-name="BJTM Tote 1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.07%] left-[0.69%] max-w-none top-[-0.1%] w-[96.67%]" src={imgBjtmTote11} />
        </div>
      </div>
    </div>
  );
}

function WeuiArrowOutlined() {
  return <div className="absolute h-[24px] left-[177px] top-[379px] w-[12px]" data-name="weui:arrow-outlined" />;
}

function Frame2() {
  return (
    <div className="absolute h-[536px] left-[1147px] overflow-clip top-[1497px] w-[445px]">
      <div className="absolute h-[586px] left-0 top-0 w-[469px]" data-name="Ex 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEx1} />
      </div>
      <div className="absolute h-[557px] left-[-88px] top-[-10px] w-[622px]" data-name="Tiger 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTiger1} />
      </div>
      <WeuiArrowOutlined />
    </div>
  );
}

function BestSellersSection() {
  return (
    <div className="absolute contents left-[69px] top-[1289px]" data-name="Best Sellers section">
      <p className="[word-break:break-word] absolute font-['Festivo_Letters_No1:Regular',sans-serif] leading-[114px] left-[143px] not-italic text-[64px] text-black top-[1289px] tracking-[-2.56px] whitespace-nowrap">Best Sellers</p>
      <Frame />
      <Frame1 />
      <Frame2 />
      <p className="[word-break:break-word] absolute font-['Inter_18pt:SemiBold',sans-serif] leading-[114px] left-[324px] not-italic text-[24px] text-black top-[2017px] tracking-[-0.96px] whitespace-nowrap">Ex Card</p>
      <p className="[word-break:break-word] absolute font-['Inter_18pt:Light',sans-serif] leading-[114px] left-[337px] not-italic text-[20px] text-black top-[2052px] tracking-[-0.8px] whitespace-nowrap">$10.00</p>
      <p className="[word-break:break-word] absolute font-['Inter_18pt:Light',sans-serif] leading-[114px] left-[839px] not-italic text-[20px] text-black top-[2052px] tracking-[-0.8px] whitespace-nowrap">$10.00</p>
      <p className="[word-break:break-word] absolute font-['Inter_18pt:Light',sans-serif] leading-[114px] left-[1341px] not-italic text-[20px] text-black top-[2052px] tracking-[-0.8px] whitespace-nowrap">$10.00</p>
      <p className="[word-break:break-word] absolute font-['Inter_18pt:SemiBold',sans-serif] leading-[114px] left-[813px] not-italic text-[24px] text-black top-[2017px] tracking-[-0.96px] whitespace-nowrap">Heart Tote</p>
      <p className="[word-break:break-word] absolute font-['Inter_18pt:Medium',sans-serif] leading-[114px] left-[143px] not-italic text-[27px] text-black top-[1369px] tracking-[-1.08px] whitespace-nowrap">Shop the best of the best</p>
      <p className="[word-break:break-word] absolute font-['Inter_18pt:SemiBold',sans-serif] leading-[114px] left-[1306px] not-italic text-[24px] text-black top-[2017px] tracking-[-0.96px] whitespace-nowrap">Tiger Frame</p>
      <div className="absolute flex inset-[49.59%_4.8%_49.53%_94.21%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 31">
              <path d={svgPaths.p28799900} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[49.59%_95.02%_49.53%_3.99%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 31">
          <path d={svgPaths.p28799900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HeroButton1() {
  return (
    <div className="absolute contents left-[1397px] top-[1289px]" data-name="Hero Button">
      <div className="absolute flex h-[60.848px] items-center justify-center left-[1397px] top-[1315.8px] w-[186.592px]">
        <div className="flex-none rotate-[-0.14deg]">
          <div className="bg-[#fd82c6] border-0 border-[rgba(0,0,0,0.94)] border-solid h-[60.39px] relative rounded-[91px] w-[186.445px]" />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter_28pt:Medium',sans-serif] leading-[114px] left-[1419px] not-italic text-[26px] text-white top-[1289px] whitespace-nowrap">SHOP NOW</p>
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 16' - 1">
      <Header />
      <Hero />
      <div className="absolute bg-[#ffeee4] h-[182px] left-[-1px] top-[1035px] w-[1729px]" />
      <Banner />
      <BestSellersSection />
      <HeroButton1 />
    </div>
  );
}