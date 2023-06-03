import React from 'react'
import ReactDOM from 'react-dom/client'  
import { Table } from './Components/Table/Table'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='grid grid-cols-1 gap-4 p-4 m-4 bg-blue-800 rounded-lg shadow-2xl lg:grid-cols-2'>
    <Table title="INGRESOS"></Table>
    <Table title="GASTOS"></Table>
    </div>  
  </React.StrictMode>,
)
