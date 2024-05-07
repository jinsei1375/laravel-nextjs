// DataComponent.client.js
import React, { useEffect, useState } from 'react';

export default function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('<http://localhost:8000/api/data>')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data && data.map((item, index) => <div key={index}>{/* item内のデータを表示 */}</div>)}
    </div>
  );
}
