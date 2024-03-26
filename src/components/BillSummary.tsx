import React from "react";

interface BillSummaryProps {
  totalAmount: number;
  friends: string[];
}

const BillSummary: React.FC<BillSummaryProps> = ({ totalAmount, friends }) => {
  const amountPerFriend = totalAmount / friends.length;

  return (
    <div className="bill-summary">
      <h2>Bill Summary</h2>
      <p>Total Bill Amount: ${totalAmount.toFixed(2)}</p>
      <p>
        Amount per Friend: ${amountPerFriend.toFixed(2)} ({friends.length}{" "}
        friends)
      </p>
    </div>
  );
};

export default BillSummary;
