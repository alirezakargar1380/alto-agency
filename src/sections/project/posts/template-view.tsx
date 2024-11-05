import { IProjectItem } from "src/types/project";
import Template from "../components/template";

type Props = {
    project: IProjectItem;
};

export default function TemplateView({ project }: Props) {

    return (<Template project={project} />);
}