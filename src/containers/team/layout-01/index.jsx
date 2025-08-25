import SectionTitle from "@/components/section-title";
import TeamMember from "@/components/team/layout-01";
import Slider, { SliderItem } from "@/components/ui/slider";

const sliderOptions = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2, arrows: false },
        },
        {
            breakpoint: 577,
            settings: { slidesToShow: 1, arrows: false },
        },
    ],
};

const TeamArea = ({ data, id = "team" }) => {
    return (
        <div className="rn-team-area team-style-2 team-with-carousel rn-section-gapTop pb--80 pb_md--50 section-separator" id={id}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle className="text-center mb--20 mb_md--20 mb_sm--20" {...data.section_title} />
                        )}
                    </div>
                </div>
                {data?.items && (
                    <Slider className="team-activation-item-3 slick-arrow-style-one mb--60" options={sliderOptions} nextIcon="ArrowRight" PrevIcon="ArrowLeft">
                        {data.items.map((item) => (
                            <SliderItem key={item.id}>
                                <TeamMember title={item.title} designation={item.designation} image={item.images?.[0]} />
                            </SliderItem>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
};

export default TeamArea;