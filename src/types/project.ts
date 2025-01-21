import { LabelColor } from "src/components/label";

export type IProjectLabel = {
    name: string;
    color: LabelColor;
}

export type IProjectTools = {
    icon: any;
    alt: string;
    width: number;
}

export type IProjectItem = {
    title: string
    src: string
    link?: string
    duration?: string
    content: React.ReactNode
    lables?: IProjectLabel[]
    teams?: string[]
    tools?: IProjectTools[]
}