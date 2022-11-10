import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Navbar from "../Pages/Navbar";

import {deleteChannel, getAllChannelList} from "../redux/actions/channelActions";

const ChannelList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allChannelList = useSelector((e) => e.channelData.allChannelList);

    useEffect(() => {
        dispatch(getAllChannelList());
    }, [])

    const onDeleteClick=(id)=>{
        dispatch(deleteChannel(id));
    }

    const onUpdateClick=(id)=>{
        navigate(`/channelupdate/${id}`)
    }

    return (
        <div>
            <Navbar/>
            <div>
                <Link to="/channelcreate">
                    <Button
                        style={{
                            backgroundColor: "#003366",
                            borderColor: "#003366",
                            marginTop: "25px",
                            marginLeft: "75px",
                        }}
                        variant="secondary"
                    >
                        Create Channel
                    </Button>
                </Link>
            </div>
            <Table
                striped
                hover
                style={{width: "90%", margin: "auto"}}
                className="mt-4"
            >
                <thead>
                <tr>
                    <th>Doctor Name</th>
                    <th>Specialization</th>
                    <th>Hospital</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Maximum No of Patients</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {allChannelList.map((el) => {
                    return(
                        <tr>
                            <td>{el.doctorName}</td>
                            <td>{el.specializationName}</td>
                            <td>{el.hospitalName}</td>
                            <td>{el.dateTime.substr(0,10)}</td>
                            <td>{el.dateTime.substr(11)}</td>
                            <td>{el.maximumPatients}</td>
                            <td>
                                <Button
                                    onClick={() => onUpdateClick(el.id)}
                                    style={{backgroundColor: "#009933", borderColor: "#009933"}}
                                >
                                    Update
                                </Button>
                                <Button
                                    onClick={() => onDeleteClick(el.id)}
                                    style={{backgroundColor: "#cc0000", borderColor: "#cc0000", marginLeft: "10px"}}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default ChannelList;
