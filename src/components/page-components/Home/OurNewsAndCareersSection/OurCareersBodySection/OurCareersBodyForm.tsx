import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OurCareersBodyForm = () => {
    return (
        <form className="flex flex-col gap-9.5">
            <div className="flex flex-col gap-3.75">
                <Input placeholder="Enter your name" type="text" inputClassName="h-15! text-lg! px-7.25! w-full" className="w-full" />
                <Input placeholder="Enter your phone number" type="tel" inputClassName="h-15! text-lg! px-7.25! w-full" className="w-full" />
                <Input placeholder="Enter your email address" type="email" inputClassName="h-15! text-lg! px-7.25! w-full" className="w-full" />
            </div>
            <div className="flex justify-end">
                <Button variant="default" className="rounded-[88px] bg-primary text-white h-13 text-base! sm:text-lg! lg:text-xl! font-normal! py-0.5! px-16.25">
                    Submit
                </Button>
            </div>
        </form>
    )
}
export default OurCareersBodyForm;