import tigerBanner from '../img/tiger_banner.JPG'
import './Home.css';

export default function Home(){
	return (
	<div className='home-container'>

		<div className='tiger-banner'>
		          <img src={tigerBanner} alt="tiger banner" className="tiger"/>

	<div className='text-overlay'>	
			<span>Megan Hillsberry</span>
		<span>Bringing your world into focus</span>
	</div>
		</div>
		</div>
	);

}
