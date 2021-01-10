import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import SlidePage from "./SlidePage";

const SlideContainer = () => {
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		const scrollDirection = (event) => {
			if (event.deltaY < 0) {
				console.log("scrolling up");
				setSlide((prev) => (prev + 1) % 3);
			} else if (event.deltaY > 0) {
				console.log("scrolling down");
				setSlide((prev) => {
					if (prev === 0) {
						return 2;
					} else {
						return (prev - 1) % 3;
					}
				});
			}
		};
		window.addEventListener("wheel", scrollDirection);
		return () => {
			window.removeEventListener("wheel", scrollDirection);
		};
	});

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
