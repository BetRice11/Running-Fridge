import { useState } from 'react';

function BeverageForm() {
  const [name, setName] = useState('');
  const [expiration_date, setExpiration_date] = useState('');
  const [cost, setCost] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [store_name, setStore_name] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    data.expiration_date = expiration_date;
    data.cost = cost;
    data.measurement = measurement;
    data.store_name = store_name;

    const BeverageUrl = `http://localhost:8100/api/manufacturers/`
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const beverageResponse = await fetch(BeverageUrl, fetchOptions);
    if (beverageResponse.ok) {
      setName('');
      setExpiration_date('');
      setCost('');
      setMeasurement('');
      setStore_name('');
    }
  }

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  }
  const handleChangeExpiration_date = (event) => {
    const value = event.target.value;
    setExpiration_date(value);
  }
  const handleChangeCost = (event) => {
    const value = event.target.value;
    setCost(value);
  }
  const handleChangeMeasurement = (event) => {
    const value = event.target.value;
    setMeasurement(value);
  }
  const handleChangeStore_name = (event) => {
    const value = event.target.value;
    setStore_name(value);
  }

  return (
    <div className="my-5 container">
      <div className="row">


        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form className="mb-3" onSubmit={handleSubmit} id="create-customer-form">
                <h1 className="card-title">New Dairy!</h1>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value = {name} onChange={handleChangeName} required placeholder="Name" type="text" id="name" name="name" className="form-control" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value = {name} onChange={handleChangeExpiration_date} required placeholder="Expiration_date" type="date" id="expiration_date" name="expiration_date" className="form-control" />
                      <label htmlFor="name">Expiration Date</label>
                      <div className="form-floating mb-3">
                      <input value = {name} onChange={handleChangeCost} required placeholder="Cost" type="text" id="cost" name="cost" className="form-control" />
                      <label htmlFor="name">Cost</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value = {name} onChange={handleChangeMeasurement} required placeholder="Measurement" type="text" id="measurement" name="measurement" className="form-control" />
                      <label htmlFor="name">Measurement</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input value = {name} onChange={handleChangeStore_name} required placeholder="Store_name" type="text" id="store_name" name="store_name" className="form-control" />
                      <label htmlFor="name">Store Name</label>
                    </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeverageForm;
