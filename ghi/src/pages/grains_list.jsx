import { useState, useEffect } from 'react';



function GrainList() {
  const [grains, setGrains] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');

    if (response.ok) {
      const { grains } = await response.json();

      setGrains(grains);
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
        <h1>Current Grain Inventory</h1>

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
            {grains.map(grain => {
              return (
                <tr key={grain.name}>
                  <td>{grain.name}</td>
                  <td>{grain.measurement}</td>
                  <td>{grain.expiration_date}</td>
                  <td>{grain.cost}</td>
                  <td>{grain.store_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GrainList;
