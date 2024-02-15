import React, { Component } from 'react'
import * as alertify from 'alertifyjs';
import "alertifyjs/build/css/themes/default.min.css";
import "alertifyjs/build/css/themes/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css";
import EmployeeService from '../../services/EmployeeService';
import { withRouter } from 'react-router';
import Moment from 'react-moment';

class EmployeeDetail extends Component {
    constructor(props) {
         super(props)
        this.state = {
            matricule:props.matricule,
            id: props.id,
             nom: props.nom,
             preNom: props.preNom,
           
            age: props.age, 
        };
        // props.array.map(a => {
        //     console.log(a + ' : ' + props[a] + ' : ' + (typeof props[a]))
        // })
    }
    editEmployee(id) {
        alertify.confirm(
            "Are you sure to edit this Employee.",
            ok => {
                window.localStorage.setItem("employeeId", id);
                this.props.history.push('/edit-employee');
            },
            cancel => {
                alertify.error('Cancel');
            }
        ).set({ title: "Attention" }).set({ transition: 'slide' }).show();
    }
    deleteEmployee(employeeid) {
        alertify.confirm("Are you sure to delete this Employee.",
            function () {
                EmployeeService.deleteEmployee(employeeid)
                    .then(res => {
                        window.location.href = '/employees';
                        alertify.success("Deleting is ok ");
                    })
            },
            function () {
                alertify.error('Cancel');
            }
        ).set({ title: "Attention" }).set({ transition: 'slide' }).show();
    }
    render() {
        var age = null;
        if (this.props.bornDate != null) {
            var born = Number(this.props.bornDate.substr(0, 4));
            var now = Number(new Date().toLocaleDateString('tr-TR').substr(6, 4));
            age = now - born;
        }
        return (
            <div>
                <div className="card" >
                    <div className="card-header"> <h3> Employee Detail</h3>  </div>
                    <ul className="text-left list-group list-group-flush">
                        <li className="list-group-item"><b>Employee id : </b>{this.props.id}</li>
                        <li className="list-group-item"><b>Name : </b>{this.props.nom}</li>
                        <li className="list-group-item"><b>Last Name : </b>{this.props.preNom}</li>
                        <li className="list-group-item"><b>age No : </b>{this.props.age}</li>
                      
                        {this.props.showButtons?
                        <li className="list-group-item">
                            <button
                                className="btn btn-sm btn-success"
                                onClick={() => this.editEmployee(this.props.id)} >
                                Edit
                            </button>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => this.deleteEmployee(this.props.id)}>
                                Delete 
                            </button>
                        </li>
                         : null}
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(EmployeeDetail)
