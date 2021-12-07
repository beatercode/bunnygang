import styled from "styled-components";

export const StoriesContainer = styled.div `
	max-width: 900px;
	overflow: hidden;
	border-radius: 20px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;

	@media all and (max-width: 768px) {
		width: 80vw;
	}
`;

export const Description = styled.p `
	color: var(--light-grey);
	font-size: 1rem;
	font-weight: 700;
	text-align: justify;
`;

export const Title = styled.p `
	color: var(--white);
	font-size: 1.4rem;
	font-weight: 800;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
`;

export const StoriesHero = styled.div `
	flex: 0 0 50%;
	width: max-content;

	@media all and (max-width: 768px) {
		flex: auto;
	}
`;

export const StoriesContent = styled.div `
	flex: 1;
	background: var(--red);
	padding-top: 15px;
	padding-left: 30px;
	padding-right: 30px;
	display: flex;
	flex-direction: column;
`;