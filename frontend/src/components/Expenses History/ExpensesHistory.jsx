export default function ExpensesHistory(params) {
    const data = [
      {"Amount":"200","Bank":"visa","Date":"2024/1/4","Description":"lorem abcd sskkdsp "},
      {"Amount":"150","Bank":"visa","Date":"2024/2/7","Description":"null "},
      {"Amount":"300","Bank":"visa","Date":"2024/2/10","Description":"null "},
      {"Amount":"100","Bank":"visa","Date":"2024/2/14","Description":"lorem abcd sskkdsp "},
    ];
  
    return (
      <div>
        <table className="text-white w-100" style={{ borderCollapse: 'collapse' }}>
          <tr style={{ borderBottom: '1px solid #4B476C' , height:"59px" }}>
            <th className="ps-5">Amount</th>
            <th>Bank</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {data.map(el => (
            <tr style={{ borderBottom: '1px solid #4B476C' , height:"59px"}}>
              <td className="ps-5 w-25">{el.Amount} $</td>
              <td className="w-25">{el.Bank}</td>
              <td className="w-25">{el.Date}</td>
              <td className="w-25">{el.Description}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }