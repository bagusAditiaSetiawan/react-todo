type Props = {
    children: JSX.Element
}

export const AuthLayout = ({ children }: Props) => {
    return (<div className="layout-auth">
        {children}
    </div>);
}
