import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <p>
                {t("data_provided")}{" "}
                <a target="_blank" href="https://uod.ac/staff/aza-hani-shukri/">
                    {t("aza_shukri")}
                </a>
            </p>
            <p>
                {t("website_developed")}{" "}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ameer-ibrahim-7a035124a/"
                >
                    {t("ameer_ibrahim")}
                </a>
            </p>
            <a
                target="_blank"
                href="https://github.com/itachi-13/duhok-electricity-price"
            >
                {t("source_code")}
            </a>
        </footer>
    );
};

export default Footer;
