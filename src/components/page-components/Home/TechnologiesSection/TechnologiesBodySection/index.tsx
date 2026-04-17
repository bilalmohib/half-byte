"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWindowSize } from "@/utils/detect-dimensions";
import { Heading5, Paragraph } from "@/components/common/Typography";
import { technologiesBodySectionData, ITechnologiesBodySectionData } from "@/components/page-components/Home/TechnologiesSection/TechnologiesBodySection/data";

const TechnologiesBodySection = () => {
    const { width } = useWindowSize();
    const [selectedTechnology, setSelectedTechnology] = useState<ITechnologiesBodySectionData>(technologiesBodySectionData[0]);

    return (
        <div className="rounded-[10px] bg-white border border-[#DFDFDF] border-solid px-4.5 md:px-5.25 lg:px-10.75">
            <div className="grid grid-cols-1 md:grid-cols-8 mllg:grid-cols-6">
                <div className="col-span-1 md:col-span-3 mllg:col-span-2">
                    <div className="flex flex-wrap md:flex-col gap-4 md:gap-5 lg:gap-6 py-3.75 md:py-9 lg:py-9.5">
                        {technologiesBodySectionData.map((item) => (
                            <Button key={item.title} variant="outline" onClick={() => setSelectedTechnology(item)}
                                className={cn("bg-transparent w-fit border-transparent rounded-[5px]! px-1.5! md:px-3.5! lg:px-4! h-8.25! md:h-11!", selectedTechnology?.title === item.title ? "border-black!" : "border-transparent! border-b-0! border-[1.5px] shadow-none!")}
                            >
                                <Paragraph className={cn("md:text-xl! text-center! font-normal! text-[#4B4B4B]! leading-5! lg:leading-6.25!", selectedTechnology?.title === item.title && "text-heading! font-medium!")}>
                                    {item.title}
                                </Paragraph>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 md:col-span-5 mllg:col-span-4 border-r-0 md:border-l border-t border-b-0 md:border-y-0 border-[#EAEAEA] border-solid pl-1.5 md:pl-5.25 lg:pl-15.75">
                    <div className="flex flex-col gap-4.25 md:gap-6.25 lg:gap-5 py-6 md:py-10.25 lg:py-12">
                        <div className="w-14 lg:w-17 h-13.25 lg:h-16.25 flex justify-center items-center bg-[#F6F6F6] rounded-[3px]">
                            <Image src={selectedTechnology?.image as string} alt={selectedTechnology?.title as string} width={width && width > 768 ? 39 : 32} height={width && width > 768 ? 40 : 32} />
                        </div>
                        <div className="flex flex-col gap-2.5 md:gap-4 lg:gap-3.75!">
                            <Heading5 className="text-base! md:text-xl! lg:text-2xl! leading-5! md:leading-6.25! lg:leading-7.75!">
                                {selectedTechnology?.title}
                            </Heading5>
                            <Paragraph className="md:text-xl! text-[#1A1A1A]! leading-5! md:leading-5.25! lg:leading-6.25!" dangerouslySetInnerHTML={{ __html: selectedTechnology?.description }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesBodySection;