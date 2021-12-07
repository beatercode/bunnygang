import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div `
	// background-color: var(--black);
	background-color: #363636;
	opacity: 0.9;
	background-image: radial-gradient(circle at center center, #000000, #363636),
		repeating-radial-gradient(
			circle at center center,
			#000000,
			#000000,
			17px,
			transparent 34px,
			transparent 17px
		);
	background-blend-mode: multiply;
	// background-image: ${({ image }) => (image ? `
url($ {
    image
})
` : "none")};
	// background-size: cover;
	// background-position: center;
	max-width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	font-family: "Montserrat";
	overflow: hidden;
`;

export const containerteam = styled.div `
	max-width: 1500px;
	overflow: hidden;
	border-radius: 4px;
	margin: auto;
`;

export const CenterContainer = styled.div `
	padding: 50px;
	background: linear-gradient(to bottom right, #67b26f, #4ca2cd);
	height: 100vh;
	display: flex;
	align-items: center; //cross axis
	justify-content: center; //main axis
`;

// Used for providing space between components
export const SpacerXSmall = styled.div `
	height: 8px;
	width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div `
	height: 16px;
	width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div `
	height: 24px;
	width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div `
	height: 32px;
	width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div `
	display: flex;
	flex: ${({ flex }) => (flex ? flex : 0)};
	flex-direction: ${({ fd }) => (fd ? fd : "column")};
	justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
	align-items: ${({ ai }) => (ai ? ai : "flex-start")};
	background-color: ${({ test }) => (test ? "pink" : "none")};
	width: 100%;
	background-image: ${({ image }) => (image ? `
url($ {
    image
})
` : "none")};
	background-size: cover;
	background-position: center;
	margin: auto;
`;

export const TextTitle = styled.p `
	color: var(--white);
	font-size: 20px;
	font-weight: 500;
`;
export const Titleteam = styled.p `
	font-size: 80px;
	margin: 0;
	font-style: normal
	text-transform: uppercase;
    font-weight: bold;
    text-rendering: geometricPrecision;
	text-align: center;
	color: var(--white);
	letter-spacing: 3px;
`;

export const TextTitleteam = styled.p `
	color: var(--white);
	font-size: 2rem;
	font-weight: 500;
	content-font: "bicyclette", sans-serif;
	text-align: center;
`;

export const TextSubTitle = styled.p `
	color: var(--white);
	font-size: 1rem;
	font-weight: 500;
`;

export const TextDescription = styled.p `
	color: var(--white);
	font-size: 14px;
	font-weight: 600;
`;

export const TextDescription1 = styled.p `
	color: var(--white);
	font-size: 20px;
	font-weight: 600;
	text-align: justify;
	line-height: 1.7;
`;

export const TextDescriptionteam = styled.p `
	color: var(--white);
	font-size: 15px;
	font-weight: 600;
	text-align: center;
`;

export const StyledClickable = styled.div `
	:active {
		opacity: 0.6;
	}
`;

export const PrimaryButton = styled.button `
	background-color: var(--white);
	color: var(--black);
	padding: 15px;
	font-weight: bold;
	border: none;
	border-radius: 4px;

	&:hover {
		color: var(--red);
		cursor: pointer;
	}
`;