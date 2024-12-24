import { ReactNode } from "react";

 

const layout = ({ banner, aboutCourse, bigenners }: { banner: ReactNode, aboutCourse: ReactNode, bigenners:ReactNode }) => {
    return (
        <div>
            {banner}
            {aboutCourse}
            {bigenners}
        </div>
    );
};

export default layout;