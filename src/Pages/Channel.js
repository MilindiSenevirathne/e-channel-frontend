import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AdminNavbar from "./AdminNavbar";
import NavbarComponent from "./Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getChannelList, getSingleChannel} from "../redux/actions/channelActions";
import moment from "moment";
import {createAppointment} from "../redux/actions/appointmentActions";

const Channel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const singleChannel = useSelector((e) => e.channelData.singleChannel);

    const [formState, setFormState] = useState({
        patientName: '',
        patientNIC: '',
        patientEmail: '',
        patientMobile: ''
    })

    useEffect(() => {
        if (!params.get("id")) {
            navigate("/");
        } else {
            dispatch(getSingleChannel(params.get("id")))
        }
    }, [])

    const onChangeHandler=(e)=>{
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();

        let obj = {
            ...formState,
            channelId: params.get("id")
        }

        dispatch(createAppointment(obj));
    }

    return (
        <div>
            <div>
                <AdminNavbar/>
            </div>
            <Form className="mt-5" style={{width: "500px", margin: "auto"}} onSubmit={onFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name={"patientName"} onChange={onChangeHandler} value={formState.patientName}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile Number" name={"patientMobile"} onChange={onChangeHandler} value={formState.patientMobile}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={"patientEmail"} onChange={onChangeHandler} value={formState.patientEmail}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>NIC Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your NIC number" name={"patientNIC"} onChange={onChangeHandler} value={formState.patientNIC}/>
                </Form.Group>
                <p className="mt-4 text-end">Your doctor fee is <span style={{color: "blue"}}>Rs.{singleChannel?.fee}</span></p>

                <Button
                    className="mt-3"
                    variant="primary"
                    type="submit"
                    style={{backgroundColor: "#003366", borderColor: "#003366", width: "100%"}}
                    disabled={!formState.patientNIC || !formState.patientEmail || !formState.patientMobile || !formState.patientName}
                >
                    Make Appointment
                </Button>
            </Form>
        </div>
    );
};

export default Channel;
