import "../Statistics/Statistics.css";
export default function Statistics() {
  return (
    <div className="d-inline-flex">
        <div className="cardSta">
          <h5>Total Balance :</h5>
          <h1>1,775.99 $ </h1>
          <p>increased by 13% </p>
        </div>
        <div className="cardSta">
          <h5>last month Expenses</h5>
          <h1>120.99 $ </h1>
          <p>increased by 13% </p>
        </div>
        <div className="cardSta">
          <h5>last week Expenses</h5>
          <h1>75.99 $ </h1>
          <p>Decreased by 4% from the week before </p>
        </div>
        <button class="add-accountBtn">limit you expenses</button>
    </div>
  );
}
