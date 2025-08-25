import React from "react";
import PropTypes from "prop-types";
import Anchor from "@/components/ui/anchor";
import Social, { SocialLink } from "@/components/ui/social";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "@/components/ui/offcanvas";
import Icon from "@/components/ui/icon";
import { MenuType, SocialType, ImageType } from "@/utils/types";

const PopupMenu = ({ isOpen, onClick, menus, socials, slogan, logo }) => {
    return (
        <Offcanvas isOpen={isOpen} onClick={onClick}>
            <OffcanvasHeader logo={logo} desc={slogan} onClick={onClick} />
            <OffcanvasBody>
                {menus && (
                    <ul className="primary-menu nav nav-pills">
                        {menus.map(({ id, text, path }) => (
                            <li className="nav-item" key={id}>
                                <Anchor
                                    className="nav-link smoth-animation"
                                    path={`#${path}`}
                                    onClick={onClick}
                                >
                                    {text}
                                </Anchor>
                            </li>
                        ))}
                    </ul>
                )}

                {socials && (
                    <div className="social-share-style-1 mt--40">
                        <span className="title">CONNECT WITH US</span>
                        <Social>
                            {socials.map((social) => (
                                <SocialLink key={social.id} path={social.path}>
                                    <Icon name={social.icon} />
                                </SocialLink>
                            ))}
                        </Social>
                    </div>
                )}
            </OffcanvasBody>
        </Offcanvas>
    );
};

PopupMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    menus: PropTypes.arrayOf(PropTypes.shape(MenuType)).isRequired,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    slogan: PropTypes.string,
    logo: PropTypes.shape(ImageType),
};

export default PopupMenu;
