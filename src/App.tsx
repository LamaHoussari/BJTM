import { useState, useRef, useEffect } from "react";

import imgLogo from "@/imports/logo-1.png";
import imgHero from "@/imports/MacBookPro161/9abeb8731fe348252dea037676e224e84968e313.png";
import imgSun from "@/imports/sun.png";

import imgSanaHelwaCake from "@/imports/sana_helwa_cake.jpg";
import imgSanaHelwaIceCream from "@/imports/sana_helwa_ice_cream.jpg";
import imgValentine from "@/imports/Valentine.JPG";
import imgValentine1 from "@/imports/Valentine_1.JPG";
import imgPetitsBJTM from "@/imports/petits_bjtm.png";
import imgWeddings from "@/imports/ChatGPT_Image_Jul_21__2026__02_51_49_PM-1.png";
import imgWeddingBanner from "@/imports/weddingsbanner.png";
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
import imgCard1 from "@/imports/card 1.png";
import imgCard2 from "@/imports/card 2.png";
import imgCustomizable from "@/imports/customizable-1.png";
import imgGiftsBanner from "@/imports/gifts-banner.png";
import imgCreativeWorkshops from "@/imports/creative-workshops.png";
import imgCuratedTrip from "@/imports/curated trip 2.jpeg";
import imgPrivateGatherings from "@/imports/private gathering 2.jpeg";
import imgDesignedLocally from "@/imports/designed-locally.png";
import imgMadeThoughtfully from "@/imports/made-thoughtfully.png";
import imgSharedWithLove from "@/imports/shared-withlove.png";

const PINK = "#e8191a";
const BASE_URL = import.meta.env.BASE_URL;

const sitePath = (path: string) =>
  `${BASE_URL}${path.replace(/^\/+/, "")}`;

