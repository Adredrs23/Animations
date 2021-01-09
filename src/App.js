import React from "react";
import SlideContainer from "./components/SlideContainer";
import SlidePage from "./components/SlidePage";
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
	background: rgb(70, 229, 155);
	background: linear-gradient(
		90deg,
		rgba(70, 229, 155, 1) 0%,
		rgba(43, 126, 242, 1) 100%
	);
`;

export default App;
