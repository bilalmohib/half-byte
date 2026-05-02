"use client";

import { createContext, useContext, useMemo } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import type { Locale } from "@/i18n/config";

interface DictionaryContextValue {
  dict: Dictionary;
  locale: Locale;
}

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

interface DictionaryProviderProps {
  dict: Dictionary;
  locale: Locale;
  children: React.ReactNode;
}

export function DictionaryProvider({
  dict,
  locale,
  children,
}: DictionaryProviderProps) {
  const value = useMemo(() => ({ dict, locale }), [dict, locale]);
  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): DictionaryContextValue {
  const ctx = useContext(DictionaryContext);
  if (!ctx) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return ctx;
}

export function useT(): Dictionary {
  return useDictionary().dict;
}

export function useLocale(): Locale {
  return useDictionary().locale;
}
