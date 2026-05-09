import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/DictionaryProvider";
import { Heading5 } from "@/components/common/Typography";

const SubscribeToNewsLetter = () => {
  const [email, setEmail] = useState("");
  const dict = useT();
  const t = dict.footer.newsletter;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      toast.error(t.validation.required);
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!emailOk) {
      toast.error(t.validation.invalidEmail);
      return;
    }

    toast.success(t.success);
    setEmail("");
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading5>{t.heading}</Heading5>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-96! lg:w-full! min-w-0 items-center gap-0 rounded-full border border-[#DBDBDB] bg-white p-1 pl-4 pr-2 shadow-none"
      >
        <Input
          variant="underline"
          inputClassName="min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-black outline-none placeholder:text-[#A3A3A3]"
          id="footer-newsletter-email"
          type="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[44px] min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-black outline-none placeholder:text-[#A3A3A3]"
        />
        <Button
          type="submit"
          className="h-10.5! shrink-0 rounded-full bg-primary px-5 text-base! font-normal! text-white transition-colors hover:bg-buttonHover sm:h-10 sm:px-6"
        >
          {t.subscribe}
        </Button>
      </form>
    </div>
  );
};
export default SubscribeToNewsLetter;
