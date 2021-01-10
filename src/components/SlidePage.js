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
					<h1>
						{title.split("").map((char) => (
							<span>{char}</span>
						))}
					</h1>
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

	/* h1 {
		span {
			position: relative;
			animation: turnaround 0.5s ease-in-out forwards;
			&:nth-child(n) {
				top: -30px;
				left: 20px;
				border: 1px solid red;
			}
			&:nth-child(2n) {
				top: 30px;
				left: 20px;
				border: 1px solid cyan;
			}
		}
		@keyframes turnaround {
			from {
				opacity: 0.2;
			}
			to {
				top: 0;
				left: 0;
				opacity: 1;
			}
		}
	} */

	h1,
	p,
	a {
		opacity: 0;
		position: relative;
		top: ${(props) =>
			props.visibleOnScrollCount && 1.5 * props.visibleOnScrollCount}em;
		animation: moveup 1s ease forwards;
		/* animation-delay: 0.5s; */
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
			/* opacity: 0; */
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

	/* animation: slideRightIn 0.5s ease-in-out forwards;

	@keyframes slideRightIn {
		from {
			transform: translateX(-30px);
			opacity: 0;
		}
		to {
			transform: translateX(0px);
			opacity: 1;
		}
	} */
`;
export default SlidePage;
