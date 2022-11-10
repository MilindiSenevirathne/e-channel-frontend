import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import moment from "moment";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import "./CreateChannel.css";

import Navbar from "../Pages/Navbar";

import {getHospitalList, getSpecializationList} from "../redux/actions/extraActions";
import {getDoctorList} from "../redux/actions/doctorActions";
import {createChannel, getSingleChannel, updateChannel} from "../redux/actions/channelActions";

const CreateChannel = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const hospitalList = useSelector((e) => e.extraData.hospitalList);
    const specializationList = useSelector((e) => e.extraData.specializationList);
    const doctorList = useSelector((e) => e.doctorData.doctorList);
    const singleChannel = useSelector((e) => e.channelData.singleChannel);

    const [formState, setFormState] = useState({
        doctorId: '',
        hospitalId: '',
        specializationId: '',
        dateTime: '',
        maximumPatients: 0,
        fee: ''
    })

    useEffect(() => {
        dispatch(getHospitalList());
        dispatch(getDoctorList());
        dispatch(getSpecializationList());
        if(params.id){
            dispatch(getSingleChannel(params.id, true))
        }
    }, [])

    useEffect(() =>{
        if(singleChannel){
            setFormState({
                doctorId: singleChannel.doctorId,
                hospitalId: singleChannel.hospitalId,
                specializationId: singleChannel.specializationId,
                dateTime: singleChannel.dateTime,
                maximumPatients: singleChannel.maximumPatients,
                fee: singleChannel.fee
            })
        }
    }, [JSON.stringify(singleChannel)])

    const onChangeHandler=(e)=>{
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: name === 'dateTime' ? moment(value).format('YYYY-MM-DD HH:mm') : value
        })
    }

    const onSaveClick=(e)=> {
        e.preventDefault();

        if(params.id){
            let obj = {
                dateTime: formState.dateTime,
                maximumPatients: formState.maximumPatients
            }
            dispatch(updateChannel(params.id, obj));
        } else {
            dispatch(createChannel(formState));
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="box1">
                <Form className="box_3" onSubmit={onSaveClick}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Doctor Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select disabled={params.id} type="text" name={"doctorId"} onChange={onChangeHandler} value={formState.doctorId}>
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
                            Specialization
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select disabled={params.id} type="text" name={"specializationId"} onChange={onChangeHandler} value={formState.specializationId}>
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
                            Hospital
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select disabled={params.id} type="text" name={"hospitalId"} onChange={onChangeHandler} value={formState.hospitalId}>
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
                            Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="datetime-local" placeholder="Enter Date" name={"dateTime"} onChange={onChangeHandler} value={formState.dateTime}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Channeling Fee
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control disabled={params.id} type="text" placeholder="Enter Fee" name={"fee"} onChange={onChangeHandler} value={formState.fee}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Maximum Number of Patients
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="Enter Maximum Number of Patients" name={"maximumPatients"} onChange={onChangeHandler} value={formState.maximumPatients}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{span: 10, offset: 2}}>
                            <Button
                                type="submit"
                                style={{backgroundColor: "#003366", borderColor: "#003366"}}
                            >
                                Save
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

export default CreateChannel;
