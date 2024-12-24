import { ReactNode } from "react";

 

const layout = ({ banner, aboutCourse, bigenners,skills }: { banner: ReactNode, aboutCourse: ReactNode, bigenners:ReactNode,skills:ReactNode }) => {
    return (
        <div>
            {banner}
            {aboutCourse}
            {bigenners}
            {skills}
        </div>
    );
};

export default layout;