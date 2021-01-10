import React from "react";
import SlideContainer from "./components/SlideContainer";
import styled from "@emotion/styled";

const App = () => {
	return (
		<AppContainer>
			<SlideContainer />
		</AppContainer>
	);
};

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: linear-gradient(
		-60deg,
		#000000 4.25%,
		#020202 29.98%,
		#090909 38.93%,
		#0e0e0e 42.29%,
		#0e0f10 63.55%,
		#0f1217 71.38%,
		#111823 78.09%,
		#132035 83.68%,
		#152a4c 88.16%,
		#193768 91.52%,
		#1d468a 95.99%,
		#2258b1 99.35%,
		#276bdb 101.58%,
		#2870e6 102.7%
	);
	background-attachment: fixed;
	background-size: 120% 100%;
	animation: bgPulsate 10s ease infinite alternate;
	@keyframes bgPulsate {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export default App;
