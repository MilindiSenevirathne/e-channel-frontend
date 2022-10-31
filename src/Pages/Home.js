import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Home.css";
import NavbarComponent from "./Navbar";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHospitalList, getSpecializationList} from "../redux/actions/extraActions";
import {getDoctorList} from "../redux/actions/doctorActions";

const Home = () => {

    const dispatch = useDispatch();

    const hospitalList = useSelector((e) => e.extraData.hospitalList);
    const specializationList = useSelector((e) => e.extraData.specializationList);
    const doctorList = useSelector((e) => e.doctorData.doctorList);

    useEffect(() => {
        dispatch(getHospitalList());
        dispatch(getDoctorList());
        dispatch(getSpecializationList());
    }, [])

    return (
        <div>
            <NavbarComponent/>
            <div className="box">
                <Form className="box_2">
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Doctor Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Doctor name"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Hospital
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Hospital"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Specialization
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Specialization"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Booking Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="date" placeholder="Booking Date"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{span: 10, offset: 2}}>
                            <Button
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
