import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate()
    return (
        <>
            <div className="d-flex align-items-center justify-content-md-center m-auto" style={{ height: '70vh', color: 'tomattow' }}>
                <div className="d-flex justify-content-center flex-column">
                    <h1>Thank you for your contribution........</h1>
                    <Button onClick={() => navigate('/')} className="btn mx-md-autobtn-secondary">signup again</Button>
                </div>
            </div>
        </>
    )
}

export default Welcome;