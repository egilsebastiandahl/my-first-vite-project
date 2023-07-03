import { ReactElement } from 'react'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type HeadingProps = {
    title: string;
}

const Heading = ({ title }: HeadingProps): ReactElement => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    return (
        <>
            <h1 onClick={handleClick}>
                {title}
            </h1>
            <Outlet />
        </>
    )
}

export default Heading