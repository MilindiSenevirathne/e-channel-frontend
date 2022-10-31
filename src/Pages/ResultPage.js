import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavbarComponent from "./Navbar";
import {useSearchParams, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getChannelList} from "../redux/actions/channelActions";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";

function ResultPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const channelList = useSelector((e) => e.channelData.channelList);

    useEffect(() => {
        if (!params.get("doctorId") && !params.get("hospitalId") && !params.get("specializationId")) {
            navigate("/");
        } else {
            const obj = {
                doctorId: params.get("doctorId"),
                hospitalId: params.get("hospitalId"),
                specializationId: params.get("specializationId"),
                date: params.get("date")
            }

            dispatch(getChannelList(obj))

        }
    }, [])

    const onSelectAppointment=(i)=>{
        navigate("/channel?id=" +i.id);
    }

    return (
        <div>
            <NavbarComponent/>
            <Container style={{height: '26rem'}}>
                <Row>
                    {channelList.map(i => (
                        <Col xs="4">

                            <Card border="info" style={{width: '18rem', margin: 'auto'}}
                                  className='mt-4'>
                                <Card.Img variant="top" style={{width: '8rem', height: '8rem', marginLeft: '80px', marginTop: 20}}
                                          src="/hospital.png"/>
                                <Card.Body>
                                    <Card.Title className="text-center">{i.doctorName}</Card.Title>
                                    <Card.Subtitle className="text-center">{i.hospitalName}</Card.Subtitle>

                                    <ListGroup className="list-group-flush mt-5 mb-5">
                                        <ListGroup.Item className='d-flex'>Specialization: <span
                                            className="ms-auto">{i.specializationName}</span></ListGroup.Item>
                                        <ListGroup.Item className='d-flex'>Date: <span
                                            className="ms-auto">{moment(i.dateTime).format("YYYY-MM-DD")}</span></ListGroup.Item>
                                        <ListGroup.Item className='d-flex'>Time: <span
                                            className="ms-auto">{moment(i.dateTime).format("HH:mm")}</span></ListGroup.Item>
                                        <ListGroup.Item className='d-flex'>Channeling Fee: <span
                                            className="ms-auto">Rs.{i.fee}</span></ListGroup.Item>
                                    </ListGroup>
                                    <Button
                                        disabled={i.activePatients >= i.maximumPatients}
                                        className={"w-100 " +(i.activePatients >= i.maximumPatients ? "btn-danger" : "")}
                                        onClick={() => onSelectAppointment(i)}
                                    >
                                        {i.activePatients >= i.maximumPatients ? "Not Available" : "Book Now"}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ResultPage;