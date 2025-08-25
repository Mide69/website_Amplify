import React from "react";
import PropTypes from "prop-types";
import { ImageType } from "@/utils/types";
import RatingImg from "@/assets/images/icons/rating.png";
import QuoteImg from "@/assets/images/icons/quote.png";
import Image from "next/image";

const Testimonial = ({
    title,
    designation,
    subtitle,
    desc,
    image,
    rating,
    projectTitle,
    projectMeta,
}) => {
    const rat = Number(rating);
    return (
        <div className="testimonial">
            <div className="inner">
                <div className="card-info">
                    {image?.src && (
                        <div className="card-thumbnail">
                            <Image src={image.url} alt={image?.alt || title}
                                                width={500}
                                                height={300} />
                        </div>
                    )}

                    <div className="card-content">
                        {subtitle && (
                            <span className="subtitle mt--10">{subtitle}</span>
                        )}
                        <h3 className="title">{title}</h3>
                        {designation && (
                            <span className="designation">{designation}</span>
                        )}
                    </div>
                </div>
                <div className="card-description">
                    <Image
                        src={QuoteImg}
                        alt="quote"
                        className="quote-img"
                                                width={500}
                                                height={300}
                    />
                    <div className="title-area">
                        <div className="title-info">
                            {projectTitle && (
                                <h3 className="title">{projectTitle}</h3>
                            )}
                            {projectMeta && (
                                <span className="date">{projectMeta}</span>
                            )}
                        </div>
                        {rating && (
                            <div className="rating">
                                {Array.from(
                                    { length: Number(rating) },
                                    (_, i) => (
                                        <img
                                            key={i}
                                            src="https://res.cloudinary.com/faksam-soft/image/upload/v1747693432/brandmecreatives/rating_kwdcom.png"
                                            alt="rating"
                                        />
                                    )
                                )}
                            </div>
                        )}
                    </div>
                    <div className="seperator"></div>
                    <p className="discription">{desc}</p>
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    designation: PropTypes.string,
    subtitle: PropTypes.string,
    desc: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType),
    rating: PropTypes.shape(ImageType),
    projectTitle: PropTypes.string,
    projectMeta: PropTypes.string,
};

export default Testimonial;
