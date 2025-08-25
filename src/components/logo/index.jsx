import React from "react";
// import { Link } from "gatsby";
import Link from "next/link";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "next/image";
import { ImageType } from "@/utils/types";

const Logo = ({ className, image }) => {
    return (
        <div className={cn("logo", className)}>
            <Link href="/">
                {image?.src && (
                    <Image src={image.url} alt={image?.alt || "logo"}
                    width={80}
                    height={80} />
                )}
            </Link>
        </div>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
};

export default Logo;
