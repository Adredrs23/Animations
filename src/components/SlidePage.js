import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const SlidePage = ({
	title,
	subTitle,
	link,
	visibleOnScrollCount,
	currentSlide,
	slideId,
}) => {
	console.log("slideId", slideId, "currentSlideState", currentSlide);

	// let heroAnimation = slideId === currentSlide ? "fade-in" : "fade-out";
	let headerAnimation =
		slideId === currentSlide ? "animate-in" : "animate-out";
	let descriptionAnimation =
		slideId === currentSlide ? "animate-in" : "animate-out";
	let linkAnimation = slideId === currentSlide ? "fade-in" : "fade-out";

	// if (slideId !== currentSlide) {
	// 	return null;
	// }

	return (
		<StyledSlidePage>
			<Hero>
				<Header className={headerAnimation} wordCount={title.length}>
					{title.split(" ").map((char) => (
						<span>{char + " "}</span>
					))}
				</Header>
				<p className={descriptionAnimation}>{subTitle}</p>
				<GradientLink className={linkAnimation}>{link}</GradientLink>
			</Hero>
		</StyledSlidePage>
	);
};

const StyledSlidePage = styled.section`
	width: 100%;
	height: 100vh;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;

	@keyframes fade-disappear {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes fade-appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes appear-above {
		from {
			transform: translateY(-30px);
			opacity: 0;
		}
		to {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	@keyframes disappear-above {
		from {
			opacity: 1;
			transform: translateY(0px);
		}
		to {
			transform: translateY(-30px);
			opacity: 0;
		}
	}
`;

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;

	h1,
	p,
	a {
		opacity: 0;
	}

	p {
		&.animate-in {
			animation: appear-above 1s ease-in-out forwards;
			animation-delay: 1.5s;
		}

		&.animate-out {
			animation: disappear-above 1s ease-in-out forwards;
			/* animation-delay: 1s; */
		}
	}
`;

const Header = styled.h1`
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0.005em;
	font-size: 108px;
	color: white;
	position: relative;

	&.animate-in {
		/* animation: appear-above 0.5s ease-in-out forwards; */
		animation: slideIn 1s ease forwards;
		animation-delay: 0.5s;

		span {
			position: relative;
			opacity: 0;
			animation: slideIn 1s ease forwards;
			${(props) => applyAnimationOnWords(props.wordCount)};
		}
	}
	&.animate-out {
		animation: disappear-above 0.5s ease-in-out forwards;
	}

	/* span {
		top: 10px;
		animation: turnaround 1s ease-in-out forwards;
		animation-delay: 1s;
		position: relative;
	}
	span:nth-child(n) {
		top: -30px;
		left: 20px;
	}
	span:nth-child(2n) {
		top: 30px;
		left: 20px;
	}
	span:nth-child(n + 1) {
		animation-delay: 0.1s;
	}
	span:nth-child(2n + 1) {
		animation-delay: 0.2s;
	} */

	@keyframes slideIn {
		from {
			left: -10%;
		}
		to {
			left: 0;
			opacity: 1;
		}
	}

	@keyframes turnaround {
		0% {
			opacity: 0.2;
		}
		100% {
			top: 0;
			left: 0;
			opacity: 1;
		}
	}
`;

const GradientLink = styled.a`
	background: rgb(70, 229, 155);
	background: linear-gradient(
		90deg,
		rgba(70, 229, 155, 1) 0%,
		rgba(43, 126, 242, 1) 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 18px;
	font-weight: 300;
	line-height: 23px;

	&.fade-in {
		animation: fade-appear 1s ease-in-out forwards;
		animation-delay: 1s;
	}
	&.fade-out {
		animation: fade-disappear 1s ease-in-out forwards;
	}
`;

export default SlidePage;

function applyAnimationOnWords(n) {
	let styles = "";

	for (let i = 1; i < n; i += 1) {
		styles += `
            &:nth-child(${i}) {
              animation-delay: ${i * 0.15}s;
            }
     `;
	}

	return css`
		${styles}
	`;
}
