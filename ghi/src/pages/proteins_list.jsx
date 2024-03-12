import { useState, useEffect } from 'react';



function ProteinList() {
  const [proteins, setProteins] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/manufacturers/');

    if (response.ok) {
      const { proteins } = await response.json();

      setProteins(proteins);
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
        <h1>Current Protein Inventory</h1>

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
            {proteins.map(protein => {
              return (
                <tr key={protein.name}>
                  <td>{protein.name}</td>
                  <td>{protein.measurement}</td>
                  <td>{protein.expiration_date}</td>
                  <td>{protein.cost}</td>
                  <td>{protein.store_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProteinList;