const routePath = (pathname: string) => {
  const relativePath = pathname.startsWith(BASE_URL)
    ? pathname.slice(BASE_URL.length)
    : pathname.replace(/^\/+/, "");
  return `/${relativePath.replace(/\/+$/, "")}`;
};

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
    "Gifts under $350",
  ],
  byRecipient: [
    "For him",
    "For her",
    "For the couple",
    "For the BFF",
    "For the Foodie",
    "For the Bride",
    "For the little ones",
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

const routeProducts: Record<
  string,
  {
    title: string;
    description: string;
    products: {
      name: string;
      price: string;
      image: string;
      tag?: string;
      filterTags?: string[];
    }[];
  }
> = {
  shop: {
    title: "Shop all",
    description:
      "Everyday pieces inspired by Beirut, made to be given and kept.",
    products: [
      {
        ...bestSellersProducts[0],
        filterTags: [
          "Best Sellers",
          "Totebags",
          "Food",
          "Beirut",
          "Petits BJTM",
        ],
      },
      {
        ...bestSellersProducts[1],
        filterTags: ["Best Sellers", "Wall Prints", "Food", "Beirut"],
      },
      {
        ...bestSellersProducts[2],
        filterTags: ["Best Sellers", "Wall Prints", "Amour", "Beirut"],
      },
      { ...bestSellersProducts[3], filterTags: ["Best Sellers", "Food"] },
      {
        ...bestSellersProducts[4],
        filterTags: ["Best Sellers", "Greeting Cards", "Amour"],
      },
      {
        ...stationeryProducts[0],
        filterTags: ["Greeting Cards", "Stationery", "Amour"],
      },
      {
        ...stationeryProducts[1],
        filterTags: ["Greeting Cards", "Stationery", "Amour"],
      },
      {
        ...stationeryProducts[2],
        filterTags: ["Greeting Cards", "Stationery", "Beirut"],
      },
      {
        ...stationeryProducts[3],
        filterTags: ["Greeting Cards", "Stationery", "Beirut"],
      },
    ],
  },
  weddings: {
    title: "Wedding collection",
    description: "Paper goods and keepsakes for celebrations full of love.",
    products: [
      {
        name: "Wedding Thank You Cards",
        price: "$18.00",
        image: imgWeddings,
        tag: "NEW",
      },
      {
        name: "Personal Stationery Set",
        price: "$24.00",
        image: imgCard1,
      },
      { name: "Bride & Groom Print", price: "$32.00", image: imgPoire },
      {
        name: "Wedding Name Stickers",
        price: "$12.00",
        image: imgBarPin,
      },
      { name: "Wedding Favor Tags", price: "$16.00", image: imgValentine },
    ],
  },
  gifts: {
    title: "Gifts",
    description: "Small joys for the people who make life feel like Beirut.",
    products: [
      ...bestSellersProducts,
      { name: "Beirut Sun Print", price: "$28.00", image: imgGimmeyzehSun },
    ],
  },
};

const experienceCards = [
  {
    number: "01",
    title: "Creative workshops",
    description: "Make, draw, and create with the Beirut JTM community.",
    image: imgCreativeWorkshops,
  },
  {
    number: "02",
    title: "The Curated Trip",
    description:
      "See the city through the colours, details, and stories we love.",
    image: imgCuratedTrip,
  },
  {
    number: "03",
    title: "Private gatherings",
    description:
      "Thoughtful, joyful experiences for your next special occasion.",
    image: imgPrivateGatherings,
  },
];

const retailerColumns = [
  [
    {
      city: "Keserwan",
      retailers: ["Retailer One, Area One", "Retailer Two, Area Two"],
    },
    {
      city: "Metn",
      retailers: [
        "Retailer Three, Area Three",
        "Retailer Four, Area Four",
        "Retailer Five, Area Five",
        "Retailer Six, Area Six",
        "Retailer Seven, Area Seven",
        "Retailer Eight, Area Eight",
        "Retailer Nine, Area Nine",
        "Retailer Ten, Area Ten",
      ],
    },
  ],
  [
    {
      city: "Beirut",
      retailers: [
        "Retailer Eleven, Area Eleven",
        "Retailer Twelve, Area Twelve",
        "Retailer Thirteen, Area Thirteen",
        "Retailer Fourteen, Area Fourteen",
        "Retailer Fifteen, Area Fifteen",
      ],
    },
    {
      city: "North",
      retailers: [
        "Retailer Sixteen, Area Sixteen",
        "Retailer Seventeen, Area Seventeen",
        "Retailer Eighteen, Area Eighteen",
        "Retailer Nineteen, Area Nineteen",
      ],
    },
  ],
];

const mainLocationUrl =
  "https://www.google.com/maps/search/?api=1&query=Beirut%20Je%20t%27aime%20Gemmayze";

const blogArticles = [
  {
    image: imgGimmeyzehSun,
    category: "City & culture",
    title: "A morning under the Gimmeyzeh sun",
    excerpt:
      "A few favourite corners, colours, and rituals from one of Beirut's most loved neighbourhoods.",
    date: "August 2025",
  },
  {
    image: imgValentine,
    category: "Behind the design",
    title: "How a little card becomes a big feeling",
    excerpt:
      "The sketches, words, and Lebanese humour behind our most-loved greeting cards.",
    date: "July 2025",
  },
  {
    image: imgPoire,
    category: "New collection",
    title: "Meet Poire, Pomme, and their friends",
    excerpt:
      "A closer look at the playful fruit characters brightening up our newest print series.",
    date: "June 2025",
  },
  {
    image: imgLabnehTote,
    category: "Everyday Beirut",
    title: "What is in our Beirut tote?",
    excerpt:
      "A small inventory of the objects, snacks, and essentials that make a day in the city.",
    date: "May 2025",
  },
  {
    image: imgBonjourHabibi,
    category: "Notes from the studio",
    title: "Words we grew up with",
    excerpt:
      "Why familiar phrases, warm greetings, and everyday language are at the heart of BJTM.",
    date: "April 2025",
  },
];

type ProductCustomizationField =
  | {
      name: string;
      label: string;
      type: "text";
      placeholder: string;
      maxLength: number;
    }
  | {
      name: string;
      label: string;
      type: "select" | "choice";
      options: string[];
    }
  | {
      name: string;
      label: string;
      type: "visual";
      options: { label: string; image: string }[];
    };

type Product = {
  name: string;
  price: string;
  image: string;
  badge: string;
  category: string;
  description: string;
  details: string[];
  gallery: string[];
  colors: string[];
  size: string;
  customization?: ProductCustomizationField[];
};

const productCatalog: Product[] = [
  {
    name: "Labneh Lover Tote",
    price: "$22.00",
    image: imgLabnehTote,
    badge: "Best seller",
    category: "Totebags",
    description:
      "A bright cotton tote made for everyday Beirut errands, market runs, and gifting with a little extra joy.",
    details: [
      "100% cotton canvas",
      "Roomy interior with reinforced handles",
      "Designed in Beirut and printed in small batches",
    ],
    gallery: [imgLabnehTote, imgBonjourHabibi, imgZaatarPrint],
    colors: ["Sunset pink", "Oat cream", "Terracotta"],
    size: "One size",
  },
  {
    name: "You Are the Zaatar Print",
    price: "$28.00",
    image: imgZaatarPrint,
    badge: "New",
    category: "Wall Prints",
    description:
      "A warm, cheerful print celebrating Beirut's favourite food memories, kitchen table rituals, and home comforts.",
    details: [
      "Artsy, colourful artwork on premium matte stock",
      "Frame not included",
      "Print dimensions: 12 x 16 in",
    ],
    gallery: [imgZaatarPrint, imgPoire, imgGimmeyzehSun],
    colors: ["Saffron", "Rose", "Olive"],
    size: "12 x 16 in",
  },
  {
    name: "Bonjour Habibi Print",
    price: "$28.00",
    image: imgBonjourHabibi,
    badge: "Popular",
    category: "Wall Prints",
    description:
      "A playful greeting-card-inspired print with a Beirut-meets-love energy that feels instantly familiar.",
    details: [
      "Designed with soft pastel tones",
      "Perfect for bedrooms, studios, or gifting",
      "Printed on archival quality paper",
    ],
    gallery: [imgBonjourHabibi, imgValentine1, imgGimmeyzehSun],
    colors: ["Coral", "Lemon", "Blush"],
    size: "11 x 14 in",
  },
  {
    name: "Sana Helwa (Cake)",
    price: "$12.00",
    image: imgSanaHelwaCake,
    badge: "Sweet pick",
    category: "Greeting Cards",
    description:
      "A little card for happy moments, heartfelt wishes, and all the love that deserves a sweet little message.",
    details: [
      "Folded card with envelope included",
      "Great for birthdays, thank-you notes, and love notes",
      "Made with textured paper stock",
    ],
    gallery: [imgSanaHelwaCake, imgValentine, imgValentine1],
    colors: ["Cream", "Pink", "Berry"],
    size: "A6",
  },
  {
    name: "Valentine Cards Set",
    price: "$14.00",
    image: imgValentine1,
    badge: "Gift set",
    category: "Greeting Cards",
    description:
      "A set of lovable mini cards packed with cheeky humour, affection, and Beirut charm for all kinds of love.",
    details: [
      "Set of 4 cards with matching envelopes",
      "Designed for birthdays, anniversaries, and festive moments",
      "Made with a soft-touch finish",
    ],
    gallery: [imgValentine1, imgValentine, imgSanaHelwaCake],
    colors: ["Rose", "Cream", "Blush"],
    size: "4-card set",
  },
  {
    name: "Heart Card",
    price: "$8.00",
    image: imgStat2,
    badge: "Best seller",
    category: "Stationery",
    description:
      "A classic card with a warm, familiar tone and just enough Beirut personality to make every note feel personal.",
    details: [
      "Includes envelope",
      "Suitable for birthdays, love notes, and thank you cards",
      "Printed on thick premium stock",
    ],
    gallery: [imgStat2, imgStat1, imgStat3],
    colors: ["Cherry", "Peach", "Ivory"],
    size: "A6",
  },
  {
    name: "Bride & Groom Print",
    price: "$32.00",
    image: imgWeddings,
    badge: "Made for you",
    category: "Wedding prints",
    description:
      "A keepsake of your wedding day, personalized with your names, city, and year.",
    details: [
      "Personalized to order",
      "Printed on premium matte paper",
      "Frame not included",
    ],
    gallery: [imgWeddings, imgCustomizable],
    colors: [],
    size: "12 x 16 in",
    customization: [
      {
        name: "names",
        label: "Names",
        type: "text",
        placeholder: "Enter both names",
        maxLength: 36,
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Enter your city",
        maxLength: 30,
      },
      {
        name: "year",
        label: "Year",
        type: "text",
        placeholder: "e.g. 2026",
        maxLength: 4,
      },
    ],
  },
  {
    name: "Wedding Name Stickers",
    price: "$12.00",
    image: imgBarPin,
    badge: "Made for you",
    category: "Wedding stationery",
    description:
      "A set of wedding stickers with your chosen name, ready to add a personal touch to your celebration.",
    details: [
      "Add the bride's or groom's name",
      "Printed on quality adhesive paper",
      "A sweet finishing touch for wedding favors",
    ],
    gallery: [imgBarPin, imgWeddings],
    colors: [],
    size: "Set of 24",
    customization: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Bride's or groom's name",
        maxLength: 20,
      },
    ],
  },
  {
    name: "Personal Stationery Set",
    price: "$24.00",
    image: imgCustomizable,
    badge: "Made for you",
    category: "Personal stationery",
    description:
      "Make it yours: choose a stationery design, lettering style, and ink colour, then add your name.",
    details: [],
    gallery: [imgCard1, imgCard2],
    colors: [],
    size: "Set of 20",
    customization: [
      {
        name: "visual",
        label: "Design",
        type: "visual",
        options: [
          { label: "Card 1", image: imgCard1 },
          { label: "Card 2", image: imgCard2 },
        ],
      },
      {
        name: "font",
        label: "Font",
        type: "select",
        options: ["Festivo Letters No1", "Classic Serif", "Modern Sans"],
      },
      {
        name: "color",
        label: "Ink colour",
        type: "select",
        options: ["Black", "Dusty rose", "Sage green"],
      },
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Enter the name for your stationery",
        maxLength: 36,
      },
    ],
  },
];

