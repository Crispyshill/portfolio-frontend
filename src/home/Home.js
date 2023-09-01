import tigerBanner from '../img/tiger_banner.JPG'
import './Home.css';

export default function Home(){
	return (
	<div className='home-container'>
		<div className='tiger-banner-container'>
		<div className='tiger-banner'>
			<div className='text-overlay'>
			<span>Megan Hillsberry</span>
		</div>

		          <img src={tigerBanner} alt="tiger banner" className="tiger"/>
		</div>
		</div>
		</div>
	);

}
