import { useEffect } from "react";
import { WOW } from "wowjs";
import AOS from "aos";

const External = () => {
    useEffect(() => {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: false,
        });
        wow.init();

        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    });

    return <div></div>;
};

export default External;
