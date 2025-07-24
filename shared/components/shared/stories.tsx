'use client';

import { Api } from "@/shared/services/api-client";
import { IStory } from "@/shared/services/stories";
import React from "react";
import { Container } from "./container";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const Stories: React.FC<Props> = ({ className }) => {
  const [stories, setStories] = React.useState<IStory[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedStory, setSelectedStory] = React.useState<IStory>();

  React.useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll();
      setStories(data);
    }

    fetchStories();
  }, []);
    
      const onClickStory = (story: IStory) => {
        setSelectedStory(story);

        if (story.items.length > 0) {
          setOpen(true);
        }
      };

    return (
      <>
        <Container
          className={cn(
            "flex items-center justify-between gap-2 my-10",
            className
          )}
        >
          {stories.length === 0 &&
            [...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-[200px] h-[250px] bg-gray-200 rounded-md animate-pulse"
              />
            ))}
          {stories.map((story) => (
            <img
              key={story.id}
              onClick={() => onClickStory(story)}
              className="rounded-md cursor-pointer"
              height={250}
              width={200}
              src={story.previewImageUrl}
              alt={"story preview"}
            />
          ))}
        </Container>
      </>
    );
};
