import { useState, useEffect } from 'react';



function BeverageList() {
  const [beverages, setBeverages] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');

    if (response.ok) {
      const { beverages } = await response.json();

      setBeverages(beverages);
    } else {
      console.error("An error occurred check your api fetch for Manufacturers in src/customers.js")
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Current Beverage Inventory</h1>

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
            {beverages.map(beverage => {
              return (
                <tr key={beverage.name}>
                  <td>{beverage.name}</td>
                  <td>{beverage.measurement}</td>
                  <td>{beverage.expiration_date}</td>
                  <td>{beverage.cost}</td>
                  <td>{beverage.store_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BeverageList;
