import { Anchor, Col, Row, Timeline } from "antd";

const Resume = () => {

    return (
        <>
            <h2>My Experience</h2>

            <p>
                As an experienced web developer with three years of hands-on work, I specialize in C#, JavaScript, Sql, NodeJs, ReactJS and Web API. My expertise lies in writing efficient, testable code and creating user-friendly website layouts using standard HTML/CSS practices. Additionally, I stay updated on emerging technologies and industry trends.
            </p>

            <Timeline
                items={[
                    {
                        children: <>
                            <p>Jan 2024 - Present</p>
                            <h3>Full Stack Developer</h3>
                            <p> Freelance </p>
                        </>,
                    },
                    {
                        children: <>
                            <p>March 2023 - December 2023</p>
                            <h3>Full Stack Developer</h3>
                            <p>Stepmedia Software Vietnam Co., Ltd</p>
                        </>,
                    },
                    {
                        children: <>
                            <p>March 2022 - December 2022</p>
                            <h3>.Net Developer</h3>
                            <p>American International Hospital</p>
                        </>,
                    }
                ]}
            />
        </>
    )
}

export default Resume;