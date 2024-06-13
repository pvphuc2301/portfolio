import { Button, Flex, Space, Tag } from "antd";
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
            link: "https://github.com/pvphuc2301/emrapp",
            description: 'EMR (Electronic Medical Record) is a web application that allows healthcare professionals to manage patient records electronically. It provides a user-friendly interface for creating, updating, and retrieving patient information. With EMR, healthcare providers can easily access patient data, order lab tests, and schedule appointments, all from a single platform.',
            stack: [
                "ASP.NET",
                "C#",
                "CSS",
                "JavaScript",
            ],
        },
        {
            projectName: "Bookingnamlong",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            live: "https://namlong.onrender.com/",
            link: "https://github.com/pvphuc2301/namlong",
            description: '',
            stack: [
                "React",
                "NodeJS",
                "MongoDB",
                "ExpressJS"
            ]
        },
        {
            projectName: "PDCA",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            link: "https://github.com/pvphuc2301/PDCA",
            description: '',
            stack: [
                "HTML",
                "CSS",
                "C#"
            ]
        },
        {
            projectName: "RisPortal",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            link: "https://github.com/pvphuc2301/RisPortal",
            description: '',
            stack: [
                "HTML",
                "CSS",
                "Blazor",
                "C#"
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
                                        return <Tag color="blue" key={index}>{stack}</Tag>
                                    })}
                                </div>
                                <a href={item.link}>bookingnamlong.com</a>
                                <p>
                                    {item.description}
                                </p>

                                <Space>
                                    {item.live &&
                                        <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                        </svg>}>
                                            Live Demo
                                        </Button>
                                    }

                                    <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ant-menu-item-icon" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>}>
                                        Github
                                    </Button>
                                </Space>


                            </div>
                        </>

                    )
                })
            }
        </Grid>
    )
}

export default Projects;