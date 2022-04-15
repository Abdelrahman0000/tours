import React, { useState } from 'react'
import './brith.css';
import List from './list';
import data from './data';
export default function Birth() {
    const [people,setPeople]=useState(data)
  return (
    <main>
        <section className='container'>
            <h3>{people.length} borth day</h3>
            <List people={people} />
            <button onClick={()=>setPeople([])}>Clear All</button>
        </section>
    </main>
  )
}
