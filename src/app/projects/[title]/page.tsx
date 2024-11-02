import { projects } from "src/data/projects";
import WinnerBaziView from "src/sections/project/posts/winner-bazi-view";

// ----------------------------------------------------------------------

type Props = {
    params: {
        title: string;
        id: string;
    };
};

export default function ProjectView({ params }: Props) {
    const { id } = params;

    console.log("ddd", id)

    return <WinnerBaziView
        project={projects.find((project) => project.title === id) || projects[0]}
    />;
}
