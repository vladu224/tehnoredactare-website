import { pricingPlanFinal } from "@/lib/types/prices/pricingPlan";
import { getPricesByCategory } from "../business/supabase/pricesClient";
import { pricingPlans } from "@/lib/data/pricing/pricingPlans";
import { PriceItem } from "../types/prices/prices";

export function pricingPlansAdapter(dbPrices: PriceItem[]): pricingPlanFinal[] {
    const planPricesFromDB = dbPrices.filter((item) => item.category === "plan");
    const priceMap = new Map(planPricesFromDB.map((p) => [p.id, p]));
    
    return pricingPlans.map((config): pricingPlanFinal => {
        const priceInfo = priceMap.get(config.id);

        const isCustom = priceInfo?.price_min === 0;
        
        return {
            id: config.id,
            description: config.description,
            name: priceInfo?.label ?? ""    ,
            priceLabel: isCustom
                ? "personalizat"
                : `de la ${priceInfo?.price_min.toLocaleString("ro-RO")}`,
            priceUnit: priceInfo?.unit ?? "",
            features: config.features,
            ctaLabel: config.ctaLabel,
            featured: config.featured,
            
        }
    })
} 