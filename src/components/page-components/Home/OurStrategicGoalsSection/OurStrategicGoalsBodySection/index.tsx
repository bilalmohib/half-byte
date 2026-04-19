"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";
import { useWindowSize } from "@/utils/detect-dimensions";
import OurStrategicGoalsQuestionAnswersSection from "@/components/page-components/Home/OurStrategicGoalsSection/OurStrategicGoalsBodySection/OurStrategicGoalsQuestionAnswersSection";

const IMAGE_MIN_HEIGHT = 565;

const OurStrategicGoalsBodySection = () => {
    const { width } = useWindowSize();
    const rightColumnRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState(IMAGE_MIN_HEIGHT);

    useEffect(() => {
        const rightColumn = rightColumnRef.current;
        if (!rightColumn) {
            return;
        }

        const updateImageHeight = () => {
            setImageHeight(Math.max(rightColumn.offsetHeight, IMAGE_MIN_HEIGHT));
        };

        updateImageHeight();

        const resizeObserver = new ResizeObserver(updateImageHeight);
        resizeObserver.observe(rightColumn);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <Container className="grid grid-cols-1 md:grid-cols-2 items-start gap-6.25 md:gap-3.25 lg:gap-5.75 w-full">
            <div
                className="bg-image-our-strategic-goals-body-section bg-cover bg-center bg-no-repeat rounded-[10px] bg-[#D9D9D9] w-full transition-[height] duration-500 ease-in-out"
                style={{ height: width && width > 768 ? `${imageHeight}px` : "328px" }}
            />
            <div ref={rightColumnRef}>
                <OurStrategicGoalsQuestionAnswersSection />
            </div>
        </Container>
    );
};

export default OurStrategicGoalsBodySection;