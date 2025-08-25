"use client";
import { normalizedData } from "@/utils";
import Layout from "@/layouts";
import Header from "@/layouts/header/layout-01";
import Footer from "@/layouts/footer/layout-02";
import HeroArea from "@/containers/hero/layout-12";
import AboutArea from "@/containers/about/layout-02";
import ParallaxArea from "@/containers/parallax";
import PortfolioArea from "@/containers/portfolio/layout-06";
import ClientArea from "@/containers/client/layout-03";
import BlogArea from "@/containers/blog/layout-01";
import PricingArea from "@/containers/pricing/layout-02";
import TestimonialArea from "@/containers/testimonial/layout-03";
import TeamArea from "@/containers/team/layout-01";
import ContactArea from "@/containers/contact/layout-01";
import ServicesArea from "@/containers/service/layout-01";
import data from "@/lib/data.json";
import "@/assets/css/swiper.css";
import "@/assets/scss/style.scss";
import "aos/dist/aos.css";
import "@/app/custom-style.css";

export default function IndexPage() {
    const content = normalizedData(data?.homePage?.content || []);
    return (
        <Layout>
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper" role="main">
                <section aria-label="Hero Section">
                    <HeroArea data={content["hero-section"]} />
                </section>
                <section aria-label="About Us">
                    <AboutArea data={content["about-section"]} />
                </section>
                <section aria-label="Our Services">
                    <ServicesArea id="service" data={content["service-section"]} />
                </section>
                <ParallaxArea data={content["parallax-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
                <ClientArea data={content["client-section"]} />
                <TestimonialArea data={content["testimonial-section"]} />
                <TeamArea data={content["team-section"]} />
                <PricingArea data={content["pricing-section"]} />
                <BlogArea
                    data={{
                        ...content["blog-section"],
                        blogs: content["blog-section"]?.items || data?.allArticle?.nodes,
                    }}
                />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                />
            </main>
            <Footer
                className="section-separator"
                data={{
                    ...data.footer,
                    socials: data.site.siteMetadata.socials,
                }}
            />
        </Layout>
    );
}