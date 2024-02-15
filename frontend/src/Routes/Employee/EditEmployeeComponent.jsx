import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';
import * as alertify from 'alertifyjs';
import "alertifyjs/build/css/alertify.css";
import DatePicker from "react-datepicker";

export default class EditEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            nom: '',
            id: '',
            age: '',
            preNom: ''

        }
        this.loadEmployee();
        this.loadEmployee = this.loadEmployee.bind(this);
        this.getAllCities();
    }
    getAllCities() {
        EmployeeService.getCities().then(res => {
            this.setState({ cities: res.data });
        });
    }
    componentDidMount() {
        this.loadEmployee();
        this.getAllCities();
    }

    loadEmployee() {
        EmployeeService.getEmployeeById(window.localStorage.getItem("employeeId")).then((res) => {
            let p = res.data;
            this.setState({
                id: p.id,
                nom: p.nom,
                preNom: p.preNom,
                age: p.age
            });
            console.log(p.age)
        });
    }
    editEmployee = (e) => {
        e.preventDefault();
        let employee = this.state;
        employee['employeeid'] = window.localStorage.getItem("employeeId");
        EmployeeService.editEmployee(employee).then(res => {
            this.props.history.push('/employees');
            alertify.success("Updated Employee is ok");
        });
    }
    onChangeData(type, data) {
        const stateData = this.state;
        stateData[type] = data;
        this.setState({ stateData });
    }
    render() {
         let { nom, age, preNom  } = this.state;
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
                            <label>prenom *</label>
                            <input placeholder="prenom" name="prenom" className="form-control" value={preNom} onChange={e => this.onChangeData('preNom', e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>age *</label>
                            <input placeholder="age" name="age No"
                                className="form-control" value={age}
                                onChange={e => this.onChangeData('age', e.target.value)} />
                        </div>



                        <button className="btn btn-success" onClick={this.editEmployee}>Update</button>
                    </form>
                </div>
                <div className="col"></div>
                <div className="col-lg-3">
                    <img style={{ height: 200 }} src="https://i1.wp.com/www.nosinmiubuntu.com/wp-content/uploads/2013/02/New-Database.png?w=770" alt="" />
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