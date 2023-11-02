import TopComponent from "../topComponent/TopComponent";
import "./Payments.css";

import balance from "../../assets/dashboard assets/balance.svg";
import debt from "../../assets/dashboard assets/debt.svg";
import payments from "../../assets/dashboard assets/payments.svg";
import { NavLink } from "react-router-dom";
import PaymentsTable from "../../components/Tables/PaymentsTable";

const Payments = () => {
  return (
    <div>
      <TopComponent header={"Payment Activity"} />
      <div className="payments-container">
        <div className="payments-tabs">
          <div className="tab">
            <div className="balance-icon">
              <img src={balance} alt="icon" />
            </div>
            <div className="amount">
              <p>Total Balance</p>
              <h4>&#8358;50,000</h4>
            </div>
          </div>

          <div className="tab">
            <div className="debt-icon">
              <img src={debt} alt="icon" />
            </div>
            <div className="amount">
              <p>Total Debt</p>
              <h4>&#8358;50,000</h4>
            </div>
          </div>

          <div className="tab">
            <div className="total-icon">
              <img src={payments} alt="icon" />
            </div>
            <div className="amount">
              <p>Total Payment</p>
              <h4>&#8358;50,000</h4>
            </div>
          </div>
        </div>

        <div className="payments-content">
          <ul className="payments-nav">
            <NavLink to={"/dashboard/payments/wallet"}>
              <li>View Wallet</li>
            </NavLink>
            <NavLink to={"/dashboard/payments/make-payment"}>
              <li>Make Payment</li>
            </NavLink>
          </ul>
        </div>

        <div className="payments-table">
          <PaymentsTable />
        </div>
      </div>
    </div>
  );
};

export default Payments;
