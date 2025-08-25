import Image from "next/image";

const TeamMember = ({ title, designation, image }) => {
    return (
        <div className="team-card">
            <div className="team-card-inner">
                {image?.src && (
                    <div className="team-image">
                        <Image src={image.src} alt={title} width={200} height={200} />
                        <div className="team-overlay">
                            <div className="team-social">
                                <span className="connect-text">Connect</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className="team-content">
                    <h4 className="team-name">{title}</h4>
                    <p className="team-position">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;