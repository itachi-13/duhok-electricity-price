import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);

        document.documentElement.lang = lng;
        document.documentElement.dir = lng === "en" ? "ltr" : "rtl";
    };

    return (
        <nav id="nav" dir="ltr">
            <ul>
                <li onClick={() => changeLanguage("en")}>English</li>|
                <li onClick={() => changeLanguage("ar")}>العربية</li>|
                <li onClick={() => changeLanguage("ku")}>کوردی</li>
            </ul>
        </nav>
    );
};

export default Navbar;
