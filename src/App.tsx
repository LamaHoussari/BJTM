import { useState, useRef } from "react";

import imgLogo from "@/imports/logo-1.png";
import imgHero from "@/imports/MacBookPro161/9abeb8731fe348252dea037676e224e84968e313.png";
import imgSun from "@/imports/sun.png";

import imgSanaHelwaCake from "@/imports/sana_helwa_cake.jpg";
import imgSanaHelwaIceCream from "@/imports/sana_helwa_ice_cream.jpg";
import imgValentine from "@/imports/Valentine.JPG";
import imgValentine1 from "@/imports/Valentine_1.JPG";
import imgPetitsBJTM from "@/imports/petits_bjtm.png";
import imgWeddings from "@/imports/ChatGPT_Image_Jul_21__2026__02_51_49_PM-1.png";
import imgPoire from "@/imports/Poire.jpg";
import imgPomme from "@/imports/Pomme_3.jpg";
import imgSeal from "@/imports/Seal.jpg";
import imgBracelet from "@/imports/Poire.jpg";
import imgBarPin from "@/imports/Valentine_1.JPG";
import imgEarrings from "@/imports/IMG_2102.jpg";
import imgGimmeyzehSun from "@/imports/Gimmeyzeh_Sun.jpg";
import imgLabnehTote from "@/imports/13.jpg";
import imgZaatarPrint from "@/imports/image__2_.png";
import imgBonjourHabibi from "@/imports/image__1_.png";
import imgStat1 from "@/imports/image__3_-1.png";
import imgStat2 from "@/imports/image__4_-1.png";
import imgStat3 from "@/imports/image__5_-1.png";
import imgStat4 from "@/imports/image__6_-1.png";
import imgStat5 from "@/imports/image__7_-1.png";
import imgCustomizable from "@/imports/customizable-1.png";

const PINK = "#e8191a";

const shopMenuData = {
  bestSellers: [
    "Labneh Lover Tote",
    "Bonjour Habibi Print",
    "Heart Card",
    "Hayati Card",
    "Ya Teir Card",
  ],
  categories: [
    "Best Sellers",
    "Greeting Cards",
    "Stationery",
    "Totebags",
    "Bijoux",
    "Wall Prints",
    "Shop All",
  ],
  themes: ["Food", "Amour", "Beirut", "Bride"],
  petitsBJTM: ["Wall Prints", "Stationery", "Totebags"],
  weddings: [
    "Totebags",
    "Stickers",
    "Coasters",
    "Wall Prints",
    "Caps",
    "Notepads",
    "Thank You Cards",
    "Personal Stationery",
    "T-shirts",
  ],
};

const giftsMenuData = {
  byPrice: [
    "Gifts under $20",
    "Gifts under $50",
    "Gifts under $100",
    "Gifts under $200",
  ],
  byRecipient: [
    "For Her",
    "For Him",
    "For Couples",
    "For Friends",
    "For the Home",
    "For the Wedding",
    "For Kids",
  ],
};

const bestSellersProducts = [
  { name: "Labneh Lover Tote", price: "$22.00", image: imgLabnehTote },
  { name: "You Are the Zaatar Print", price: "$28.00", image: imgZaatarPrint },
  { name: "Bonjour Habibi Print", price: "$28.00", image: imgBonjourHabibi },
  { name: "Sana Helwa (Cake)", price: "$12.00", image: imgSanaHelwaCake },
  { name: "Valentine Cards Set", price: "$14.00", image: imgValentine1 },
];

const categoryItems = [
  { name: "Cards", image: imgValentine, href: "#" },
  { name: "Prints & Frames", image: imgPomme, href: "#" },
  { name: "Wall Accessories", image: imgBracelet, href: "#" },
  { name: "Stickers", image: imgBarPin, href: "#" },
  { name: "Accessories", image: imgEarrings, href: "#" },
];

