import React, { Component } from 'react';
import Pic4 from "./shared/img/pic4.jpg";
import Pic5 from "./shared/img/pic5.jpg";

const Accounts = (props) => {
    return (  
    <div className="container">
          <div className="row align-items-center row-content">
            <div className="col-sm-4 order-sm-last col-md-3">
                <h2 className="text-sm-right">The account for everyone</h2>
            </div>
            <div className="col">
                <div className="media">
                    <img id="acctImg1" className="d-flex mr-3 img-thumbnail" src={Pic4} alt="Breadcrumb Trail" />
                    <div className="media-body align-self-center">
                        <h3>Everyone's Checking</h3>
                        <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus dolor ut odio ullamcorper dignissim.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="row align-items-center row-content">
            <div className="col-sm-4 col-md-3">
                <h2>Your everyday savings</h2>
            </div>
            <div className="col">
                <div className="media">
                    <div className="media-body align-self-center">                        
                        <h3>Everyone's Savings</h3>
                        <p className="d-none d-sm-block">
                            Lorem ipsum dolor sit amet, curabitur auctor aliquam nisl hendrerit laoreet. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                    <img id="acctImg2" className="ml-3 d-flex img-thumbnail" src={Pic5} alt="Breadcrumb Trail" />
                </div>
            </div>
        </div>
        </div> );
}
 
export default Accounts;