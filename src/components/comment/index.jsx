import React from "react";
import PropTypes from "prop-types";

const Comment = ({ slug, title }) => {
    return (
        <div className="pt--50">
            <p>Comments functionality will be implemented later.</p>
        </div>
    );
};

Comment.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Comment;
