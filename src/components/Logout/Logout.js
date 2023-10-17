import React from 'react';
import Button from 'react-bootstrap/Button';
import arrays from "../../variables/globals";
import { useNavigate } from "react-router-dom";



function Logout() {
  const navigate = useNavigate();


  function clearData() {
    arrays.user = [];
    navigate("/");
  }

  return (
  <div>

<Button variant="primary"
  onClick={clearData}
>Logout</Button>


  </div>
  )}

export default Logout;
