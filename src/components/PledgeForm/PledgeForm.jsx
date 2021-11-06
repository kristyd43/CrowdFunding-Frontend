import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PledgeForm() {
  const [pledgeInfo, setPledgeInfo] = useState({
    amount: 0,
    comment: "",
    anonymous: false,
    project_id: 0,
  });

  const history = useHistory();
  const enterPledge = (e) => {
    const { id, value } = e.target;
    setPledgeInfo((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
  };

  const postPledge = async () => {
    console.log("I'm pledging to your campaign!");
    const token = window.localStorage.getItem("token");
    console.log(token);

    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(pledgeInfo),
    });
    if (
      response.status == 404 ||
      response.status == 403 ||
      response.status == 400
    ) {
      history.push("/error");
    }
    return response.json();
  };

  const Checkbox = (e) => {
    //for checkbox onclick, submit 'true' value
    const { id, value } = e.target;
    setPledgeInfo((prevPledge) => ({
      ...prevPledge,
      [id]: !prevPledge[id],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      postPledge().then((response) => {
        if (
          response.status == 404 ||
          response.status == 403 ||
          response.statuscode == 400
        ) {
          history.push("/error");
        }
        history.push("/");
      });
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="pledgeAmount">Pledge Amount: </label>
        <input
          type="text"
          id="amount"
          placeholder="Enter Pledge Amount"
          onChange={enterPledge}
          value={pledgeInfo.amount}
        />
      </div>
      <div>
        <label htmlfor="pledgeComment">Pledge Comment: </label>
        <input
          type="text"
          id="comment"
          placeholder="Comment on this campaign"
          onChange={enterPledge}
          value={pledgeInfo.comment}
        />
      </div>
      <div>
        <label htmlfor="pledgeAnonymous">Anonymous: </label>
        <input
          type="checkbox"
          id="anonymous"
          placeholder="Pledge anonymously?"
          onClick={Checkbox}
          value={pledgeInfo.anonymous}
        />
      </div>
      <div>
        <label htmlfor="pledgeProject_id">Project id: </label>
        <input
          type="text"
          id="project_id"
          placeholder="Choose your campaign"
          onChange={enterPledge}
          value={pledgeInfo.project_id}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit Pledge
      </button>
    </form>
  );
}

export default PledgeForm;
