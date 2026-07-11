import { portofolioItems } from "@/lib/data/portofolio/portofolio";

export function PortofolioCard({
    item,
    index,
}: {
    item: (typeof portofolioItems)[number];
    index: number;
}) {
    return (
        <div>
          <div
            className="-mx-4 sm:-mx-0 rounded-md sm:p-6 flex flex-col gap-20 sm:gap-70"
            style={{
              background:
                "linear-gradient(160deg, #EFE9DA 0%, #F7F2E6 55%, #EDE6D6 100%)"  
            }}
          >
            <div className="border-t border-accent/40 mt-3" />
            
            <h3 className="font-display text-xl sm:text-2xl text-ink text-center">
              {item.title}
            </h3>
            
            <div className="pr-2">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-ink-soft text-[10px] sm:text-xs text-end tracking-widest uppercase">
                  {item.category}  
                </span>
                <span className="text-ink-soft text-[10px] sm:text-xs text-end tracking-widest uppercase">
                  {item.year}  
                </span>
              </div>
                
              <div className="border-t border-accent/40 mt-3 mb-3" />
            </div>
          </div>
        </div>
    );
}