const productLookup = Object.fromEntries(
  productCatalog.map((product) => [product.name, product]),
);

// ─── Navigation ──────────────────────────────────────────────────────────────

function Navigation() {
  const [activeMenu, setActiveMenu] = useState<
    "shop" | "gifts" | "weddings" | null
  >(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWeddingOpen, setMobileWeddingOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const currentPath = routePath(window.location.pathname);

  const openMenu = (menu: "shop" | "gifts" | "weddings") => {
    clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const linkCls =
    "font-display text-[17px] text-black hover:text-[#e8191a] transition-colors py-2";
  const navLinkCls = (href: string) =>
    `${linkCls}${currentPath === href ? " !text-[#e8191a]" : ""}`;
  const menuItemCls =
    "block w-fit font-sans text-[14px] leading-5 text-black hover:text-[#e8191a] py-[5px] transition-colors";
  const colHeadCls =
    "font-sans text-[11px] font-semibold text-black/40 uppercase tracking-[2px] mb-4";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/8">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between gap-8 relative">
        {/* Logo */}
        <a href={sitePath("/")} className="flex-shrink-0 flex items-center">
          <img
            src={imgLogo}
            alt="Beirut JTM"
            className="h-auto w-50"
            style={{ marginBottom: "8px", marginLeft: "0px" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {/* Shop */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("shop")}
            onMouseLeave={scheduleClose}
          >
            <a href={sitePath("/shop")} className={navLinkCls("/shop")}>
              Shop
            </a>
          </div>

          {/* Weddings */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("weddings")}
            onMouseLeave={scheduleClose}
          >
            <a
              href={sitePath("/weddings")}
              className={navLinkCls("/weddings")}
            >
              Weddings
            </a>
          </div>

          {/* Gifts */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("gifts")}
            onMouseLeave={scheduleClose}
          >
            <a href={sitePath("/gifts")} className={navLinkCls("/gifts")}>
              Gifts
            </a>
          </div>

          {/* Remaining links */}
          {[
            { label: "Experiences", href: "/experiences" },
            { label: "About", href: "/about" },
            { label: "Beirut", href: "/blog" },
          ].map(({ label, href }) => (
            <a key={label} href={sitePath(href)} className={navLinkCls(href)}>
              {label}
            </a>
          ))}

          {/* Find Us CTA */}
          <a
            href={sitePath("/find-us")}
            className="font-sans text-[13px] font-semibold text-white rounded-full px-4 py-1.5 hover:opacity-85 transition-opacity"
            style={{ backgroundColor: PINK }}
          >
            Find Us
          </a>
        </nav>

        {/* Icons */}
        <div className="relative flex items-center gap-1">
          {searchOpen && (
            <form
              className="absolute right-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2 flex w-[min(72vw,300px)] gap-2 bg-white border border-black/15 shadow-lg p-2"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href = sitePath(
                  `/shop?search=${encodeURIComponent(searchTerm)}`,
                );
              }}
            >
              <input
                autoFocus
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search the collection"
                className="min-w-0 flex-1 border-b border-black/25 px-2 py-1.5 font-sans text-[14px] focus:outline-none focus:border-[#e8191a]"
                aria-label="Search the collection"
              />
              <button
                type="submit"
                className="font-sans text-[12px] font-semibold text-white px-3 py-1.5 rounded-full hover:opacity-85 transition-opacity"
                style={{ backgroundColor: PINK }}
              >
                Search
              </button>
            </form>
          )}
          <button
            className={`p-2.5 text-black hover:text-[#e8191a] transition-colors${searchOpen ? " text-[#e8191a]" : ""}`}
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8.5" cy="8.5" r="6" />
              <path d="M13 13L18 18" />
            </svg>
          </button>
          <a
            href={sitePath("/profile")}
            className="p-2.5 text-black hover:text-[#e8191a] transition-colors"
            aria-label="Account"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="10" cy="6.5" r="4" />
              <path d="M2 18c0-4.418 3.582-7 8-7s8 2.582 8 7" />
            </svg>
          </a>
          <button
            className="p-2.5 text-black hover:text-[#e8191a] transition-colors"
            aria-label="Cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 7V5a4 4 0 0 1 8 0v2" />
              <rect x="2" y="7" width="16" height="12" rx="1.5" />
            </svg>
          </button>
          <button
            className="md:hidden p-2.5 text-black"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M5 5l12 12M17 5L5 17" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Shop mega menu */}
      {activeMenu === "shop" && (
        <div
          className="hidden md:block absolute top-full inset-x-0 w-screen bg-white border-t border-b border-black/10 shadow-xl shadow-black/10 z-50"
          onMouseEnter={() => openMenu("shop")}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full max-w-[1600px] mx-auto grid grid-cols-5 px-6 md:px-10 lg:px-16">
            {/* Best Sellers */}
            <section className="min-w-0 py-9 px-5 lg:px-8">
              <p className={colHeadCls}>Best Sellers</p>
              {shopMenuData.bestSellers.map((item) => (
                <a key={item} href="#" className={menuItemCls}>
                  {item}
                </a>
              ))}
            </section>
            {/* Categories */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Categories</p>
              {shopMenuData.categories.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`${menuItemCls}${item === "Shop All" ? " font-semibold mt-2 block" : ""}`}
                >
                  {item}
                </a>
              ))}
            </section>
            {/* Themes */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Themes</p>
              {shopMenuData.themes.map((item) => (
                <a key={item} href="#" className={menuItemCls}>
                  {item}
                </a>
              ))}
            </section>
            {/* Petits BJTM */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Petits BJTM</p>
              {shopMenuData.petitsBJTM.map((item) => (
                <a key={item} href="#" className={menuItemCls}>
                  {item}
                </a>
              ))}
            </section>
            {/* Weddings */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>Weddings</p>
              {shopMenuData.weddings.map((item) => (
                <a key={item} href="#" className={menuItemCls}>
                  {item}
                </a>
              ))}
            </section>
          </div>
        </div>
      )}

      {/* Weddings menu */}
      {activeMenu === "weddings" && (
        <div
          className="hidden md:block absolute top-full inset-x-0 w-screen bg-white border-t border-b border-black/10 shadow-xl shadow-black/10 z-50"
          onMouseEnter={() => openMenu("weddings")}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-[1600px] mx-auto px-6 py-8 md:px-10 lg:px-16">
            <p className={colHeadCls}>Wedding collection</p>
            <div className="flex flex-col items-start">
              <a
                href={sitePath("/weddings")}
                className={`${menuItemCls} font-semibold mb-2`}
              >
                Shop all weddings
              </a>
              {shopMenuData.weddings.map((item) => (
                <a
                  key={item}
                  href={sitePath("/weddings")}
                  className={menuItemCls}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gifts mega menu */}
      {activeMenu === "gifts" && (
        <div
          className="hidden md:block absolute top-full inset-x-0 w-screen bg-white border-t border-b border-black/10 shadow-xl shadow-black/10 z-50"
          onMouseEnter={() => openMenu("gifts")}
          onMouseLeave={scheduleClose}
        >
          <div
            className="w-full max-w-[1600px] mx-0 grid grid-cols-2 px-6 md:px-10 lg:px-16"
            style={{ maxWidth: 640 }}
          >
            {/* By Price */}
            <section className="min-w-0 py-9 px-5 lg:px-8">
              <p className={colHeadCls}>By Price</p>
              {giftsMenuData.byPrice.map((item) => (
                <a key={item} href="#" className={menuItemCls}>
                  {item}
                </a>
              ))}
            </section>
            {/* By Recipient */}
            <section className="min-w-0 py-9 px-5 lg:px-8 border-l border-black/10">
              <p className={colHeadCls}>By Recipient</p>
              {giftsMenuData.byRecipient.map((item) => (
                <a key={item} href="#" className={menuItemCls}>
                  {item}
                </a>
              ))}
            </section>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-6 py-6 flex flex-col gap-5">
          {[
            { label: "Shop", href: "/shop" },
            { label: "Gifts", href: "/gifts" },
            { label: "Experiences", href: "/experiences" },
            { label: "About", href: "/about" },
            { label: "Beirut", href: "/blog" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={sitePath(href)}
              className={`font-display text-[22px]${currentPath === href ? " !text-[#e8191a]" : " text-black"}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <div>
            <button
              type="button"
              className={`font-display text-[22px]${currentPath === "/weddings" ? " !text-[#e8191a]" : " text-black"}`}
              aria-expanded={mobileWeddingOpen}
              onClick={() => setMobileWeddingOpen((open) => !open)}
            >
              Weddings
            </button>
            {mobileWeddingOpen && (
              <div className="flex flex-col items-start gap-2 pl-4 pt-3">
                <a
                  href={sitePath("/weddings")}
                  className={menuItemCls}
                  onClick={() => setMobileOpen(false)}
                >
                  Shop all weddings
                </a>
                {shopMenuData.weddings.map((item) => (
                  <a
                    key={item}
                    href={sitePath("/weddings")}
                    className={menuItemCls}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href={sitePath("/find-us")}
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
          Stationery &amp; lifestyle goods crafted with love for the city we
          adore
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
      <img src={imgSun} alt="" className="h-[64px] w-auto flex-shrink-0" />
    </div>
  );

  return (
    <div className="bg-[#ffeee4] overflow-hidden py-7 border-y border-black/8">
      <div className="flex animate-marquee" style={{ width: "max-content" }}>
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
  onSelect,
}: {
  name: string;
  price: string;
  image: string;
  tag?: string;
  onSelect?: (name: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(name)}
      className="group flex-shrink-0 w-full flex flex-col text-left"
    >
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
        <span
          style={{ backgroundColor: PINK }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[12px] font-sans font-semibold px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap"
        >
          View item
        </span>
      </div>
      <h3 className="font-sans font-semibold text-[17px] text-black">{name}</h3>
      <p className="font-sans font-light text-[15px] text-black/60 mt-0.5">
        {price}
      </p>
    </button>
  );
}

const collectionBanners = {
  weddings: imgWeddingBanner,
  gifts: imgGiftsBanner,
} as const;

function CollectionBanner({ route }: { route: "weddings" | "gifts" }) {
  const image = collectionBanners[route];

  return (
    <section className="w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="block h-[220px] w-full object-cover md:h-[300px]"
      />
    </section>
  );
}

function BestSellers() {
  const [index, setIndex] = useState(0);
  const perView = 3;
  const max = bestSellersProducts.length - perView;

  const visible = bestSellersProducts.slice(index, index + perView);

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
            <ProductCard
              key={`${index}-${i}`}
              {...p}
              onSelect={(name) => {
                window.location.hash = `#product=${encodeURIComponent(name)}`;
              }}
            />
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
    <section className="relative overflow-hidden" style={{ minHeight: 480 }}>
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
            A curated line of small-format treasures — prints, stickers,
            notepads, and totebags sized for everyday joy.
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
            Celebrate love with our customizable wedding collection. Perfect
            cards, prints, and gifts to commemorate your special day or to give
            to the happy couple.
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
          Put your name, your city, your love on it. Our custom range lets you
          personalise everything from totebags to coasters — for yourself or as
          the perfect gift.
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
          <ProductCard
            key={p.name}
            {...p}
            onSelect={(name) => {
              window.location.hash = `#product=${encodeURIComponent(name)}`;
            }}
          />
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
          Beirut JTM — Beirut Je T'aime — started as a love letter to a city
          that refuses to be forgotten. We create stationery and lifestyle goods
          that capture the spirit, colour, and warmth of Beirut life.
        </p>
        <p className="font-sans text-[16px] text-black/65 leading-[1.75] max-w-[440px] mb-8">
          Every product is designed locally, printed carefully, and packed with
          that signature Lebanese joie de vivre. From the Gimmeyzeh sun to the
          Hummus bowl, our collections celebrate the everyday beauty of our
          city.
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
    title: "You Have to Kiss Many Frogs: The Story of Our Valentine Card",
    excerpt:
      "A frog, a crown, and a very Lebanese sense of humour — how our Valentine collection came to life.",
    date: "February 2025",
  },
  {
    image: imgPoire,
    tag: "New Collection",
    title: "Poire, Pomme & Friends: The French Fruit Print Series",
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
            Beirut Journal
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

function Experiences() {
  return (
    <section
      id="experiences"
      className="border-t border-black/8 px-8 py-16 md:px-16 md:py-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[34px] leading-none text-black md:text-[44px]">
              Experience Beirut
            </h2>
            <p className="mt-2 font-sans text-[15px] font-medium text-black/55">
              Make, wander, and gather with us
            </p>
          </div>
          <a
            href={sitePath("/experiences")}
            className="inline-flex items-center gap-2 border-b border-black pb-0.5 font-sans text-[15px] font-medium text-black transition-colors hover:border-[#e8191a] hover:text-[#e8191a]"
          >
            See all experiences
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {experienceCards.map((card) => (
            <a
              key={card.number}
              href={sitePath("/experiences")}
              className="group overflow-hidden bg-[#ffeee4]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ffeee4]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="mb-3 font-sans text-[11px] font-semibold tracking-[2px] text-[#e8191a]">
                  {card.number}
                </p>
                <h3 className="font-display text-[28px] leading-none text-black transition-colors group-hover:text-[#e8191a]">
                  {card.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterTitleWidth, setNewsletterTitleWidth] = useState<number>();
  const newsletterTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = newsletterTitleRef.current;
    if (!title) return;

    const updateWidth = () =>
      setNewsletterTitleWidth(title.getBoundingClientRect().width);
    const observer = new ResizeObserver(updateWidth);
    observer.observe(title);
    updateWidth();

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 py-12 px-8 md:px-16">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-start gap-5">
          <div>
            <h3
              ref={newsletterTitleRef}
              className="w-fit font-display text-[32px] md:text-[40px] leading-none mb-2"
            >
              Stay in the loop
            </h3>
            <p className="font-sans text-[15px] text-white/55">
              New drops, events, and love letters from Beirut.
            </p>
          </div>
          <form
            className="flex gap-0 max-w-full"
            style={{ width: newsletterTitleWidth }}
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
            Stationery &amp; lifestyle inspired by Beirut — made with love.
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
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
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
            "Beirut",
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

function ProductDetailPage({
  product,
  onBack,
}: {
  product: (typeof productCatalog)[number];
  onBack: () => void;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [customizationValues, setCustomizationValues] = useState<
    Record<string, string>
  >(() =>
    Object.fromEntries(
      (product.customization ?? []).map((field) => [
        field.name,
        field.type === "text"
          ? ""
          : field.type === "visual"
            ? field.options[0].label
            : field.options[0],
      ]),
    ),
  );
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.size);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [hasApprovedProof, setHasApprovedProof] = useState(false);

  const relatedProducts = productCatalog
    .filter((item) => item.name !== product.name)
    .slice(0, 4);

  const sizeOptions = product.size.includes("/")
    ? product.size.split("/").map((option) => option.trim())
    : [product.size];

  const customizationFields = product.customization ?? [];
  const hasCustomization = customizationFields.length > 0;
  const isCustomizationComplete = customizationFields.every(
    (field) => customizationValues[field.name]?.trim(),
  );
  const canAddToCart =
    !hasCustomization || (isCustomizationComplete && hasApprovedProof);

  const updateCustomizationValue = (name: string, value: string) => {
    setCustomizationValues((current) => ({ ...current, [name]: value }));
    setHasApprovedProof(false);
    setIsAdded(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-[1400px] px-6 py-8 md:px-10 md:py-10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[1.6px] text-black/70 hover:text-[#e8191a] transition-colors"
        >
          <span aria-hidden="true">←</span>
          Back to shop
        </button>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
              {(() => {
                const visualField = customizationFields.find(
                  (field) => field.type === "visual",
                );
                const selectedVisual =
                  visualField?.type === "visual"
                    ? visualField.options.find(
                        (option) =>
                          option.label ===
                          customizationValues[visualField.name],
                      )
                    : undefined;
                const previewImage =
                  selectedVisual?.image ??
                  product.gallery[selectedImageIndex] ??
                  product.image;

                return (
                  <div className="relative">
                    <img
                      src={previewImage}
                      alt={product.name}
                      className="h-[520px] w-full object-cover md:h-[640px]"
                    />
                    {product.name === "Personal Stationery Set" && (
                      <span
                        aria-live="polite"
                        className={`pointer-events-none absolute left-[49%] w-[60%] -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[clamp(1.25rem,3vw,2.75rem)] leading-tight ${
                          customizationValues.font === "Classic Serif"
                            ? "font-serif"
                            : customizationValues.font === "Modern Sans"
                              ? "font-sans"
                              : "font-display"
                        }`}
                        style={{
                          top: "calc(50% + 100px)",
                          color:
                            customizationValues.color === "Dusty rose"
                              ? "#a45e68"
                              : customizationValues.color === "Sage green"
                                ? "#65755e"
                                : "#25221f",
                        }}
                      >
                        {customizationValues.name?.trim() || "YOUR NAME"}
                      </span>
                    )}
                  </div>
                );
              })()}
            </div>
            {product.gallery.length > 1 &&
              !customizationFields.some((field) => field.type === "visual") && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {product.gallery.map((image, index) => (
                    <button
                      key={`${product.name}-${index}`}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        index === selectedImageIndex
                          ? "border-black shadow-md"
                          : "border-black/10 hover:border-black/30"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="h-24 w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
          </div>

          <div className="pt-2 md:pt-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a]">
              {product.category}
            </p>
            <h1 className="mt-3 font-display text-[42px] leading-none text-black md:text-[54px]">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <span className="font-sans text-[34px] font-semibold text-black">
                {product.price}
              </span>
              {!hasCustomization && (
                <span className="rounded-full bg-[#ffeee4] px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[1.5px] text-black">
                  {product.badge}
                </span>
              )}
            </div>

            <p className="mt-5 max-w-[520px] font-sans text-[16px] leading-relaxed text-black/65">
              {product.description}
            </p>

            <div className="mt-7 space-y-5 rounded-2xl border border-black/10 bg-white p-5">
              {customizationFields.map((field) => (
                <div key={field.name}>
                  {field.type === "text" ? (
                    <>
                      <label
                        htmlFor={`${product.name}-${field.name}`}
                        className="mb-2 block font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45"
                      >
                        {field.label}
                      </label>
                      <input
                        id={`${product.name}-${field.name}`}
                        type="text"
                        value={customizationValues[field.name] ?? ""}
                        onChange={(event) =>
                          updateCustomizationValue(
                            field.name,
                            event.target.value,
                          )
                        }
                        maxLength={field.maxLength}
                        placeholder={field.placeholder}
                        required
                        aria-required="true"
                        className="w-full rounded-xl border border-black/15 bg-[#f9f5f2] px-4 py-3 font-sans text-[15px] text-black placeholder:text-black/35 focus:border-[#e8191a] focus:outline-none"
                      />
                    </>
                  ) : field.type === "visual" ? (
                    <>
                      <p className="mb-2 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                        {field.label}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {field.options.map((option) => (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() =>
                              updateCustomizationValue(
                                field.name,
                                option.label,
                              )
                            }
                            aria-pressed={
                              customizationValues[field.name] === option.label
                            }
                            className={`overflow-hidden rounded-xl border text-left transition-all ${
                              customizationValues[field.name] === option.label
                                ? "border-black ring-1 ring-black"
                                : "border-black/15 hover:border-black/30"
                            }`}
                          >
                            <img
                              src={option.image}
                              alt=""
                              className="h-24 w-full object-cover"
                            />
                            <span className="block px-3 py-2 font-sans text-[12px] text-black/75">
                              {option.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : field.type === "choice" ? (
                    <>
                      <p className="mb-2 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                        {field.label}
                      </p>
                      <div
                        className="flex flex-wrap gap-2"
                        role="group"
                        aria-label={field.label}
                      >
                        {field.options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              updateCustomizationValue(field.name, option)
                            }
                            aria-pressed={
                              customizationValues[field.name] === option
                            }
                            className={`rounded-xl border px-4 py-3 font-sans text-[13px] transition-all ${
                              customizationValues[field.name] === option
                                ? "border-black bg-black text-white"
                                : "border-black/15 bg-white text-black/75 hover:border-black/30"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <label className="block">
                      <span className="mb-2 block font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                        {field.label}
                      </span>
                      <select
                        value={customizationValues[field.name] ?? ""}
                        onChange={(event) =>
                          updateCustomizationValue(
                            field.name,
                            event.target.value,
                          )
                        }
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 font-sans text-[15px] text-black focus:border-[#e8191a] focus:outline-none"
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                </div>
              ))}

              {product.colors.length > 0 && (
                <div>
                  <p className="mb-2 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                    Colour
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`rounded-full border px-3 py-1.5 font-sans text-[13px] transition-all ${
                          selectedColor === color
                            ? "border-black bg-black text-white"
                            : "border-black/15 bg-white text-black/75 hover:border-black/30"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!hasCustomization && sizeOptions.length > 0 && (
                <div>
                  <p className="mb-2 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                    Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedSize(option)}
                        className={`rounded-full border px-3 py-1.5 font-sans text-[13px] transition-all ${
                          selectedSize === option
                            ? "border-black bg-black text-white"
                            : "border-black/15 bg-white text-black/75 hover:border-black/30"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="mb-2 font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                  Quantity
                </p>
                <div className="flex w-fit items-center overflow-hidden rounded-full border border-black/15 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="h-11 w-11 text-lg text-black transition-colors hover:bg-black/5"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="min-w-[52px] text-center font-sans text-[15px] font-semibold text-black">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => value + 1)}
                    className="h-11 w-11 text-lg text-black transition-colors hover:bg-black/5"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {hasCustomization && (
              <section className="mt-5 bg-[#ffeee4] p-5">
                <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[1.8px] text-black/65">
                  Final review
                </h2>
                <p className="mt-2 font-serif text-[15px] leading-7 text-black/65">
                  Please verify your personalization is accurate. Your order
                  will go to print as entered, and edits cannot be made once
                  approved. All sales are final.
                </p>
                <label className="mt-4 flex items-start gap-3 font-serif text-[15px] text-black/70">
                  <input
                    type="checkbox"
                    checked={hasApprovedProof}
                    disabled={!isCustomizationComplete}
                    onChange={(event) =>
                      setHasApprovedProof(event.target.checked)
                    }
                    className="mt-1 h-5 w-5 accent-[#e8191a] disabled:cursor-not-allowed"
                  />
                  <span>I have reviewed and approve</span>
                </label>
                {!isCustomizationComplete && (
                  <p className="mt-2 font-sans text-[12px] text-black/55">
                    Complete all personalization fields to review your proof.
                  </p>
                )}
              </section>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsAdded(true)}
                disabled={!canAddToCart}
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: PINK,
                  opacity: canAddToCart ? 1 : 0.45,
                  cursor: canAddToCart ? "pointer" : "not-allowed",
                }}
              >
                {isAdded ? "Added to cart" : "Add to cart"}
              </button>
              <button
                type="button"
                disabled={!canAddToCart}
                className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white px-7 py-3 text-[14px] font-semibold text-black transition-colors hover:border-black/40"
                style={{
                  opacity: canAddToCart ? 1 : 0.45,
                  cursor: canAddToCart ? "pointer" : "not-allowed",
                }}
              >
                Buy now
              </button>
            </div>

            {product.details.length > 0 && (
              <ul className="mt-8 space-y-3 border-t border-black/10 pt-6">
                {product.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 font-sans text-[15px] text-black/75"
                  >
                    <span
                      className="mt-1 h-2 w-2 rounded-full"
                      style={{ backgroundColor: PINK }}
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
              <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-3">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                  Delivery
                </span>
                <span className="font-sans text-[13px] font-medium text-black">
                  Ships in 3–5 days
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 pt-3">
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[2px] text-black/45">
                  Returns
                </span>
                <span className="font-sans text-[13px] font-medium text-black">
                  30-day easy returns
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 border-t border-black/10 pt-12">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-black/40">
                You may also like
              </p>
              <h2 className="font-display text-[32px] leading-none text-black md:text-[42px]">
                More Beirut favourites
              </h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                price={item.price}
                image={item.image}
                tag={item.badge}
                onSelect={(name) => {
                  window.location.hash = `#product=${encodeURIComponent(name)}`;
                }}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function DestinationPage({
  page,
  route,
}: {
  route: string;
  page: {
    title: string;
    description: string;
    products: {
      name: string;
      price: string;
      image: string;
      tag?: string;
      filterTags?: string[];
    }[];
  };
}) {
  const [selectedFilter, setSelectedFilter] = useState("All products");
  const isShopPage = page.title === "Shop all";
  const filterOptions = [
    "All products",
    ...shopMenuData.categories.filter((item) => item !== "Shop All"),
    ...shopMenuData.themes,
    "Petits BJTM",
  ];
  const visibleProducts = isShopPage
    ? page.products.filter(
        (product) =>
          selectedFilter === "All products" ||
          product.filterTags?.includes(selectedFilter),
      )
    : page.products;

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {(route === "weddings" || route === "gifts") && (
        <CollectionBanner route={route} />
      )}
      <main className="max-w-[1600px] mx-auto px-6 py-10 md:px-10 md:py-14">
        <div className="flex flex-col gap-6 border-b border-black/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-black/40 mb-3">
              Beirut JTM / Collection
            </p>
            <h1 className="font-display text-[48px] md:text-[68px] leading-none">
              {page.title}
            </h1>
            <p className="font-sans text-[15px] text-black/60 mt-3 max-w-[480px]">
              {page.description}
            </p>
          </div>
          <div className="flex items-center gap-4 font-sans text-[13px]">
            <span className="text-black/50">
              {visibleProducts.length} products
            </span>
            {isShopPage && (
              <label className="flex items-center gap-2">
                <span className="sr-only">Filter products</span>
                <select
                  value={selectedFilter}
                  onChange={(event) => setSelectedFilter(event.target.value)}
                  className="border-b border-black bg-transparent py-2 pr-8 focus:outline-none"
                >
                  {filterOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            )}
            <label className="flex items-center gap-2">
              <span className="sr-only">Sort products</span>
              <select className="border-b border-black bg-transparent py-2 pr-8 focus:outline-none">
                <option>Featured</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-10">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
              onSelect={(name) => {
                window.location.hash = `#product=${encodeURIComponent(name)}`;
              }}
            />
          ))}
        </div>
        {isShopPage && visibleProducts.length === 0 && (
          <p className="font-sans text-[15px] text-black/60 pt-10">
            No products found in this collection yet.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

function FindUsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="max-w-[1400px] mx-auto px-6 py-10 md:px-10 md:py-14">
        <div className="border-b border-black/15 pb-8 md:pb-10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a] mb-4">
            Beirut JTM / Find Us
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h1 className="font-display text-[54px] md:text-[78px] leading-none">
              Come say hi
            </h1>
            <p className="font-sans text-[16px] text-black/65 leading-relaxed max-w-[390px]">
              Find Beirut JTM in our neighbourhood and with a few lovely local
              retailers around the city.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 mt-12">
          <section className="md:order-2">
            <div className="border-b border-black/15 pb-4 mb-8">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a] mb-2">
                  Retailers
                </p>
                <h2 className="font-display text-[34px] leading-none">
                  Find Us at
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-7 pl-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0">
              {retailerColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-7 md:space-y-8">
                  {column.map((group) => (
                    <li key={group.city}>
                      <h3 className="font-sans text-[18px] font-bold leading-none mb-3">
                        {group.city}
                      </h3>
                      <ul className="space-y-1.5">
                        {group.retailers.map((retailer) => (
                          <li
                            key={retailer}
                            className="font-sans text-[16px] leading-[1.45] text-black/85"
                          >
                            {retailer}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          <section className="md:order-1">
            <div className="flex items-end justify-between border-b border-black/15 pb-4 mb-2">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a] mb-2">
                  Main location
                </p>
                <h2 className="font-display text-[34px] leading-none">
                  Gemmayzeh
                </h2>
              </div>
              <a
                href={mainLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] font-semibold border-b border-black pb-0.5 hover:text-[#e8191a] hover:border-[#e8191a] transition-colors"
              >
                Open map
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0eb]">
              <iframe
                title="Beirut Je T'aime main location in Gemmayzeh"
                src="https://www.google.com/maps?q=Beirut%20Je%20t%27aime%20Gemmayze%20Beirut&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ExperiencesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="max-w-[1400px] mx-auto px-6 py-12 md:px-10 md:py-16">
        <div className="border-b border-black/15 pb-8 md:pb-10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a] mb-4">
            Beirut JTM / Experiences
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h1 className="font-display text-[52px] md:text-[76px] leading-none">
              Coming soon
            </h1>
            <p className="font-sans text-[16px] text-black/65 leading-relaxed max-w-[390px]">
              We are creating new ways to experience Beirut together. Keep an
              eye out for what is next.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12">
          {experienceCards.map((card) => (
            <article
              key={card.number}
              className="overflow-hidden bg-[#ffeee4] border border-black/10 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f0eb]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <span className="font-sans text-[12px] font-semibold tracking-[2px] text-[#e8191a]">
                  {card.number}
                </span>
                <div className="mt-12">
                  <h2 className="font-display text-[30px] leading-none mb-3">
                    {card.title}
                  </h2>
                  <p className="font-sans text-[14px] text-black/60 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="max-w-[1600px] mx-auto px-6 py-10 md:px-10 md:py-14">
        <div className="border-b border-black/15 pb-8 md:pb-10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a] mb-4">
            Beirut JTM / Journal
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h1 className="font-display text-[54px] md:text-[76px] leading-none">
              Beirut Journal
            </h1>
            <p className="font-sans text-[16px] text-black/65 leading-relaxed max-w-[390px]">
              Stories, design notes, and little love letters from Beirut.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-12">
          {blogArticles.map((article) => (
            <article key={article.title} className="group">
              <a href="#" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0eb] mb-5 rounded-sm">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full bg-[#ffeee4]">
                    {article.category}
                  </span>
                  <span className="font-sans text-[13px] text-black/40">
                    {article.date}
                  </span>
                </div>
                <h2 className="font-display text-[26px] leading-snug mb-2 group-hover:text-[#e8191a] transition-colors">
                  {article.title}
                </h2>
                <p className="font-sans text-[14px] text-black/60 leading-relaxed">
                  {article.excerpt}
                </p>
              </a>
              <a
                href="#"
                className="inline-block mt-4 font-sans text-[13px] font-semibold border-b border-black pb-0.5 hover:text-[#e8191a] hover:border-[#e8191a] transition-colors"
              >
                Read article
              </a>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="max-w-[1400px] mx-auto px-6 py-10 md:px-10 md:py-14">
        <div className="border-b border-black/15 pb-8 md:pb-10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a] mb-4">
            Beirut JTM / Our Story
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h1 className="font-display text-[54px] md:text-[78px] leading-[0.92] mb-8">
                Born in Beirut,
                <br />
                Made with Love
              </h1>
              <div className="font-sans text-[16px] text-black/68 leading-[1.75] max-w-[520px]">
                <p className="mb-5">
                  Beirut JTM — Beirut Je T'aime — started as a love letter to a
                  city that refuses to be forgotten. We create stationery and
                  lifestyle goods that capture the spirit, colour, and warmth of
                  Beirut life.
                </p>
                <p className="mb-5">
                  Every product is designed locally, printed carefully, and
                  packed with that signature Lebanese joie de vivre. From the
                  Gimmeyzeh sun to the Hummus bowl, our collections celebrate
                  the everyday beauty of our city.
                </p>
                <p>
                  We make pieces that hold memories: a card that sounds like a
                  familiar voice, a tote that carries an afternoon, or a print
                  that brings a beloved street back into the room. Each one is a
                  small way to keep Beirut close, wherever you are.
                </p>
              </div>
            </div>
            <div className="relative min-h-[360px] bg-[#f0ebe5]">
              <img
                src={imgGimmeyzehSun}
                alt="Gimmeyzeh, Beirut"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-black/15">
          {[
            [
              "Designed locally",
              "Our ideas begin with the words, colours, food, and small details that make Beirut feel like home.",
              imgDesignedLocally,
            ],
            [
              "Made thoughtfully",
              "We work carefully from first sketch to final packing, choosing quality materials and making pieces meant to last.",
              imgMadeThoughtfully,
            ],
            [
              "Shared with love",
              "Every order is a small exchange between Beirut and the people who carry its spirit with them.",
              imgSharedWithLove,
            ],
          ].map(([title, description, image]) => (
            <article
              key={title}
              className="flex min-h-[220px] items-stretch overflow-hidden bg-[#ffeee4]"
            >
              <div className="flex min-w-0 flex-1 flex-col justify-center p-6 md:p-8">
                <h2 className="font-display text-[30px] leading-none mb-4">
                  {title}
                </h2>
                <p className="font-sans text-[14px] text-black/60 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="relative w-28 shrink-0 overflow-hidden bg-[#ffeee4] p-3 md:w-36 md:p-4">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="max-w-[1200px] mx-auto px-6 py-10 md:px-10 md:py-14">
        <div className="border-b border-black/15 pb-8 md:pb-10">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#e8191a] mb-4">
            Beirut JTM / Account
          </p>
          <h1 className="font-display text-[54px] md:text-[76px] leading-none">
            Hello, Maya
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <section className="border border-black/10 p-6 md:p-8">
            <h2 className="font-display text-[30px] leading-none mb-6">
              Profile details
            </h2>
            <dl className="font-sans text-[14px] space-y-4">
              <div className="flex justify-between gap-6 border-b border-black/10 pb-3">
                <dt className="text-black/50">Name</dt>
                <dd>Maya Haddad</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-black/10 pb-3">
                <dt className="text-black/50">Email</dt>
                <dd>maya@example.com</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-black/50">Member since</dt>
                <dd>March 2024</dd>
              </div>
            </dl>
            <button className="mt-8 border-b border-black font-sans text-[13px] font-semibold hover:text-[#e8191a] hover:border-[#e8191a] transition-colors">
              Edit details
            </button>
          </section>
          <section className="bg-[#ffeee4] p-6 md:p-8">
            <h2 className="font-display text-[30px] leading-none mb-6">
              Recent order
            </h2>
            <div className="flex justify-between font-sans text-[14px] mb-3">
              <span className="font-semibold">#BJTM-1048</span>
              <span className="text-[#e8191a] font-semibold">Delivered</span>
            </div>
            <p className="font-sans text-[14px] text-black/60 mb-6">
              Labneh Lover Tote, Bonjour Habibi Print, and a Heart Card
            </p>
            <div className="flex justify-between border-t border-black/15 pt-4 font-sans text-[14px]">
              <span className="text-black/50">Total</span>
              <span className="font-semibold">$58.00</span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [selectedProductName, setSelectedProductName] = useState<string | null>(
    () => {
      if (typeof window === "undefined") return null;
      const rawHash = window.location.hash.replace(/^#/, "");
      if (!rawHash.startsWith("product=")) return null;
      return decodeURIComponent(rawHash.replace(/^product=/, ""));
    },
  );

  useEffect(() => {
    const syncProductHash = () => {
      const rawHash = window.location.hash.replace(/^#/, "");
      if (!rawHash.startsWith("product=")) {
        setSelectedProductName(null);
        return;
      }
      setSelectedProductName(
        decodeURIComponent(rawHash.replace(/^product=/, "")),
      );
    };

    window.addEventListener("hashchange", syncProductHash);
    syncProductHash();

    return () => window.removeEventListener("hashchange", syncProductHash);
  }, []);

  const pathname = routePath(window.location.pathname).replace(/^\/|\/$/g, "");

  if (selectedProductName) {
    const product = productLookup[selectedProductName];
    if (product) {
      return (
        <ProductDetailPage
          key={product.name}
          product={product}
          onBack={() => {
            window.history.pushState(
              {},
              "",
              window.location.pathname + window.location.search,
            );
            window.dispatchEvent(new HashChangeEvent("hashchange"));
          }}
        />
      );
    }
  }

  if (pathname === "experiences") return <ExperiencesPage />;
  if (pathname === "find-us") return <FindUsPage />;
  if (pathname === "blog") return <BlogPage />;
  if (pathname === "about") return <AboutPage />;
  if (pathname === "profile") return <ProfilePage />;

  const page = routeProducts[pathname];

  if (page) return <DestinationPage page={page} route={pathname} />;

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
        <Blog />
        <Experiences />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
