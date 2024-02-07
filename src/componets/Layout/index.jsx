import styled from "styled-components";
import { Navbar } from "../Navbar";

function Layout({ children, title, description }) {

    return (
        <>
            <Navbar />
            <Container>
                {title !== undefined ?
                <div className="presentation">
                    <div className="primaryTitle">{title}</div>
                </div> : <></>}
                <div className={title !== undefined ? 'contentTitle' : 'content' }>
                    {children}
                </div>
            </Container>
        </>
    );
}

export { Layout };

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 0px 170px 0px 170px;
    padding: 65px 0px 15px 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100%);
    color: var(--white);
    overflow-y: auto;
    // box-shadow: 0px 4px 10px 0px var(--black);
    
    @media screen and (max-width: 1024px) {
        margin: 0px 60px 0px 60px;
    }
    @media screen and (max-width: 768px) {
        margin: 0px 15px 0px 15px;
        height: 100%;
    }
    @media screen and (max-width: 600px) {
    }
    .presentation{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        max-height: 50px; 
        gap: 20px;
        color: var(--primary-main);
        // background: var(--white);
    }
    .content {
        display: flex;
        width: 100%;
        height: 100%;
        // background: var(--white);
    }
    .contentTitle {
        display: flex;
        width: 100%;
        height: calc(100% - 60px);
        // background: var(--white);
    }
`;