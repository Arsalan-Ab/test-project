import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";
let dir;

const direction = () => {
    const { t, i18n } = useTranslation();
    dir = i18n.dir();
};
// Create rtl cache
export const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

export const emptyCache = createCache({
    key: "a",
});
