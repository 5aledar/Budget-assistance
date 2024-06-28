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
          <tr style={{ borderBottom: '1px solid #4B476C' }}>
            <th>Amount</th>
            <th>Bank</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {data.map(el => (
            <tr style={{ borderBottom: '1px solid #4B476C' }}>
              <td>{el.Amount} $</td>
              <td>{el.Bank}</td>
              <td>{el.Date}</td>
              <td>{el.Description}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }