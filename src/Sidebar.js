import './Sidebar.css';

function Sidebar() {
    return (
    <div className="side-bar">
    <button className="links active"><img src="img/home.PNG" alt=""/>home</button>
    <button className="links"><img src="img/explore.PNG" alt=""/>explore</button>
    <button className="links"><img src="img/subscription.PNG" alt=""/>subscription</button>
    <hr class="seperator"/>
    <button className="links"><img src="img/library.PNG" alt=""/>library</button>
    <button className="links"><img src="img/history.PNG" alt=""/>history</button>
    <button className="links"><img src="img/your-video.PNG" alt=""/>your video</button>
    <button className="links"><img src="img/watch-later.PNG" alt=""/>watch later</button>
    <button className="links"><img src="img/liked video.PNG" alt=""/>like video</button>
    <button className="links"><img src="img/show more.PNG" alt=""/>show more</button>
</div>
    );
}

export default Sidebar;