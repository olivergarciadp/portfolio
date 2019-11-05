import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/face.svg';
import Layout from '../components/layout';
import Projects from '../components/projects/Projects';
// import Image from "../components/image"
import SEO from '../components/seo';
import './index-style.scss';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="index">
			<div className="center-data">
				<div className="logo-div">
					<img src={logo} alt="logo" className="logo" />
				</div>
				<div className="text-div">
					<h3>Hey There! I am Oliver Garcia (͡° ͜ʖ ͡° )</h3>
					<div>
						<p>
							I am a Mobil Developer, I've spend the last two years working on a company of outsourcing. Now i am Looking for next opportunity.</p>
             
					</div>
          <a href="#"><Link
		>Learn more about me.</Link></a>
				</div>
			</div>
		</div>
		
		<Projects></Projects>
	</Layout>
);

export default IndexPage;
