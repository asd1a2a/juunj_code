import React from "react";
import "../Css/Main.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
	AOS.init();
	return (
		<div className="main">
			<section className="section-01">
				<img src="https://img.ssfshop.com/display/category/BDM/A07/A11/contents/23358_349588_11_KOR_20241108171952.jpg" alt="banner01" />
				<p data-aos="fade-in" data-aos-duration="2000">
					Juun.J 가 머문 까만 쇼핑의 시간
				</p>
			</section>
			<section className="section-02">
				<Link to="https://www.ssfshop.com/JUUN-J/main?dspCtgryNo=&brandShopNo=BDMA07A11&brndShopId=ECBJC&leftBrandNM=JUUN.J_ECBJC" target="_blank">
					ONLINE SHOP KOREA
				</Link>
			</section>
		</div>
	);
}

export default Main;
