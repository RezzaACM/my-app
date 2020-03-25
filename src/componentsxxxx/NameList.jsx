import React from 'react'

function NameList() {
    const person = [
        {
            id:'1',
            name:'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id:'2',
            name:'Jhonny',
            age: 30,
            skill: 'React Js'
        },
        {
            id:'3',
            name:'Wong',
            age: 20,
            skill: 'HTML'
        }
    ]
    return (
        <div>
            {
                name.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default NameList
