import Icon from "@/components/ui/icon";
import Social, { SocialLink } from "@/components/ui/social";

const Footer = ({ className, data }) => {
    return (
        <footer className={`modern-footer ${className || ""}`}>
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        {/* About Us Section */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="footer-title">{data?.about?.title}</h5>
                            <p className="footer-description">{data?.about?.description}</p>
                            {data?.socials && (
                                <div className="social-links">
                                    <Social>
                                        {data.socials.map((social) => (
                                            <SocialLink key={social.id} path={social.path}>
                                                <Icon name={social.icon} />
                                            </SocialLink>
                                        ))}
                                    </Social>
                                </div>
                            )}
                        </div>

                        {/* Services Section */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="footer-title">{data?.services?.title}</h5>
                            <ul className="footer-list">
                                {data?.services?.items?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Community Section */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="footer-title">{data?.community?.title}</h5>
                            <ul className="footer-list">
                                {data?.community?.items?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="footer-title">{data?.contact?.title}</h5>
                            <div className="contact-info">
                                <p><strong>Email:</strong> {data?.contact?.email}</p>
                                {data?.contact?.phones?.map((phone, index) => (
                                    <p key={index}><strong>Phone:</strong> {phone}</p>
                                ))}
                                <p><strong>Address:</strong> {data?.contact?.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Copyright Section */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="text-center">
                        <p className="copyright-text">{data?.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
