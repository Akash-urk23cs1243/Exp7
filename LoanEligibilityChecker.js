import React, { useState } from "react";
import "./LoanEligibilityChecker.css";

function LoanEligibilityChecker() {  // match file name
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const handleCheckEligibility = () => {
    if (!age || !income || !loanAmount || !creditScore) {
      alert("Please fill all fields!");
      return;
    }

    if (age <= 0 || income <= 0 || loanAmount <= 0 || creditScore < 0) {
      alert("All values must be positive!");
      return;
    }

    let eligible = true;
    let message = "";

    if (age < 21 || age > 60) {
      eligible = false;
      message += "Age not in eligible range (21-60). ";
    }
    if (income < 30000) {
      eligible = false;
      message += "Income too low. ";
    }
    if (loanAmount > 0.5 * income) {
      eligible = false;
      message += "Loan amount exceeds 50% of income. ";
    }
    if (creditScore < 650) {
      eligible = false;
      message += "Credit score too low. ";
    }

    if (eligible) {
      setResult("✅ You are eligible for the loan!");
      setColor("green");
    } else {
      setResult("❌ Not eligible: " + message);
      setColor("red");
    }
  };

  return (
    <div className="loan-container">
      <h2>🏦 Loan Eligibility Checker</h2>

      <div className="input-group">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Monthly Income (₹):</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Requested Loan Amount (₹):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Credit Score:</label>
        <input
          type="number"
          value={creditScore}
          onChange={(e) => setCreditScore(parseInt(e.target.value))}
        />
      </div>

      <button onClick={handleCheckEligibility}>Check Eligibility</button>

      {result && <div className="result" style={{ color: color }}>{result}</div>}
    </div>
  );
}

export default LoanEligibilityChecker;
