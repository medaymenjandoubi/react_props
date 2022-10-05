import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types'
const Profile = (props) => {
  console.log("props : ",props ,props.children)
  return (<div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
  <MDBContainer>
    <MDBRow className="justify-content-center">
      <MDBCol md="9" lg="7" xl="5" className="mt-5">
        <MDBCard style={{ borderRadius: '15px' }}>
          <MDBCardBody className="p-4">
            <div className="d-flex text-black">
             <button onClick={()=>props.handleName()}>test</button>
              <div className="flex-grow-1 ms-3">
              {props.children}
                <MDBCardTitle>{props.FullName}</MDBCardTitle>
                <MDBCardText>{props.profession}</MDBCardText>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{ backgroundColor: '#efefef' }}>
                  <div>
                    <p className="small text-muted mb-1">{props.bio}</p>
                    <p className="mb-0">22</p>
                  </div>
                </div>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>)

}

Profile.propTypes = {
FullName : PropTypes.string.isRequired,
profession : PropTypes.string.isRequired,
}
Profile.defaultProps = {
  FullName : "unknown",
  profession : "batal"

}
export default Profile