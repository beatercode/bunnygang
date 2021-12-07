import styled from "styled-components";

export const Descriptionprofile = styled.p `
	font-size: 1rem;
	font-weight: 700;
	text-align: center;
`;

export const TextContainer = styled.div `
	padding: 15px;
	width: 320px;
	overflow: hidden;
	border-radius: 20px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
	text-align: center;
	flex-direction: column;
	grid-gap: 15px;
	background: var(--black);

	@media all and (max-width: 768px) {
		width: 80vw;
	}
`;

export const RaritiesContainer = styled.div `
	max-width: 1000px;
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

export const RaritiesContainer1 = styled.div `
	max-width: 1000px;
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

export const ArtistsContainer = styled.div `
	max-width: 1000px;
	// height: 450px;
	overflow: hidden;
	padding: 40px;
	border-radius: 20px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
	background: var(--black);
	@media all and (max-width: 768px) {
		width: 80vw;
	}
`;

export const Descriptionmarket = styled.p `
	color: var(--light-grey);
	font-size: 1rem;
	font-weight: 700;
	text-align: center;
`;

export const Titlemarket = styled.p `
	color: var(--white);
	font-size: 1.4rem;
	font-weight: 800;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
    text-align: center;
`;

export const tokenList = styled.div `
	display: flex;
	grid-gap: 40px;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-bottom: 15px;
	margin-top: 3px;
`;

export const token = styled.div `
	width: 280px;
	height: 425px;
	background-color: rgba(255, 255, 255, 0.1);
	// border: 0.1rem solid white;
	z-index: 999;
	transition: all 0.4s ease-in-out;

	&:hover {
		box-shadow: 0px 10px 11px 5px #181818;
		cursor: pointer;
		transform: translateY(-2%);
	}
`;

export const tokenImage = styled.div `
	background: transparent;
	display: flex;
	justify-content: center;
	margin: 0px;
	align-items: center;
	overflow: hidden;
	border: none;
	padding: 1rem 1rem 0px;
	height: 305px;
`;

export const token_details = styled.div `
	flex: 1 1 auto;
	padding: 0.1rem;
`;

export const price = styled.div `
	margin-left: 10px;
	font-weight: bold;
	margin-bottom: 3px;
	font-size: 16px;
	max-width: 80px;
	color: rgb(0, 0, 0);
	background-color: var(--red);
	border-radius: 30px;
`;

export const last_price = styled.div `
	position: absolute;
	bottom: 25px;
	right: 15px;
	font-size: 14px;
	display: flex;
	flex-wrap: wrap;
	font-weight: 400;
	line-height: 1.5;
`;

export const eth_cont = styled.div `
	width: 32px
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 2px;
`;

export const picture_cont = styled.div `
	max-width: 20px;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-left: 5px;
	margin-right: 5px;
`;

export const price_cont = styled.div `
	padding-left: 8px;
	font-weight: bold;
	color: white;
`;

export const last_price_writing = styled.div `
	color: white;
	margin-top: 7px;
`;

export const titlef = styled.div `
	font-weight: bold;
	font-size: 1.2rem;
	color: var(--red);
`;

export const Titleartist = styled.p `
	color: var(--red);
	font-size: 1.9rem;
	font-weight: 800;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
    text-align: center;
`;

export const Titlepopup = styled.p `
	color: var(--white);
	font-size: 1.8rem;
	text-align: center;
`;

export const Attributescontainer = styled.div `
	max-width: 300px;
	overflow: hidden;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
	background: var(--black);
	@media all and (max-width: 768px) {
		width: 80vw;
	}
`;

export const Textattributes = styled.p `
	color: var(--white);
	font-size: 1rem;
	font-weight: 100;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
    text-align: center;
`;

export const Attcont = styled.div `
	max-width: 800px;
	overflow: hidden;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: stretch;
	grid-gap: 10px;
	justify-content: center;
	flex-wrap: wrap;
	@media all and (max-width: 768px) {
		width: 80vw;
	}
`;

export const TitleAttributes = styled.p `
	color: var(--white);
	font-size: 1.4rem;
	font-weight: 100;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
    text-align: center;
`;

export const cadre = styled.div `
	// border: 0.1rem solid white;
`;