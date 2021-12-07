import styled from "styled-components";

export const FaqContainer = styled.div `
	width: 800px;
	transition: background;

	@media all and (max-width: 768px) {
		width: 80vw;
	}
`;

export const Description = styled.p `
	color: var(--light-grey);
	font-size: 1rem;
	font-weight: 700;
`;

export const Title = styled.p `
	color: var(--white);
	font-size: 1.4rem;
	font-weight: 800;
	gsap.to("h2.title", {duration: 1, opacity: 0.3});
`;