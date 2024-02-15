import React, { Component } from 'react' 
import { withRouter } from 'react-router';
import Moment from 'react-moment';

class EmployeeDetailModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:  props.employee.id, 
            nom: props.employee.nom, 
            prenom: props.employee.preNom,
            age: props.employee.age, 
            message: ''
        }; 
    } 
    render() {
         
        return (
            <div className="modal fade" id="employeeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Employee Detail</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="card" >
                                    <div className="card-header"> <h3>{this.props.employee.nom} {this.props.employee.preNom}</h3></div>
                                    <ul className="text-left list-group list-group-flush">
                                        <li className="list-group-item"><b>Employee id : </b>{this.props.employee.id}</li> 
                                        <li className="list-group-item"><b>nom : </b>{this.props.employee.nom}</li>
                                        <li className="list-group-item"><b>prenom : </b>{this.props.employee.preNom}</li>
                                        <li className="list-group-item"><b>age No : </b>{this.props.employee.age}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(EmployeeDetailModal)
