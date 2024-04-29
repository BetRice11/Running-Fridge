import React from 'react';

const CategoryPage = ({ category }) => {
    // Placeholder data for each category
    let categoryItems = [];
    if (category === 'Beverages') {
        categoryItems = [
            { id: 1, name: 'Coffee', cost: '$3.50', expiration: '2024-04-15' },
            { id: 2, name: 'Tea', cost: '$2.00', expiration: '2024-04-20' },
            { id: 3, name: 'Soda', cost: '$1.75', expiration: '2024-04-10' }
        ];
    } else if (category === 'Dairies') {
        categoryItems = [
            { id: 1, name: 'Milk', cost: '$2.50', expiration: '2024-04-12' },
            { id: 2, name: 'Cheese', cost: '$4.00', expiration: '2024-04-18' },
            { id: 3, name: 'Yogurt', cost: '$1.75', expiration: '2024-04-15' }
        ];
    } else if (category === 'Grains') {
        categoryItems = [
            { id: 1, name: 'Rice', cost: '$5.00', expiration: '2024-05-01' },
            { id: 2, name: 'Bread', cost: '$3.50', expiration: '2024-04-25' }
        ];
    } else if (category === 'Produces') {
        categoryItems = [
            { id: 1, name: 'Apples', cost: '$2.00', expiration: '2024-04-08' },
            { id: 2, name: 'Bananas', cost: '$1.50', expiration: '2024-04-10' },
            { id: 3, name: 'Carrots', cost: '$1.25', expiration: '2024-04-12' }
        ];
    } else if (category === 'Proteins') {
        categoryItems = [
            { id: 1, name: 'Chicken', cost: '$6.00', expiration: '2024-04-20' },
            { id: 2, name: 'Beef', cost: '$8.00', expiration: '2024-04-22' },
            { id: 3, name: 'Fish', cost: '$7.50', expiration: '2024-04-18' }
        ];
    }

    return (
        <div>
            <h1>{category}</h1>
            <ul>
                {categoryItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.cost}</span>
                        <span>{item.expiration}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
