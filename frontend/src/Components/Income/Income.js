import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";

function Income() {
  const { addIcome } = useGlobalContext();

  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Incomes</h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes"></div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div``;

export default Income;
