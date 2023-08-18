import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Header.module.css";
import {
  localeNames,
  locales,
  TEXTS_BY_LANGUAGE,
  defaultLocale,
} from "../../../locale/constants";

export const Header = () => {
  // Traemos la información del idioma utilizando useRouter()
  const { locale, asPath } = useRouter();

  const { HEADER } =
    TEXTS_BY_LANGUAGE[locale as keyof typeof TEXTS_BY_LANGUAGE] ?? TEXTS_BY_LANGUAGE[defaultLocale];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <figure>
          <Image src="/img/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>Tienda</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./">{`${HEADER.PRODUCTS}`}</Link>
        <Link href="./tycs">{`${HEADER.TYCS}`}</Link>
      </div>
      <div className={styles.localeSwitch}>
        {/* Mediante el atributo locale le indicamos a Next que idioma queremos utilizar al hacer la
          redirección
           */}
        <Link href={asPath} locale={locales.ES_ES}>
          <p className={locale === locales.ES_ES ? styles.active : ""}>
            <Image
              src="/img/spanish.png"
              alt="spanish"
              layout="fixed"
              width={20}
              height={20}
            />
            {localeNames[locales.ES_ES as keyof typeof localeNames]}
          </p>
        </Link>
        <Link href={asPath} locale={locales.PT_BR}>
          <p className={locale === locales.PT_BR ? styles.active : ""}>
            <Image
              src="/img/brazil.png"
              alt="usa"
              layout="fixed"
              width={20}
              height={20}
            />
            {localeNames[locales.PT_BR as keyof typeof localeNames]}
          </p>
        </Link>
        <Link href={asPath} locale={locales.EN_US}>
          <p className={locale === locales.EN_US ? styles.active : ""}>
            <Image
              src="/img/usa.png"
              alt="usa"
              layout="fixed"
              width={20}
              height={20}
            />
            {localeNames[locales.EN_US as keyof typeof localeNames]}
          </p>
        </Link>
      </div>
    </header>
  );
};


