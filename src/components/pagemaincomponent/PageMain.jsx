import React from "react";
import NodeReadWrite from '../NodeReadWrite';
import LoginForm from "../LoginForm";
import Items from "../itemscomponent/Items";


class PageMain extends React.Component {


    render() {
        return (

            <main className="page-main">
                <LoginForm />
                <NodeReadWrite />
            </main>


        )
    }
}

export default PageMain; 