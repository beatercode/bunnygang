import styled from "styled-components";

export const StoriesContainer = styled.div `
max-width: 350px;

overflow: hidden;
box-shadow: 0 30px 80px 10px rgba(0, 0, 0, 0.2);

align-items: stretch;
flex-wrap: wrap;

@media all and (max-width: 768px) {
	width: 80vw;
}
`;

export const Description = styled.p `
	color: var(--white);
	font-size: 1rem;
	font-weight: 700;
	text-align: justify;
`;

export const Title = styled.p `
	color: var(--red);
	font-size: 1rem;
	font-weight: 800;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
`;

export const Prob = styled.p `
	color: var(--white);
	font-size: 1.3rem;
	font-weight: 800;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
`;

export const Probr = styled.p `
	color: var(--red);
	font-size: 1rem;
	font-weight: 800;
    gsap.to("h2.title", {duration: 1, opacity: 0.3});
`;

export const StoriesHero = styled.div `
flex: 0 0 100%;
width: max-content;


@media all and (max-width: 768px) {
	flex: auto;
}
`;

export const StoriesContent = styled.div `
flex: 1;


display: flex;
flex-direction: column;
`;

export const StoriesContent2 = styled.div `
flex: 1;
background: var(--white);
padding-left: 20px;
padding-right: 20px;
display: flex;
flex-direction: column;
max-height: 150px;
max-width: 250px;
border-radius: 50px;
`;