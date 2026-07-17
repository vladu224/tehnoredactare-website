export const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    e.stopPropagation();
      
    const isMobile = window.innerWidth < 768;

    if (targetId === "top") {
        window.scrollTo({ 
            top: 0,
            behavior: isMobile ? "auto" : "smooth" 
        });
    } else {  
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: isMobile ? "auto" : "smooth"
            });
        }
    }

    window.history.pushState(null, "", window.location.pathname);
}