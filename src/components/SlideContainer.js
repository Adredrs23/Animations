import styled from "@emotion/styled";
import React, { useState } from "react";
import SlidePage from "./SlidePage";

const SlideContainer = () => {
	const [slide, setSlide] = useState(0);
	console.log("slide state", slide);
	return (
		<StyledSlideContainer>
			<button
				style={{ position: "absolute", zIndex: 50 }}
				onClick={() => {
					console.log("clicked");
					setSlide((prev) => (prev + 1) % 3);
				}}
			>
				Next
			</button>
			<SlidePage
				title='Title 1 '
				subTitle='Lorem ipsum dolor sit amet.'
				link='Learn More'
				visibleOnScrollCount={1}
				currentSlide={slide}
				slideId={0}
			/>
			<SlidePage
				title='Title 2'
				subTitle='Lorem ipsum dolor sit amet.'
				link='Learn More'
				visibleOnScrollCount={2}
				currentSlide={slide}
				slideId={1}
			/>
			<SlidePage
				title='Title 3'
				subTitle='Lorem ipsum dolor sit amet.'
				link='Learn More'
				visibleOnScrollCount={3}
				currentSlide={slide}
				slideId={2}
			/>
		</StyledSlideContainer>
	);
};

const StyledSlideContainer = styled.article`
	width: 100%;
	height: 100vh;
	background-color: transparent;
`;

export default SlideContainer;
