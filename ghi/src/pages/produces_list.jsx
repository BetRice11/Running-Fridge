import { useState, useEffect } from 'react';



function ProduceList() {
  const [produces, setProduces] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');

    if (response.ok) {
      const { produces } = await response.json();

      setProduces(produces);
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
        <h1>Current Produce Inventory</h1>

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
            {produces.map(produce => {
              return (
                <tr key={produce.name}>
                  <td>{produce.name}</td>
                  <td>{produce.measurement}</td>
                  <td>{produce.expiration_date}</td>
                  <td>{produce.cost}</td>
                  <td>{produce.store_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProduceList;