const stationeryProducts = [
  { name: "Hayati Card", price: "$8.00", tag: "", image: imgStat1 },
  { name: "Heart Card", price: "$8.00", tag: "BEST SELLER", image: imgStat2 },
  { name: "Yikhzi l\'Ein Card", price: "$8.00", tag: "", image: imgStat3 },
  { name: "Ya Teir Card", price: "$8.00", tag: "NEW", image: imgStat4 },
 
];

// ─── Navigation ──────────────────────────────────────────────────────────────

function Navigation() {
  const [activeMenu, setActiveMenu] = useState<'shop' | 'gifts' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const openMenu = (menu: 'shop' | 'gifts') => {
    clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const linkCls = "font-display text-[17px] text-black hover:text-[#e8191a] transition-colors py-2";
  const menuItemCls = "block w-fit font-sans text-[14px] leading-5 text-black hover:text-[#e8191a] py-[5px] transition-colors";
  const colHeadCls = "font-sans text-[11px] font-semibold text-black/40 uppercase tracking-[2px] mb-4";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/8">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between gap-8 relative">

        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center">
          <img src={imgLogo} alt="Beirut JTM" className="h-auto w-50" style={{ marginBottom: '8px', marginLeft: '0px' }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {/* Shop */}
          <div className="relative" onMouseEnter={() => openMenu('shop')} onMouseLeave={scheduleClose}>
            <button className={linkCls}>Shop</button>
          </div>

          {/* Weddings */}
          <a href="#weddings" className={linkCls}>Weddings</a>

          {/* Gifts */}
          <div className="relative" onMouseEnter={() => openMenu('gifts')} onMouseLeave={scheduleClose}>
            <button className={linkCls}>Gifts</button>
          </div>

          {/* Remaining links */}
          {[
            { label: 'Experiences', href: '#experiences' },
            { label: 'About', href: '#about' },
            { label: 'Blog', href: '#blog' },
          ].map(({ label, href }) => (
            <a key={label} href={href} className={linkCls}>{label}</a>
          ))}

          {/* Find Us CTA */}
          <a
            href="https://maps.app.goo.gl/Gemmayzeh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] font-semibold text-white rounded-full px-4 py-1.5 hover:opacity-85 transition-opacity"
            style={{ backgroundColor: PINK }}
          >
            Find Us
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-1">
          <button className="p-2.5 text-black hover:text-[#e8191a] transition-colors" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8.5" cy="8.5" r="6" /><path d="M13 13L18 18" />
            </svg>
          </button>
          <button className="p-2.5 text-black hover:text-[#e8191a] transition-colors" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="10" cy="6.5" r="4" /><path d="M2 18c0-4.418 3.582-7 8-7s8 2.582 8 7" />
            </svg>
          </button>
          <button className="p-2.5 text-black hover:text-[#e8191a] transition-colors" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7V5a4 4 0 0 1 8 0v2" /><rect x="2" y="7" width="16" height="12" rx="1.5" />
            </svg>
          </button>
          <button className="md:hidden p-2.5 text-black" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Shop mega menu */}
      {activeMenu === 'shop' && (
        <div
          className="hidden md:block absolute top-full inset-x-0 w-screen bg-white border-t border-b border-black/10 shadow-xl shadow-black/10 z-50"
          onMouseEnter={() => openMenu('shop')}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full max-w-[1600px] mx-auto grid grid-cols-5 px-6 md:px-10 lg:px-16">
            {/* Best Sellers */}
            <section className="min-w-0 py-9 px-5 lg:px-8">
              <p className={colHeadCls}>Best Sellers</p>
              {shopMenuData.bestSellers.map(item => <a key={item} href="#" className={menuItemCls}>{item}</a>)}
            </section>
            {/* Categories */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Categories</p>
              {shopMenuData.categories.map(item => (
                <a key={item} href="#" className={`${menuItemCls}${item === 'Shop All' ? ' font-semibold mt-2 block' : ''}`}>{item}</a>
              ))}
            </section>
            {/* Themes */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Themes</p>
              {shopMenuData.themes.map(item => <a key={item} href="#" className={menuItemCls}>{item}</a>)}
            </section>
            {/* Petits BJTM */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Petits BJTM</p>
              {shopMenuData.petitsBJTM.map(item => <a key={item} href="#" className={menuItemCls}>{item}</a>)}
            </section>
            {/* Weddings */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Weddings</p>
              {shopMenuData.weddings.map(item => <a key={item} href="#" className={menuItemCls}>{item}</a>)}
            </section>
          </div>
        </div>
      )}

      {/* Gifts mega menu */}
      {activeMenu === 'gifts' && (
        <div
          className="hidden md:block absolute top-full inset-x-0 w-screen bg-white border-t border-b border-black/10 shadow-xl shadow-black/10 z-50"
          onMouseEnter={() => openMenu('gifts')}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 px-6 md:px-10 lg:px-16" style={{ maxWidth: 640 }}>
            {/* By Price */}
            <section className="min-w-0 py-9 px-5 lg:px-8">
              <p className={colHeadCls}>By Price</p>
              {giftsMenuData.byPrice.map(item => <a key={item} href="#" className={menuItemCls}>{item}</a>)}
            </section>
            {/* By Recipient */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>By Recipient</p>
              {giftsMenuData.byRecipient.map(item => <a key={item} href="#" className={menuItemCls}>{item}</a>)}
            </section>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-6 py-6 flex flex-col gap-5">
          {[
            { label: 'Shop', href: '#shop' },
            { label: 'Weddings', href: '#weddings' },
            { label: 'Gifts', href: '#gifts' },
            { label: 'Experiences', href: '#experiences' },
            { label: 'About', href: '#about' },
            { label: 'Blog', href: '#blog' },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="font-display text-[22px] text-black" onClick={() => setMobileOpen(false)}>{label}</a>
          ))}
          <a
            href="https://maps.app.goo.gl/Gemmayzeh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[22px] font-semibold"
            style={{ color: PINK }}
            onClick={() => setMobileOpen(false)}
          >
            Find Us
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] overflow-hidden bg-[#c8a882]">
      <img
        src={imgHero}
        alt="Beirut JTM hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.22)" }}
      />
      <div className="relative h-full flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-20 max-w-[1400px] mx-auto">
        <h1 className="font-display text-white text-[64px] md:text-[110px] leading-[0.92] tracking-[-1px] md:tracking-[-3px] mb-6">
          Beirut
          <br />
          Je T'aime
        </h1>
        <p className="font-sans font-medium text-white text-[16px] md:text-[22px] mb-9 max-w-[480px] leading-snug opacity-90">
          Stationery &amp; lifestyle goods crafted with love for
          the city we adore
        </p>
        <a
          href="#shop"
          style={{ backgroundColor: PINK }}
          className="inline-flex items-center justify-center text-white font-sans font-medium text-[14px] md:text-[16px] rounded-full px-6 py-2.5 hover:opacity-90 active:scale-95 transition-all w-fit tracking-[-0.3px]"
        >
          SHOP NOW
        </a>
      </div>
    </section>
  );
}

// ─── Marquee Banner ───────────────────────────────────────────────────────────

function MarqueeBanner() {
  const item = (key: number) => (
    <div
      key={key}
      className="flex items-center flex-shrink-0"
      style={{ gap: "2rem", paddingRight: "2rem" }}
    >
      <span className="font-display text-[22px] md:text-[28px] text-black leading-none whitespace-nowrap">
        Inspired by beirut
      </span>
      <img
        src={imgSun}
        alt=""
        className="h-[64px] w-auto flex-shrink-0"
      />
    </div>
  );

  return (
    <div className="bg-[#ffeee4] overflow-hidden py-7 border-y border-black/8">
      <div
        className="flex animate-marquee"
        style={{ width: "max-content" }}
      >
        {Array.from({ length: 8 }, (_, i) => item(i))}
        {Array.from({ length: 8 }, (_, i) => item(i + 8))}
      </div>
    </div>
  );
}

// ─── Best Sellers ─────────────────────────────────────────────────────────────

function ProductCard({
  name,
  price,
  image,
  tag,
}: {
  name: string;
  price: string;
  image: string;
  tag?: string;
}) {
  return (
    <div className="group flex-shrink-0 w-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb] mb-3 rounded-sm">
        {tag && (
          <span className="absolute top-3 left-3 z-10 font-sans text-[10px] font-semibold tracking-[1.5px] bg-black text-white px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <button
          style={{ backgroundColor: PINK }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[12px] font-sans font-semibold px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap"
        >
          Add to cart
        </button>
      </div>
      <h3 className="font-sans font-semibold text-[17px] text-black">
        {name}
      </h3>
      <p className="font-sans font-light text-[15px] text-black/60 mt-0.5">
        {price}
      </p>
    </div>
  );
}

function BestSellers() {
  const [index, setIndex] = useState(0);
  const perView = 3;
  const max = bestSellersProducts.length - perView;

  const visible = bestSellersProducts.slice(
    index,
    index + perView,
  );

  return (
    <section
      id="shop"
      className="py-16 md:py-20 px-8 md:px-16 max-w-[1600px] mx-auto"
    >
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="font-display text-[34px] md:text-[44px] text-black leading-none">
            Best Sellers
          </h2>
          <p className="font-sans font-medium text-[15px] text-black/55 mt-2">
            Inspired by Beirut · The food, the language, the culture.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-black border-b border-black pb-0.5 hover:text-[#e8191a] hover:border-[#e8191a] transition-colors"
        >
          Shop all best sellers
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7h8M7 3l4 4-4 4" />
          </svg>
        </a>
      </div>

      <div className="relative">
        {/* Arrows */}
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="absolute -left-6 top-[38%] -translate-y-1/2 z-10 w-11 h-11 bg-white border border-black/15 rounded-full flex items-center justify-center hover:border-black/40 disabled:opacity-25 transition-all shadow-sm"
          aria-label="Previous"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 11L5 7L9 3" />
          </svg>
        </button>
        <button
          onClick={() => setIndex((i) => Math.min(max, i + 1))}
          disabled={index >= max}
          className="absolute -right-6 top-[38%] -translate-y-1/2 z-10 w-11 h-11 bg-white border border-black/15 rounded-full flex items-center justify-center hover:border-black/40 disabled:opacity-25 transition-all shadow-sm"
          aria-label="Next"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 3L9 7L5 11" />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {visible.map((p, i) => (
            <ProductCard key={`${index}-${i}`} {...p} />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-8">
        {Array.from({ length: max + 1 }, (_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor: i === index ? PINK : "#d1d1d1",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Shop By Category ─────────────────────────────────────────────────────────

function ShopByCategory() {
  return (
    <section
      id="categories"
      className="border-t border-black/8 py-16 md:py-20 px-8 md:px-16 max-w-[1600px] mx-auto"
    >
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <h2 className="font-display text-[34px] md:text-[44px] text-black leading-none">
          Shop by Category
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-black border-b border-black pb-0.5 hover:text-[#e8191a] hover:border-[#e8191a] transition-colors"
        >
          View all categories
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7h8M7 3l4 4-4 4" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categoryItems.map((cat) => (
          <a
            key={cat.name}
            href={cat.href}
            className="group relative aspect-[2/3] overflow-hidden rounded-sm bg-[#f0ebe5] block"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className="font-display text-[20px] md:text-[22px] text-white leading-tight block">
                {cat.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Petits BJTM CTA ─────────────────────────────────────────────────────────

function PetitsBJTM() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: 480 }}
    >
      <img
        src={imgPetitsBJTM}
        alt="Petits BJTM"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="relative flex items-center min-h-[520px] px-8 md:px-20 py-20 max-w-[1400px] mx-auto">
        <div className="max-w-[480px]">
          <p className="font-sans text-[12px] font-semibold tracking-[2.5px] uppercase text-black/70 mb-3">
            Collection
          </p>
          <h2 className="font-display text-[42px] md:text-[58px] text-black leading-none mb-4">
            Petits BJTM
          </h2>
          <p className="font-sans text-[16px] text-black/85 leading-relaxed mb-8 max-w-[360px]">
            A curated line of small-format treasures — prints,
            stickers, notepads, and totebags sized for everyday
            joy.
          </p>
          <a
            href="#"
            style={{ backgroundColor: PINK }}
            className="inline-flex items-center justify-center text-white font-sans font-medium text-[16px] rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
          >
            SHOP PETITS BJTM
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── BJTM Weddings CTA ───────────────────────────────────────────────────────

function WeddingsCTA() {
  return (
    <section
      id="weddings"
      className="relative overflow-hidden"
      style={{ minHeight: 560 }}
    >
      <img
        src={imgWeddings}
        alt="BJTM Weddings"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex items-center min-h-[520px] px-8 md:px-20 py-20 max-w-[1400px] mx-auto">
        <div className="max-w-[520px] ml-auto text-right">
          <p className="font-sans text-[12px] font-semibold tracking-[2.5px] uppercase text-black/50 mb-3">
            Special Occasions
          </p>
          <h2 className="font-display text-[42px] md:text-[60px] text-black leading-none mb-4">
            BJTM
            <br />
            Weddings
          </h2>
          <p className="font-sans text-[16px] text-black/65 leading-relaxed mb-8 max-w-[400px] ml-auto">
           Celebrate love with our customizable wedding collection. Perfect cards, prints, and gifts to commemorate your special day or to give to the happy couple.
          </p>
          <a
            href="#"
                        style={{ backgroundColor: PINK }}

            className="inline-flex items-center justify-center text-white font-sans font-medium text-[16px] rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
          >
           LET'S CELEBRATE
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Customizable Products CTA ────────────────────────────────────────────────

function CustomizableCTA() {
  return (
    <section className="grid md:grid-cols-2 min-h-[520px]">
      {/* Image */}
      <div className="relative overflow-hidden min-h-[340px] md:min-h-0">
        <img
          src={imgCustomizable}
          alt="Customizable products"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center px-10 md:px-16 py-16 bg-[#ffeee4]">
        <p className="font-sans text-[12px] font-semibold tracking-[2.5px] uppercase text-black/45 mb-4">
          Made for You
        </p>
        <h2 className="font-display text-[36px] md:text-[46px] text-black leading-none mb-5">
          Customizable
          <br />
          Products
        </h2>
        <p className="font-sans text-[16px] text-black/65 leading-relaxed mb-8 max-w-[400px]">
          Put your name, your city, your love on it. Our custom
          range lets you personalise everything from totebags to
          coasters — for yourself or as the perfect gift.
        </p>
        <a
          href="#"
          style={{ backgroundColor: PINK }}
          className="inline-flex items-center justify-center text-white font-sans font-medium text-[16px] rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity w-fit"
        >
          SHOP CUSTOM
        </a>
      </div>
    </section>
  );
}

// ─── Stationery Selection ─────────────────────────────────────────────────────

function StationerySelection() {
  return (
    <section className="py-16 md:py-20 px-8 md:px-16 max-w-[1600px] mx-auto">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <h2 className="font-display text-[34px] md:text-[44px] text-black leading-none">
            Stationery
          </h2>
          <p className="font-sans font-medium text-[15px] text-black/55 mt-2">
            Paper goods with a Beirut heartbeat
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-black border-b border-black pb-0.5 hover:text-[#e8191a] hover:border-[#e8191a] transition-colors"
        >
          Shop all stationery
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7h8M7 3l4 4-4 4" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
        {stationeryProducts.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}

// ─── Our Story ────────────────────────────────────────────────────────────────

function OurStory() {
  return (
    <section
      id="about"
      className="grid md:grid-cols-2 gap-0 min-h-[500px] border-t border-black/8"
    >
      {/* Text */}
      <div className="flex flex-col justify-center px-10 md:px-20 py-16 md:py-24">
        <p className="font-sans text-[12px] font-semibold tracking-[2.5px] uppercase text-[#e8191a] mb-4">
          Our Story
        </p>
        <h2 className="font-display text-[36px] md:text-[46px] text-black leading-none mb-6">
          Born in Beirut,
          <br />
          Made with Love
        </h2>
        <p className="font-sans text-[16px] text-black/65 leading-[1.75] max-w-[440px] mb-4">
          Beirut JTM — Beirut Je T'aime — started as a love
          letter to a city that refuses to be forgotten. We
          create stationery and lifestyle goods that capture the
          spirit, colour, and warmth of Beirut life.
        </p>
        <p className="font-sans text-[16px] text-black/65 leading-[1.75] max-w-[440px] mb-8">
          Every product is designed locally, printed carefully,
          and packed with that signature Lebanese joie de vivre.
          From the Gimmeyzeh sun to the Hummus bowl, our
          collections celebrate the everyday beauty of our city.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-black border-b border-black pb-0.5 hover:text-[#e8191a] hover:border-[#e8191a] transition-colors w-fit"
        >
          Read our full story
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7h8M7 3l4 4-4 4" />
          </svg>
        </a>
      </div>
      {/* Image */}
      <div className="relative overflow-hidden min-h-[360px] md:min-h-0 bg-[#f0ebe5]">
        <img
          src={imgGimmeyzehSun}
          alt="Gimmeyzeh, Beirut"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

const blogPosts = [
  {
    image: imgGimmeyzehSun,
    tag: "City & Culture",
    title: "Gimmeyzeh & the Beirut Sun: Our Iconic Motif",
    excerpt:
      "The smiling sun over Gimmeyzeh's pastel facades — how one neighbourhood became the heart of the BJTM universe.",
    date: "July 2025",
  },
  {
    image: imgValentine,
    tag: "Behind the Design",
    title:
      "You Have to Kiss Many Frogs: The Story of Our Valentine Card",
    excerpt:
      "A frog, a crown, and a very Lebanese sense of humour — how our Valentine collection came to life.",
    date: "February 2025",
  },
  {
    image: imgPoire,
    tag: "New Collection",
    title:
      "Poire, Pomme & Friends: The French Fruit Print Series",
    excerpt:
      "Playful characters, bold colours, and a love for Franco-Lebanese culture — meet our newest framed prints.",
    date: "January 2025",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="py-16 md:py-20 px-8 md:px-16 max-w-[1600px] mx-auto border-t border-black/8"
    >
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <h2 className="font-display text-[34px] md:text-[44px] text-black leading-none">
            From the Blog
          </h2>
          <p className="font-sans font-medium text-[15px] text-black/55 mt-2">
            Stories, designs, and love letters from Beirut
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-black border-b border-black pb-0.5 hover:text-[#e8191a] hover:border-[#e8191a] transition-colors"
        >
          Read all posts
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7h8M7 3l4 4-4 4" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {blogPosts.map((post, i) => (
          <a key={i} href="#" className="group block">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0eb] mb-5 rounded-sm">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Meta */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-sans text-[11px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "#ffeee4",
                  color: "#000",
                }}
              >
                {post.tag}
              </span>
              <span className="font-sans text-[13px] text-black/40">
                {post.date}
              </span>
            </div>
            {/* Title */}
            <h3 className="font-display text-[22px] md:text-[24px] text-black leading-snug mb-3 group-hover:text-[#e8191a] transition-colors">
              {post.title}
            </h3>
            {/* Excerpt */}
            <p className="font-sans text-[14px] text-black/60 leading-relaxed">
              {post.excerpt}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 py-12 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-[32px] md:text-[40px] leading-none mb-2">
              Stay in the loop
            </h3>
            <p className="font-sans text-[15px] text-white/55">
              New drops, events, and love letters from Beirut.
            </p>
          </div>
          <form
            className="flex gap-0 w-full md:w-auto min-w-[340px]"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/35 font-sans text-[14px] px-5 py-2.5 rounded-l-full focus:outline-none focus:border-[#e8191a] transition-colors"
            />
            <button
              type="submit"
              style={{ backgroundColor: PINK }}
              className="font-sans font-medium text-[14px] text-white px-5 py-2.5 rounded-r-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links grid */}
      <div className="py-14 px-8 md:px-16 max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <img
            src={imgLogo}
            alt="Beirut JTM"
            className="h-auto w-40 brightness-0 invert mb-3"
          />
          <p className="font-sans text-[13px] text-white/50 leading-relaxed max-w-[180px]">
            Stationery &amp; lifestyle inspired by Beirut — made
            with love.
          </p>
          <div className="flex gap-4 mt-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/beirutjtm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#e8191a] transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.5"
                  fill="currentColor"
                />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="#"
              className="text-white/50 hover:text-[#e8191a] transition-colors"
              aria-label="TikTok"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href="#"
              className="text-white/50 hover:text-[#e8191a] transition-colors"
              aria-label="Pinterest"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.78 1.27-5.37 1.27-5.37s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.95 0-2.59-1.86-4.4-4.51-4.4-3.07 0-4.87 2.3-4.87 4.68 0 .93.36 1.92.8 2.46a.32.32 0 0 1 .07.31c-.08.34-.27 1.09-.31 1.24-.05.2-.17.24-.38.15-1.42-.66-2.3-2.75-2.3-4.42 0-3.6 2.62-6.9 7.55-6.9 3.97 0 7.05 2.83 7.05 6.6 0 3.94-2.48 7.1-5.92 7.1-1.16 0-2.24-.6-2.61-1.31l-.71 2.64c-.26.98-.95 2.21-1.41 2.96.07.02.14.03.21.04A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-sans font-semibold text-[12px] tracking-[2px] uppercase text-white/40 mb-4">
            Shop
          </h4>
          {[
            "Best Sellers",
            "Cards",
            "Notebooks",
            "Stickers",
            "Totebags",
            "Prints & Frames",
            "Wall Accessories",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-sans text-[14px] text-white/60 hover:text-[#e8191a] py-1 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-sans font-semibold text-[12px] tracking-[2px] uppercase text-white/40 mb-4">
            Collections
          </h4>
          {[
            "Petits BJTM",
            "Weddings",
            "Labneh Theme",
            "Hummus Theme",
            "Amour Theme",
            "Gift Sets",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-sans text-[14px] text-white/60 hover:text-[#e8191a] py-1 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Company */}
        <div>
          <h4 className="font-sans font-semibold text-[12px] tracking-[2px] uppercase text-white/40 mb-4">
            Company
          </h4>
          {[
            "About",
            "Experiences",
            "Blog",
            "Press",
            "Stockists",
            "Careers",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-sans text-[14px] text-white/60 hover:text-[#e8191a] py-1 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Help */}
        <div>
          <h4 className="font-sans font-semibold text-[12px] tracking-[2px] uppercase text-white/40 mb-4">
            Help
          </h4>
          {[
            "FAQ",
            "Shipping & Returns",
            "Track Order",
            "Contact Us",
            "Wholesale",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-sans text-[14px] text-white/60 hover:text-[#e8191a] py-1 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-white/35">
          <p className="font-sans text-[13px]">
            © 2025 Beirut JTM. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Accessibility",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-[13px] hover:text-white/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <MarqueeBanner />
        <BestSellers />
        <ShopByCategory />
        <PetitsBJTM />
        <WeddingsCTA />
        <CustomizableCTA />
        <StationerySelection />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}