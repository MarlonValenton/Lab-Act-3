import './VideoCard.css';

function VideoCard() {
return (

<div className="video-container">
    <div className="video">
        <img src="img/profile-pic.png" className="thumbnail" alt=""/>
        <div className="content">
            <img src="img/profile-pic.png" className="channel-icon" alt=""/>
            <div className="info">
                <h4 className="title">Video 111231141</h4>
                <p className="channel-name">modern web</p>
            </div>
        </div>
    </div>
</div>
);
}


export default VideoCard;