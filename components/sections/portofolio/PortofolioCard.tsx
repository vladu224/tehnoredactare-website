import { getPortofolioItems } from "@/lib/business/portofolio/portofolioClient";

export function PortofolioCard({
    item,
}: {
    item: Awaited<ReturnType<typeof getPortofolioItems>>[number];
}) {

    const content = (
        <>
          <div className="aspect-[3/4] rounded-md overflow-hiddem relative">
            {item.image_url ? (
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div
                className="aspect-[3/4] rounded-md sm:p-6 flex flex-col gap-10 sm:gap-21"
                style={{
                  background:
                    "linear-gradient(160deg, #EFE9DA 0%, #F7F2E6 55%, #EDE6D6 100%)"  
                }}
              >
                <div className="border-t border-accent/40 mt-3" />
                
                <h3 className="font-display text-xl sm:text-2xl text-ink text-center pt-6 sm:pt-0">
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
                  <div className="border-t border-accent/40 mt-3"/>
                </div>
              </div>
              )}
            </div>
            
            <h4 className="font-display text-sm sm:text-lg text-ink mt-2">{item.title}</h4>
            <div className="flex flex-row items-baseline justify-between mt-1">
              <span className="text-ink-soft text-[10px] sm:text-xs tracking-widest uppercase mt-1 block">
                {item.category}
              </span>
              <span className="text-ink-soft text-xs sm:text-sm shrink-0 ml-4">
                {item.year}
              </span>
            </div>
        </>
    );

    if (item.pdf_url) {
        return (
            <a
              href={item.pdf_url}
              target="_blank"
              rel="noopener norederrer"
              className="block cursor-pointer transition-opacity hover:opacity-80"
            >
              {content}
            </a>
        );
    }

    return (
      <div>
        {content}
      </div>
    );
}