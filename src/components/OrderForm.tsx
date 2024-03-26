import React, { useState } from "react";

interface OrderFormProps {
  onCreateOrder: (orderName: string) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onCreateOrder }) => {
  const [orderName, setOrderName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (orderName.trim() !== "") {
      onCreateOrder(orderName.trim());
      setOrderName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order Name:
        <input type="text" value={orderName} onChange={handleChange} required />
      </label>
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
