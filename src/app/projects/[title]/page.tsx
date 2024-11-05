import { projects } from "src/data/projects";
import TemplateView from "src/sections/project/posts/template-view";

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

    return (<TemplateView
        project={projects.find((project) => project.title === decodedTitle) || projects[0]}
    />);
}
