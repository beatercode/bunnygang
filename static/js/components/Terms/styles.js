import styled from "styled-components";



export const Description = styled.p `
	color: var(--light-grey);
	font-size: 1rem;
	font-weight: 700;
`;

export const Title = styled.p `
	color: var(--white);
	font-size: 3rem;
	font-weight: 800;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
`;

export const TermsContainer = styled.div `
	max-width: 800px;
	overflow: hidden;
	background: var(--red);
	border-radius: 20px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	align-items: stretch;
	margin: auto;
	padding: 40px;
	text-align: justify;
`;