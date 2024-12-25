import { ReactNode } from "react";

 

const layout = ({ banner, aboutCourse, bigenners, skills, feedback, certificate, milestone }: { banner: ReactNode, aboutCourse: ReactNode, bigenners: ReactNode, skills: ReactNode, feedback: ReactNode, certificate:ReactNode,milestone:ReactNode }) => {
    return (
        <div>
            {banner}
            {aboutCourse}
            {bigenners}
            {skills}
            {feedback}
            {certificate}
            {milestone}
        </div>
    );
};

export default layout;