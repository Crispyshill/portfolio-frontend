import tigerBanner from '../img/tiger_banner.JPG'
import './Home.css';
import aboutImage from '../img/about-image.png'

export default function Home(){
	return (
	<div className='home-container'>

		<div className='tiger-banner'>
		          <img src={tigerBanner} alt="tiger banner" className="tiger"/>

	<div className='text-overlay'>	
			<h1>Megan Hillsberry</h1>
		<span>Bringing your world into focus</span>
	</div>
		</div>
		<div className='about'>
		<div className='about-text'>
		<h4>About</h4>
		<span>Hillsberry Photography est. 2023 based in Boise, Idaho specializing in family and small business photography all at an affordable and adjustable price.</span>
		<button>About Me</button>
		</div>
		<div className='about-image'>
		<img src={aboutImage} alt="about image"/>
		</div>
		</div>
		</div>
	);

}
