import { PriceListItem } from "../data/pricing/priceListItem";
import { PriceItem } from "../types/prices/prices";

export function priceListAdapter(dbPrices: PriceItem[]): PriceListItem[] {
    const priceListItemsFromDB = dbPrices.filter((item) => item.category === "pricelist");

    return priceListItemsFromDB.map((item) => {
        let priceRange = "";

        if (item.label.includes("Urgență") && item.price_min === 30) {
            priceRange = "+30%";
        }
        else if (item.price_max === null || item.price_min === item.price_max) {
            priceRange = `${item.price_min.toLocaleString("ro-RO")} lei`;
        }
        else {
            priceRange = `${item.price_min.toLocaleString("ro-RO")} - ${item.price_max?.toLocaleString("ro-RO")} lei`;   
        }

        return {
            service: item.label,
            priceRange: priceRange,
            unit: item.unit,
        };
    });
}