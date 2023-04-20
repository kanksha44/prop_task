import React from "react";

const Invitation = (invitationDetails) => {
  return (
    <div className="para">
      <h4>Subject: {invitationDetails.bdaypartyinvite}</h4>
      <h4>
        {" "}
        To : {invitationDetails.name}
        {invitationDetails.emails}
      </h4>
      <p> Hi , {invitationDetails.name}</p>
      <p className="invitation-content">
        I am having a {invitationDetails.bparty} next Friday at my Home . Would
        you like to come? It will be fun . Lots of people from my school are
        coming . you know some of them - {invitationDetails.friends} . My house
        is behind our school , near {invitationDetails.location} . I hope you
        will come and see you soon.
      </p>
      <p>from ,</p>
      <p className="invitation-from">{invitationDetails.name}</p>
    </div>
  );
};

export default Invitation;
