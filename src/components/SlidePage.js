import React from "react";
import styled from "@emotion/styled";

const SlidePage = ({
	title,
	subTitle,
	link,
	visibleOnScrollCount,
	currentSlide,
	slideId,
}) => {
	console.log("slideId", slideId, "currentSlideState", currentSlide);
	if (slideId === currentSlide) {
		return (
			<StyledSlidePage>
				<Hero visibleOnScrollCount={visibleOnScrollCount}>
					<h1>{title}</h1>
					<p>{subTitle}</p>
					<a href='#'>{link}</a>
				</Hero>
			</StyledSlidePage>
		);
	} else {
		return null;
	}
};

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 50%;
	height: 50vh;

	h1,
	p,
	a {
		position: relative;
		top: ${(props) =>
			props.visibleOnScrollCount && 1.5 * props.visibleOnScrollCount}em;
		animation: moveup 1s ease forwards;
	}

	p {
		animation-delay: 0.5s;
	}

	a {
		animation-delay: 1s;
	}
	@keyframes moveup {
		from {
			top: ${(props) =>
				props.visibleOnScrollCount &&
				1.5 * props.visibleOnScrollCount}em;
			opacity: 0;
		}
		to {
			top: 0px;
			opacity: 1;
		}
	}
`;

const StyledSlidePage = styled.section`
	width: 100%;
	height: 100vh;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
`;
export default SlidePage;
