import { Button, Card, Space, Tag } from "antd";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-gap: 40px;
    /* margin: 80px; */

`;

const Projects = () => {

    const data = [
        {
            projectName: "Bookingnamlong",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            live: "https://namlongapp.onrender.com/cart",
            link: "https://github.com/pvphuc2301/namlongapp",
            description: <>
                An innovative Real Estate website that provides an efficient booking functionality, transactions and customer management. the platform efficiently handles customer information, ensuring smooth interactions between buyers, sellers, and agents while prioritizing data privacy and security.
            </>,
            stack: [
                "React",
                "NodeJS",
                "MongoDB",
                "ExpressJS"
            ]
        },
        {
            projectName: "EMR",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            link: "https://github.com/pvphuc2301/emrapp",
            description: <>
                Electronic Medical Record (EMR) is a web application that allows authorized users (doctors,
                nurses) to access and input patient’s health information (clinical summary, lab result, exam
                reports and images, patient’s visit information history, medical record forms) and other
                resources.
            </>
            ,
            stack: [
                "ASP.NET",
                "C#",
                "CSS",
                "JavaScript",
            ],
        },
        {
            projectName: "PDCA",
            images: [
                "https://source.unsplash.com/random/400x300/?code",
            ],
            link: "https://github.com/pvphuc2301/PDCA",
            description: <>
                A PDCA (Plan-Do-Check-Act) application equipped with specialized modules to enhance the quality and performance of nurse managers. It efficiently coordinates all nursing activities, streamlining processes such as medical record submission, transfer, and approval tracking.
            </>,
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
            description: <>
                The Radiology Portal is a web application that empowers authorized users to create, view, and print patient exam reports and images seamlessly online.
            </>,
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
                            <Card key={index}>
                                <h1>{item.projectName}</h1>
                                <div>
                                    {item.stack.map((stack, index) => {
                                        return <Tag color="blue" key={index}>{stack}</Tag>
                                    })}
                                </div>
                                <p>
                                    {item.description}
                                </p>
                                <Space>
                                    {item.live &&
                                        <a href={item.live} target="_blank" rel="noreferrer">
                                            <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                                            </svg>}>
                                                Live Demo
                                            </Button>
                                        </a>
                                    }

                                    {item.link &&
                                        <a href={item.link} target="_blank" rel="noreferrer">
                                            <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ant-menu-item-icon" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>}>
                                                Github
                                            </Button>
                                        </a>
                                    }
                                </Space>
                            </Card>
                        </>

                    )
                })
            }
        </Grid>
    )
}

export default Projects;