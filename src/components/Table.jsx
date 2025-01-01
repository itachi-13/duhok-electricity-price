import { useState } from "react";
import { useTranslation } from "react-i18next";
import { tableData } from "../data/prices";

const Table = () => {
    const [ampere, setAmpere] = useState(1);

    const { t, i18n } = useTranslation();

    const dir = i18n.language === "en" ? "ltr" : "rtl";

    const totalPriceSince2018 = tableData.reduce(
        (total, item) => total + item.total_price,
        0
    );

    return (
        <section dir={dir} id="table-section">
            <h2>{t("table_title")}</h2>

            <div className="custome-amp">
                <p>{t("change_amp")}</p>
                <input
                    type="number"
                    value={ampere}
                    min={1}
                    onChange={(e) => setAmpere(Number(e.target.value))}
                />
            </div>
            <table>
                {/* <caption>{t("table_title")}</caption> */}
                <thead>
                    <tr>
                        <th>{t("year")}</th>
                        <th>
                            {ampere} {t("amp")}
                        </th>
                        <th>2 {t("amp")}</th>
                        <th>4 {t("amp")}</th>
                        <th>6 {t("amp")}</th>
                        <th>8 {t("amp")}</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.year}</td>
                            <td>
                                {(row.total_price * ampere).toLocaleString()}
                            </td>
                            <td>{(row.total_price * 2).toLocaleString()}</td>
                            <td>{(row.total_price * 4).toLocaleString()}</td>
                            <td>{(row.total_price * 6).toLocaleString()}</td>
                            <td>{(row.total_price * 8).toLocaleString()}</td>
                        </tr>
                    ))}
                    <tr className="totals">
                        <td>{t("total")}</td>
                        <td>
                            {(totalPriceSince2018 * ampere).toLocaleString()}
                        </td>
                        <td>{(totalPriceSince2018 * 2).toLocaleString()}</td>
                        <td>{(totalPriceSince2018 * 4).toLocaleString()}</td>
                        <td>{(totalPriceSince2018 * 6).toLocaleString()}</td>
                        <td>{(totalPriceSince2018 * 8).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Table;
