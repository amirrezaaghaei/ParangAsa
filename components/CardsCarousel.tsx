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
    title: "عارضه‌یابی و تحلیل واحد خدمات پس از فروش و امور مشتریان",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text="محتوای منحصر به فرد و خاص برای مورد اول می‌تواند نقش کلیدی در جلب توجه مخاطبان و انتقال پیام مؤثر داشته باشد. انتخاب دقیق کلمات، استفاده از لحن مناسب، و توجه به نیازهای خاص مخاطبان، همگی به ایجاد تجربه‌ای معنادار و جذاب کمک می‌کنند که در ذهن مخاطب باقی می‌ماند."
        imageUrl="https://assets.aceternity.com/macbook.png"
      />
    ),
  },
  {
    category: "لورم ایپسوم",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="محتوای منحصر به فرد و خاص برای مورد دوم می‌تواند نقش کلیدی در جلب توجه مخاطبان و انتقال پیام مؤثر داشته باشد. انتخاب دقیق کلمات، استفاده از لحن مناسب، و توجه به نیازهای خاص مخاطبان، همگی به ایجاد تجربه‌ای معنادار و جذاب کمک می‌کنند که در ذهن مخاطب باقی می‌ماند." />
    ),
  },
  {
    category: "لورم ایپسوم",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text="محتوای منحصر به فرد و خاص برای مورد سوم می‌تواند نقش کلیدی در جلب توجه مخاطبان و انتقال پیام مؤثر داشته باشد. انتخاب دقیق کلمات، استفاده از لحن مناسب، و توجه به نیازهای خاص مخاطبان، همگی به ایجاد تجربه‌ای معنادار و جذاب کمک می‌کنند که در ذهن مخاطب باقی می‌ماند."
        imageUrl="https://images.unsplash.com/photo-1713869791518-a770879e60dc"
      />
    ),
  },
  {
    category: "لورم ایپسوم",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text="محتوای منحصر به فرد و خاص برای مورد چهارم می‌تواند نقش کلیدی در جلب توجه مخاطبان و انتقال پیام مؤثر داشته باشد. انتخاب دقیق کلمات، استفاده از لحن مناسب، و توجه به نیازهای خاص مخاطبان، همگی به ایجاد تجربه‌ای معنادار و جذاب کمک می‌کنند که در ذهن مخاطب باقی می‌ماند."
        imageUrl="https://images.unsplash.com/photo-1599202860130-f600f4948364"
      />
    ),
  },
  {
    category: "لورم ایپسوم",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent text="محتوای منحصر به فرد و خاص برای مورد پنجم می‌تواند نقش کلیدی در جلب توجه مخاطبان و انتقال پیام مؤثر داشته باشد. انتخاب دقیق کلمات، استفاده از لحن مناسب، و توجه به نیازهای خاص مخاطبان، همگی به ایجاد تجربه‌ای معنادار و جذاب کمک می‌کنند که در ذهن مخاطب باقی می‌ماند." />
    ),
  },
  {
    category: "لورم ایپسوم",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text="محتوای منحصر به فرد و خاص برای مورد ششم می‌تواند نقش کلیدی در جلب توجه مخاطبان و انتقال پیام مؤثر داشته باشد. انتخاب دقیق کلمات، استفاده از لحن مناسب، و توجه به نیازهای خاص مخاطبان، همگی به ایجاد تجربه‌ای معنادار و جذاب کمک می‌کنند که در ذهن مخاطب باقی می‌ماند."
        imageUrl="https://images.unsplash.com/photo-1511984804822-e16ba72f5848"
      />
    ),
  },
];
