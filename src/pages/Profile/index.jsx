import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Front';

const Profile = (props) => {

    return (
        <React.Fragment>
           <Navbar />
            <section className="hero is-fullheight is-primary" >
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{props.credential.sub} : {props.credential.name}</h1>
                        <h2 className="subtitle">{props.credential.email}</h2>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}
export default Profile