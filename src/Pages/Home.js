import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import moment from "moment";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import "./Home.css";

import NavbarComponent from "./Navbar";

import {getHospitalList, getSpecializationList} from "../redux/actions/extraActions";
import {getDoctorList} from "../redux/actions/doctorActions";

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hospitalList = useSelector((e) => e.extraData.hospitalList);
    const specializationList = useSelector((e) => e.extraData.specializationList);
    const doctorList = useSelector((e) => e.doctorData.doctorList);

    const [formState, setFormState] = useState({
        doctorId: '',
        hospitalId: '',
        specializationId: '',
        date: ''
    })

    useEffect(() => {
        dispatch(getHospitalList());
        dispatch(getDoctorList());
        dispatch(getSpecializationList());
    }, [])

    const onChangeHandler=(e)=>{
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: name === 'date' ? moment(value).format('YYYY-MM-DD') : value
        })
    }

    const onSearchClick=(e)=>{
        e.preventDefault();

        let searchString = '';

        if(formState.doctorId){
            searchString += "doctorId=" + formState.doctorId;
        }

        if(formState.hospitalId){
            if(searchString){
                searchString += "&"
            }
            searchString += "hospitalId=" + formState.hospitalId;
        }

        if(formState.specializationId){
            if(searchString){
                searchString += "&"
            }
            searchString += "specializationId=" + formState.specializationId;
        }

        if(formState.date){
            if(searchString){
                searchString += "&"
            }
            searchString += "date=" + formState.date;
        }

        navigate("/result-page?" + searchString);
    }

    return (
        <div>
            <NavbarComponent/>
            <div className="box">
                <Form className="box_2" onSubmit={onSearchClick}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Doctor Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select type="text" name={"doctorId"} onChange={onChangeHandler} value={formState.doctorId}>
                                <option value="">Select a Doctor</option>
                                {doctorList.map((el) => {
                                    return(
                                        <option key={"doctor-" +el.id} value={el.id}>{el.name}</option>
                                    )
                                })}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Hospital
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select type="text" name={"hospitalId"} onChange={onChangeHandler} value={formState.hospitalId}>
                                <option value="">Select a hospital</option>

                                {hospitalList.map((el) => {
                                    return(
                                        <option key={"hospital-" +el.hospitalId} value={el.hospitalId}>{el.hospitalName} - {el.location}</option>
                                    )
                                })}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Specialization
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select type="text" name={"specializationId"} onChange={onChangeHandler} value={formState.specializationId}>
                                <option value="">Select a specialization</option>

                                {specializationList.map((el) => {
                                    return(
                                        <option key={"specialization-" +el.specializationId} value={el.specializationId}>{el.specializationName}</option>
                                    )
                                })}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Booking Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="date" name={"date"} onChange={onChangeHandler} value={formState.date} placeholder="Booking Date"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col className="text-center">
                            <Button
                                disabled={!formState.doctorId && !formState.hospitalId && !formState.specializationId}
                                type="submit"
                                style={{backgroundColor: "#003366", borderColor: "#003366"}}
                            >
                                <img src="/search.png" height="17px" className="mx-2"/>
                                Search
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <div className="footer">

            </div>
        </div>
    );
};

export default Home;
