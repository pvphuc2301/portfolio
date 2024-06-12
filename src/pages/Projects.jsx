import { Tag } from "antd";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-gap: 40px;
    margin: 80px;

`;



const Projects = () => {

    const data = [
        {
            projectName: "EMR",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            link: "https://github.com/PhanVPhuT/EMR",
            description: 'EMR (Electronic Medical Record) is a web application that allows healthcare professionals to manage patient records electronically. It provides a user-friendly interface for creating, updating, and retrieving patient information. With EMR, healthcare providers can easily access patient data, order lab tests, and schedule appointments, all from a single platform.',
            stack: [
                "React",
                "Styled Components",
                "Firebase"
            ],
        },
        {
            projectName: "Bookingnamlong",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            link: "https://github.com/PhanVPhuT/Bookingnamlong",
            description: '',
            stack: [
                "React",
                "Styled Components",
                "Firebase"
            ]
        }
    ]

    return (
        <Grid>
            {
                data.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                {item.images.map((image, index) => {
                                    return <img src={image} alt="Random image" key={index} />
                                })}
                            </div>
                            <div key={index}>
                                <h1>{item.projectName}</h1>
                                <div>
                                    {item.stack.map((stack, index) => {
                                        return <Tag color="magenta" key={index}>{stack}</Tag>
                                    })}
                                </div>
                                <a href={item.link}>bookingnamlong.com</a>
                                <p>
                                    {item.description}
                                </p>
                                <a href={item.link}>Read more</a>
                            </div>
                        </>

                    )
                })
            }
        </Grid>
    )
}

export default Projects;