import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";

function Dashboard() {
  const { totalExpense, totalIncome, totalBalance, getIncomes } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="chart-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>{totalIncome()}</p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>{totalExpense()}</p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>{totalBalance()}</p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div``;

export default Dashboard;
