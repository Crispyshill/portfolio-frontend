import tigerBanner from '../img/tiger_banner.JPG'
import './Home.css';

export default function Home(){
	return (
	<div className='home-container'>
		<div className='tiger-banner-container'>
		          <img src={tigerBanner} alt="tiger banner" className="tiger-banner"/>
			<div className='text-overlay'>
			<span>Megan Hillsberry</span>
		</div>
		</div>
		</div>
	);

}
