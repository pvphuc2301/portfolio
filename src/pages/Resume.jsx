import { Anchor, Col, Row, Timeline } from "antd";

const Resume = () => {

    return (
        <>
            <h2>My Experience</h2>

            <p>
                NET Developer with 3+ years of experience developing web. With the ability to research
                analyze, solve problems and willing for learning new technology.
                I am looking for a place to grow my skills and provide value to the company.
            </p>

            <Timeline
                items={[
                    {
                        children: <>
                            <p>Jan 2024 - Present</p>
                            <h3>Full Stack Developer</h3>
                            <p>Freelance </p>
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