import { portofolioItems } from "@/lib/portofolio";

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
            className="aspect-[3/4] rounded-lg p-6 flex flex-col "
            style={{
              background:
                "linear-gradient(160deg, #EFE9DA 0%, #F7F2E6 55%, #EDE6D6 100%)"  
            }}
          >
            <div className="border-t border-accent/40 mt-3" />
            <h3 className="font-display text-2xl text-ink text-center pt-70">
              {item.title}
            </h3>
            <div className="pt-80">
              <div className="flex justify-between">
                <span className="text-ink-soft text-xs tracking-widest uppercase">
                  {item.category}  
                </span>
                <span className="text-ink-soft text-xs tracking-widest uppercase">
                  {item.year}  
                </span>
              </div>
              
              <div className="border-t border-accent/40 mt-3" />
            </div>
          </div>
        </div>
    );
}