interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export const Heading1 = ({
  className,
  children,
  dangerouslySetInnerHTML,
  style,
  as = "h2",
}: TypographyProps) => {
  return as === "h1" ? (
    <h1
      className={`font-roboto font-bold text-[26px] md:text-[30px] lg:text-[50px] leading-normal md:leading-[142%] tracking-[0%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </h1>
  ) : (
    <h2
      className={`font-roboto font-bold text-[26px] md:text-[30px] lg:text-[50px] leading-normal md:leading-[142%] tracking-[0%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </h2>
  );
};

export const Heading2 = ({
  className,
  children,
  dangerouslySetInnerHTML,
  style,
}: TypographyProps) => {
  return (
    <h2
      className={`font-roboto font-bold text-[26px] sm:text-[34px] lg:text-[44px] leading-normal md:leading-[142%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </h2>
  );
};

export const Heading3 = ({
  className,
  children,
  dangerouslySetInnerHTML,
  style,
}: TypographyProps) => {
  return (
    <h3
      className={`font-roboto font-bold text-[22px] mllg:text-[28px] lg:text-[30px] leading-normal md:leading-[142%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </h3>
  );
};

export const Heading4 = ({
  className,
  children,
  dangerouslySetInnerHTML,
  style,
}: TypographyProps) => {
  return (
    <h4
      className={`font-roboto font-bold text-[18px] md:text-[22px] lg:text-[26px] leading-normal md:leading-[142%] tracking-[0%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </h4>
  );
};

export const Heading5 = ({
  className,
  children,
  dangerouslySetInnerHTML,
  style,
}: TypographyProps) => {
  return (
    <h5
      className={`font-roboto font-bold text-[18px] lg:text-[22px] leading-normal md:leading-[142%] tracking-[0%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </h5>
  );
};

export const Heading6 = ({
  className,
  children,
  dangerouslySetInnerHTML,
  style,
}: TypographyProps) => {
  return (
    <h6
      className={`font-roboto font-bold text-[14px] lg:text-[18px] leading-normal md:leading-[142%] tracking-[0%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </h6>
  );
};

export const Paragraph = ({
  className,
  children,
  dangerouslySetInnerHTML,
  style,
}: TypographyProps) => {
  return (
    <p
      className={`font-roboto font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-normal md:leading-[142%] tracking-[0%] text-heading ${className}`}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={style}
    >
      {children}
    </p>
  );
};
