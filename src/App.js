
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import Filters from './Filters';
import VideoCard from './VideoCard';

export default function App() {
    return (
      <div className="App">
      <Navbar/>
      <Sidebar/>
      <Filters/>
      <VideoCard/>
      </div>
    );
}
