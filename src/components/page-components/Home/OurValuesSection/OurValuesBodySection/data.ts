export type ValueDictKey = "integrity" | "clientCentricity" | "sustainability";

export interface IOurValuesBodySectionData {
  /** Translation key into `dict.values.items[...]`. */
  dictKey: ValueDictKey;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export const ourValuesBodySectionData: IOurValuesBodySectionData[] = [
  {
    dictKey: "integrity",
    image: {
      src: "/assets/pages/Home/OurValues/integrity.svg",
      width: 31,
      height: 31,
    },
  },
  {
    dictKey: "clientCentricity",
    image: {
      src: "/assets/pages/Home/OurValues/client_centricity.svg",
      width: 31,
      height: 31,
    },
  },
  {
    dictKey: "sustainability",
    image: {
      src: "/assets/pages/Home/OurValues/sustainability.svg",
      width: 30,
      height: 30,
    },
  },
];
