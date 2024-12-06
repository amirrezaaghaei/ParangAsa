"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { carouselData } from "@/data";

export function AppleCardsCarouselDemo() {
  const cards = cardsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div
      className="mx-auto max-w-7xl w-full h-full py-16 sm:py-20 px-6 lg:px-8"
      id="projects"
    >
      <h2 className="text-center text-base/7 font-semibold text-primary-600">
        {carouselData.kicker}
      </h2>
      <p className="mx-auto mt-2 sm:mt-3 max-w-lg text-center text-4xl font-medium tracking-normal leading-[1.25] text-gray-950 sm:text-5xl">
        {carouselData.title}
      </p>
      <Carousel items={cards} />
    </div>
  );
}
type DummyContentProps = {
  text: string;
  imageUrl?: string; // Making imageUrl optional
};

const DummyContent: React.FC<DummyContentProps> = ({ text, imageUrl }) => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 font-normal leading-loose text-base md:text-2xl max-w-3xl mx-auto text-right">
        {text}
      </p>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Content mockup"
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      )}
    </div>
  );
};

// Now update the data array to optionally pass image URLs
const cardsData = [
  {
    category: "شرکت راسان",
    title: "برنامه جامع تحول و توسعه واحد خدمات پس از فروش و امور مشتریان",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="هدف، ایجاد تحولی اساسی در واحد خدمات پس از فروش و امور مشتریان شرکت راسان است، به‌گونه‌ای که ضمن دستیابی به رضایت حداکثری مشتریان، نمایندگان و سرویسکاران، افزایش سودآوری، کاهش نرخ ریزش مشتریان، و گسترش بازار تحقق یابد. همچنین، زیرساخت‌های لازم برای راه‌اندازی باشگاه مشتریان و باشگاه سرویسکاران نیز فراهم شود." />
    ),
  },
  {
    category: "مبنا",
    title:
      "بازطراحی ساختارهای خدمات پس از فروش و ارائه آموزش‌های مهارت‌های نرم مرتبط",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="هدف، ارتقای فرآیندهای جاری در واحد خدمات پس از فروش و امور مشتریان شرکت حرارت گستر مبنا است. این هدف با تمرکز بر افزایش سودآوری و توسعه عملکرد از طریق تعریف و اجرای پروژه‌های نوآورانه محقق می‌شود، به گونه‌ای که بتوان در دوره‌های زمانی مشخص، نتایج و اثربخشی اقدامات را ارزیابی و سنجش کرد" />
    ),
  },
  {
    category: "تیراژه ماشین",
    title:
      "بهینه‌سازی و ارتقای عملکرد واحد خدمات پس از فروش و آموزش کارشناسان شعب سمنان و مشهد",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="هدف تحول و توسعه واحد خدمات پس از فروش و امور مشتریان شرکت تیراژه ماشین است، به نحوی که فعالیت این واحد وجه تمایز بسیار قدرتمندی برای مشتریان و متعاملین شرکت تیراژه ماشین نسبت به رقبا به شمار آید" />
    ),
  },
  {
    category: "دکووود",
    title: "پیاده‌سازی سیستم مدیریت ارتباط با مشتریان (CRM)",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="هدف طراحی و راه‌اندازی سیستم مدیریت ارتباط با مشتریان جهت بهبود عملکرد واحد توسعه بازار شرکت دکووود است. این طرح شامل نصب و استقرار نرم‌افزار Microsoft Dynamics CRM برای تسهیل مدیریت و ارتقای بهره‌وری فرآیندهای  مرتبط با فروش و ارتباط با مشتریان می‌باشد" />
    ),
  },
  {
    category: "کارا",
    title:
      "ارزیابی عملکرد و تدوین طرح جامع توسعه خدمات پس از فروش همراه با آموزش تیم اجرایی",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="هدف این پروژه، شناسایی نقاط ضعف و فرصت‌های بهبود در واحد خدمات پس از فروش شرکت کارا و ارائه یک برنامه عملیاتی جامع برای توسعه و ارتقای عملکرد این واحد است. این طرح با تمرکز بر آموزش مدیران و کارشناسان، به افزایش بهره‌وری و جلب رضایت پایدار مشتریان منجر خواهد شد" />
    ),
  },
  {
    category: "هایپوکسی",
    title: "طراحی و فرآیندسازی ساختارهای عملیاتی",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="هدف این پروژه، شناسایی و تعریف دقیق فرآیندهای کاری در تمامی بخش‌های باشگاه تناسب اندام Hypoxi است. این فرآیندسازی با تمرکز بر استانداردسازی فعالیت‌ها، تسهیل هماهنگی بین بخش‌ها، و ارتقای کیفیت خدمات ارائه‌شده به مشتریان انجام می‌شود. نتیجه نهایی، افزایش بهره‌وری کلی، بهبود عملکرد تیم‌ها، و فراهم‌سازی بستر لازم برای توسعه پایدار باشگاه خواهد بود" />
    ),
  },
];
