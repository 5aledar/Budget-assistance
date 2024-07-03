export default function DepositHistory(params) {
    const data = [
      {"Amount":"500","Bank":"visa","Date":"2024/2/4","Description":"null "},
      {"Amount":"750","Bank":"visa","Date":"2024/2/6","Description":"lorem abcd sskkdsp "},
      {"Amount":"300","Bank":"visa","Date":"2024/2/8","Description":"null "},
      {"Amount":"160","Bank":"visa","Date":"2024/2/8","Description":"lorem abcd sskkdsp "},
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
            <tr style={{ borderBottom: '1px solid #4B476C' , height:"59px" }}>
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