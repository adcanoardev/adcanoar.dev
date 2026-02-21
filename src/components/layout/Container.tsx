type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return <div className={`mx-auto max-w-6xl px-4 ${className ?? ""}`}>{children}</div>;
};

export default Container;
