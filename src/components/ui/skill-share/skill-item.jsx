import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { ImageType } from "@/utils/types";

const SkillItem = ({ image: { src, alt } }) => {
    return (
        <li>
            <Image src={src} alt={alt || "skill"}
                                                width={500}
                                                height={300} />
        </li>
    );
};

SkillItem.propTypes = {
    image: PropTypes.shape(ImageType).isRequired,
};

export default SkillItem;
