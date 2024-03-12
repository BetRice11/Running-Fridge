import { useState, useEffect } from 'react';



function DairyList() {
  const [dairies, setDairies] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');

    if (response.ok) {
      const { dairies } = await response.json();

      setDairies(dairies);
    } else {
      console.error("An error occurred check your api fetch")
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Current Dairy Inventory</h1>

        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Measurement</th>
              <th>Expiration Date</th>
              <th>Cost</th>
              <th>Store Name</th>
            </tr>
          </thead>
          <tbody>
            {dairies.map(dairy => {
              return (
                <tr key={dairy.name}>
                  <td>{dairy.name}</td>
                  <td>{dairy.measurement}</td>
                  <td>{dairy.expiration_date}</td>
                  <td>{dairy.cost}</td>
                  <td>{dairy.store_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DairyList;
