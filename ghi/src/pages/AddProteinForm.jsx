import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProtein } from '../app/fridgeSlice';

function AddProteinForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [storeName, setStoreName] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsAdding(true);
        try {
            await dispatch(createProtein({ name, cost, expirationDate, measurement, storeName }));
            // Reset form fields after successful submission
            setName('');
            setCost('');
            setExpirationDate('');
            setMeasurement('');
            setStoreName('');
        } catch (error) {
            console.error('Error adding protein:', error);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} required />
            <input type="date" placeholder="Expiration Date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
            <input type="text" placeholder="Measurement" value={measurement} onChange={(e) => setMeasurement(e.target.value)} required />
            <input type="text" placeholder="Store Name" value={storeName} onChange={(e) => setStoreName(e.target.value)} required />
            <button type="submit" disabled={isAdding}>{isAdding ? 'Adding...' : 'Add Protein'}</button>
        </form>
    );
}

export default AddProteinForm;
