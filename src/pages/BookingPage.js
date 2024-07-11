import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { Link } from "react-router-dom";

function BookingPage() {
    let estimate = 0

    return (
        <div>
            <div className="d-flex w-100 align-items-center position-fixed top-0 bg-white padded">
                <Link style={{
                    fontFamily: "Inter",
                    fontSize: "25px",
                    fontWeight: "750"
                }} className="link-dark link-underline-opacity-0 me-auto" to="/">iFLY</Link>
                <Navbar />
            </div>
            <div className="d-flex">
                <div className="d-flex flex-column w-25 mh-100 overflow-scroll mt-5 mx-4">
                    <Title title={"Plan Trip"} />
                    <form>
                        <label htmlFor="contact">Contact Name</label>
                        <input className="form-control" type="text" id="contact" placeholder="John Doe" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" />
                        <hr />
                        <label htmlFor="destination">Destination</label>
                        <input type="text" className="form-control" id="destination" placeholder="123 Example St." />
                        <label htmlFor="passengernum">Number of Passengers</label>
                        <input type="number" id="passengernum" className="form-control" min={1}/>
                        <label htmlFor="weightinput">Estimated Weight of Gear</label>
                        <div className="input-group">
                            <input type="number" className="form-control" min={0} />
                            <span className="input-group-text">lbs</span>
                        </div>
                        <hr />
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="radio1" name="triptype" />
                            <label className="form-check-label" htmlFor="radio1">One Way</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="radio2" name="triptype" />
                            <label className="form-check-label" htmlFor="radio2">Round Trip</label>
                        </div>
                        <br />
                        <label htmlFor="depart">Depature</label>
                        <input className="form-control" type="datetime-local" name="" id="depart" />
                        <label htmlFor="return">Return</label>
                        <input className="form-control" type="date" name="" id="return" />
                    </form>
                    <p className="mt-3 fw-bold" >Estimate price: { estimate }$</p>
                    <button className="btn btn-primary mx-auto" onClick={() => alert("Booking Requested!\nA pilot will contact you regarding your trip via email soon.")}>Request Booking</button>
                </div>
                <div className="vh-100 w-75">
                    <iframe title="map" style={{width:"100%", height:"100%"}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=rockcliffe+airport&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
            </div>
        </div>
    );
}

export default BookingPage