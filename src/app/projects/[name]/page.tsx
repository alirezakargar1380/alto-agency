type Props = {
    params: {
        name: string;
    };
};

export default function Page({ params }: Props) {
    const { name } = params;

    return (<>homw {name}</>);
}
