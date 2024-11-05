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
    const { title } = params;

    const decodedTitle = decodeURIComponent(title);

    return (<WinnerBaziView
        project={projects.find((project) => project.title === decodedTitle) || projects[0]}
    />);
}
