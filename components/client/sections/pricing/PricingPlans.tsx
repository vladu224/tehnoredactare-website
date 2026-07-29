import { pricingPlanFinal } from "@/lib/types/prices/pricingPlan";
import { pricingPlansAdapter } from "@/lib/utils/pricingPlansAdapter";
import { useEffect, useState } from "react";
import { PlanCard } from "./PlanCard";

export function PricingPlans() {
    const [plans, setPlans] = useState<pricingPlanFinal[]>([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const origin = window.location.origin;
            fetch(`${origin}/api/admin/prices`)
                .then((res) => {
                    if(!res.ok) throw new Error("Eroare la încărcarea prețurilor");
                    return res.json();
                })
                .then((data) => {
                    const formattedData = pricingPlansAdapter(data);
                    setPlans(formattedData);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Eroare in PricingPlan: ", err);
                    setLoading(false);
                });
        }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 sm:mt-20 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
    );
}