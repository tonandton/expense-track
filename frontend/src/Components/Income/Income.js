import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";

function Income() {
  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Incomes</h2>
        <div className="income-content">
          <div className="form-container"></div>
          <div className="incomes"></div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div``;

export default Income;
