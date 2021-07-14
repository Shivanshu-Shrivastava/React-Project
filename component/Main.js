import React, { Component } from 'react'
import '../static/main.css'
import Card from './Card'


export default class Main extends Component {
    render() {
        return (
            <div className='container cardupward'>
                <div className="card" style={{ border: 'unset' }} >
                    <div className="card-body">
                        <div className='grid grid-cols-3 gap-4 grid-md-1'>
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                            <Card title='hello' text='Deveploer' />
                        </div>




                    </div>
                </div>

            </div>
        )
    }
}
