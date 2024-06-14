import { Button, Flex } from "antd";
import styled from "styled-components";
import photo from '../photo.jpg';
import cv from '../phan-van-phut-cv.pdf';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 40px;
    min-height: calc(100vh - 164px);
    align-items: center;

    @media screen and (max-width: 500px) {
        & > img {
            grid-row: 1;
        }
    }
`;

const Home = () => {
    return (
        <Grid>
            <div>
                <h2>Software Developer</h2>
                <h1>👋 Hello I'm</h1>
                <h1>Phan Văn Phút</h1>
                <p>🔥 I'm a passionate Full Stack Web Developer. I have been working on web development for 3 year. I'm looking for a job.
                </p>
                <a href={cv} download="phut's Resume" target="_blank" rel="noreferrer">
                    <Button type="primary">Download CV <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg></Button>
                </a>
            </div>
            <img style={{ height: "300px", margin: '0 auto' }} src={photo} alt="Random image" />
        </Grid>
    )
}

export default Home;