"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { technologiesBodySectionData, ITechnologiesBodySectionData } from "@/components/page-components/Home/TechnologiesSection/TechnologiesBodySection/data";

const TechnologiesBodySection = () => {
    const [selectedTechnology, setSelectedTechnology] = useState<ITechnologiesBodySectionData>(technologiesBodySectionData[0]);

    return (
        <div className="rounded-[10px] bg-white border border-[#DFDFDF] border-solid px-10.75">
            <div className="grid grid-cols-6">
                <div className="col-span-2">
                    <div className="flex flex-col gap-6 py-9.5">
                        {technologiesBodySectionData.map((item) => (
                            <Button key={item.title} variant="outline" onClick={() => setSelectedTechnology(item)}
                                className={cn("bg-transparent w-fit border-transparent rounded-[5px]! px-4! h-11!", selectedTechnology?.title === item.title ? "border-black!" : "border-transparent! border-b-0! border-[1.5px] shadow-none!")}
                            >
                                <Paragraph className={cn("md:text-xl! text-center! font-medium! text-heading! leading-6.25!", selectedTechnology?.title === item.title && "text-[#4B4B4B]!")}>
                                    {item.title}
                                </Paragraph>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="col-span-4 border-r-0 border-l border-y-0 border-[#EAEAEA] border-solid pl-15.75">
                    <div className="flex flex-col gap-5 py-9.5">
                        <div className="w-17 h-16.25 flex justify-center items-center bg-[#F6F6F6] rounded-[3px]">
                            <Image src={selectedTechnology?.image as string} alt={selectedTechnology?.title as string} width={39} height={40} />
                        </div>
                        <div className="flex flex-col gap-3.75!">
                            <Heading5 className="leading-7.75!">
                                {selectedTechnology?.title}
                            </Heading5>
                            <Paragraph className="md:text-xl! text-[#1A1A1A]! leading-6.25!" dangerouslySetInnerHTML={{ __html: selectedTechnology?.description }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesBodySection;