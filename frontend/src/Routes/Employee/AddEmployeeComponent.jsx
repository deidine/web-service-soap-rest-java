import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';
import * as alertify from 'alertifyjs';
import "alertifyjs/build/css/alertify.css"
import AlertifyService from '../../services/AlertifyService';

class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            age: '',

            preNom: '',


        }

        this.saveEmployee = this.saveEmployee.bind(this);

    }

    controlQuickly() {
        return this.state.name === null || this.state.name === '' || this.state.name === ' ' ||
            this.state.preNom === null || this.state.preNom === '' || this.state.preNom === ' ' ;
    }

    saveEmployee = (e) => {
        if (!this.controlQuickly()) {
            e.preventDefault();

            let employee = this.state;
            // alert(employee.fonction)
            EmployeeService.addEmployee(employee)
                .then(res => {
                    console.log(employee)
                    this.setState({ message: 'User added successfully.' });
                    this.props.history.push('/employees');
                    alertify.success("Adding Employee is ok");
                }).catch((error) => {
                    console.log(error.response)
                    if (error.response) {
                        this.setState({ errorMessage: error.response.data.message, employeeid: null });
                        AlertifyService.alert(error.response.data.message);
                        //this.props.history.push('/Employees');
                    }
                    else if (error.request) console.log(error.request);
                    else console.log(error.message);
                });
        } else
            AlertifyService.alert(' * toute les champs sont obligatoire ...');
    }
    onChangeData(type, data) {
        const stateData = this.state;
        stateData[type] = data;
        this.setState({ stateData });
    }
    back() {
        this.props.history.push('/employees');
    }
    render() {
        //let bornDate = this.state.bornDate;
        const isWeekday = date => {
            const day = date.getDay(date);
            return day !== 0 && day !== 6;
        };
        let { nom, preNom, age } = this.state;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <button
                        className="btn btn-danger"
                        onClick={() => this.back()}> Back </button>
                    <hr />
                </div>
                <div className="col-sm-8">
                    <h2 className="text-center">Ajouter un Employes</h2>
                    <form>
                        <div className="form-group">
                            <label>nom *</label>
                            <input type="text" placeholder="name" name="nom" className="form-control" value={nom} onChange={e => this.onChangeData('nom', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>preNom *</label>
                            <input placeholder="preNom" name="preNom" className="form-control" value={preNom} onChange={e => this.onChangeData('preNom', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>age *</label>
                            <input placeholder="age" name="age" className="form-control" value={age} onChange={e => this.onChangeData('age', e.target.value)} />
                        </div>

                        <button className="btn btn-success" type="button" onClick={this.saveEmployee}>Save</button>
                    </form>
                </div>
                <div className="col"></div>
                <div className="col-lg-3">
                    <img style={{ height: 200 }} src={require('../../Assets/img/add_data.webp')} alt="" />
                </div>
                <div className="col-sm-12">
                    <hr />
                    <hr />
                    <hr />
                </div>
            </div>
        );
    }
}

export default AddEmployeeComponent;