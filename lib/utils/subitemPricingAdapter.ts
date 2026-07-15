import { serviceOptions } from "../data/calculator/services-options";
import { PriceListItem } from "../data/pricing/priceListItem";
import { ServiceOption, ServiceOptionFinal } from "../types/calculator/calculator";
import { PriceItem } from "../types/prices/prices";

export function subitemPricingAdapter(dbPrices: PriceItem[]): ServiceOptionFinal[] {
    const subitemsPricesFromDB = dbPrices.filter((item) => item.category === "service");
    const priceMap = new Map(subitemsPricesFromDB.map((p) => [p.id, p]));

    return serviceOptions.map((config): ServiceOptionFinal => {
        const priceInfo = priceMap.get(config.id);

        return {
            id: config.id,
            label: config.label,
            pricingType: config.pricingType,
            pricePerPage: priceInfo?.price_min ?? 0,
            flatPrice: priceInfo?.price_min ?? 0,
            subOptions: config.subOptions,
        }
    })
}