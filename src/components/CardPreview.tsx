"use client";
import { Card } from "../components/ui/Card";

interface CardDemoProps {
  titleCard: string;
  descriptionCard: string;
}

export function CardDemo({ titleCard, descriptionCard }: CardDemoProps) {
  return (
    <div className="max-w-sm">
      <Card className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img src="../src/Img/AvatarAndIcons.png" alt="a" />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {titleCard}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {descriptionCard}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </Card>
    </div>
  );
}
