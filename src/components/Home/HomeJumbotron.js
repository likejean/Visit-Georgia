import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const JumbotronPage = (props) => {
    const { caption } = props;
    console.log('Jambotron', caption);
    return (
        <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron>
                    <h2 className="h1 display-3">{caption === '' ? 'Welcome to Georgia!' : caption}</h2>
                    <p className="lead">
                        This is a simple hero unit, a simple Jumbotron-style component for
                        calling extra attention to featured content or information.
                    </p>
                    <hr className="my-2" />
                    <p>
                        It uses utility classes for typgraphy and spacing to space content out
                        within the larger container.
                    </p>
                    <p className="lead">
                        <MDBBtn color="primary">Explore More About {caption === '' ? 'Georgia!' : caption}</MDBBtn>
                    </p>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;