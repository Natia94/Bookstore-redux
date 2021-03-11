import React,{useEffect} from 'react'
//import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'
import {fetchOrders} from '../redux/actions/ordersActionCreator'

function OrderHistory (props){
    console.log('props from Orders History', props)
    return (
        <Table size="md">
            <thead>
                <tr>
                    <th>Order Placed:{}</th>
                    <th>Ship To:{}</th>
                    <th>Order: #{}</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                    A Journey To The Center Of The Earth
                    by jules Gabriel Verne
                    $27.99
                    </td>
                    <td>QTY: 6</td>
                    <td>Subtotal:$167.94</td>
                </tr>
                
                <tr>
                    <td colSpan="3">Total: $</td>
                </tr>
            </tbody>
        </Table>
    )
}

const mapStateToProps = state => {
    return {
      OrderData: state.orders
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)

