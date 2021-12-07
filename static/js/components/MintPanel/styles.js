import styled from "styled-components";

export const MintingContainer = styled.div `
	max-width: 700px;
	overflow: hidden;
	border-radius: 4px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;

	@media all and (max-width: 768px) {
		width: 80vw;
	}
`;

export const MintingHero = styled.div `
	flex: 0 0 50%;
	width: max-content;

	@media all and (max-width: 768px) {
		flex: auto;
	}
`;

export const MintingContent = styled.div `
	flex: 1;
	background: var(--red);
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	flex-direction: column;
`;

export const Description = styled.p `
	color: var(--light-grey);
	font-size: 1rem;
	font-weight: 700;
`;

export const Title = styled.p `
	color: var(--white);
	font-size: 2rem;
	font-weight: 800;
`;