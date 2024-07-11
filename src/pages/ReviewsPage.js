import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";
import { useState } from "react";

// Recent sorts highest (newest id) first
function recent(a, b) {
    if (a.id === b.id) {
        return 0;
    } else if (a.id > b.id) {
        return -1;
    } else {
        return 1;
    }
}

// Highest sorts highest rating first
function highest(a, b) {
    if (a.stars === b.stars) {
        if (a.half === false && b.half === true) {
            return 1;
        } else if (a.half === true && b.half === false) {
            return -1;
        } else {
            return 0;
        }
    } else if (a.stars < b.stars) {
        return 1;
    } else {
        return -1;
    }
}

// Lowest sorts lowest rating first
function lowest(a, b) {
    if (a.stars === b.stars) {
        if (a.half === false && b.half === true) {
            return -1;
        } else if (a.half === true && b.half === false) {
            return 1;
        } else {
            return 0;
        }
    } else if (a.stars < b.stars) {
        return -1;
    } else {
        return 1;
    }
}

function ReviewsPage() {
    const [reviews, setReviews] = useState([
        { id: "1", title: "Horrible Experience", stars: 1, half: false, description: "Our flight was cancelled last minute, and we had to reschedule our entire trip. No proper communication from the company. Would not recommend their service to anyone."},
        { id: "2", title: "Decent Experience", stars: 3, half: false, description: "The float plane was a bit cramped, but it got us to our camping destination safely. The pilot was helpful, but the service could use some fine-tuning. Overall, an okay experience."},
        { id: "3", title: "Memorable Fishing Trip", stars: 4, half: true, description: "We caught so many fish thanks to the knowledgeable pilot. The plane ride was comfortable, and the equipment provided was top-notch. Just wish the trip was a bit longer!"},
        { id: "4", title: "Not Worth the Money", stars: 1, half: true, description: "Had high expectations, but was let down. The plane was old, and the pilot was not very friendly. The camping trip itself was fine, but the transportation was a huge letdown."},
        { id: "5", title: "Good but Could Be Better", stars: 3, half: true, description: "The float plane ride was enjoyable, but the communication prior to the trip could use improvement. Once in the air, everything was great, and we had a fun time fishing."},
        { id: "6", title: "Scenic and Serene", stars: 5, half: false, description: "We chartered a plane for a camping trip, and it was a fantastic experience. The views from above were breathtaking, and the landing on the lake was seamless. Will definitely book again!"},
        { id: "7", title: "Could Have Been Better", stars: 2, half: true, description: "Our hiking trip started off rocky with a delayed flight. The scenery was nice, but the overall service left much to be desired. Hope they improve in the future."},
        { id: "8", title: "Great Service and Experience", stars: 4, half: false, description: "Had a wonderful time hiking thanks to the float plane charter. The pilot was friendly and informative. Only drawback was the weather, but that’s not their fault. Overall, a great trip!"},
        { id: "9", title: "Amazing Adventure!", stars: 5, half: false, description: "Our fishing trip was unforgettable! The float plane ride was smooth, and the pilot was very knowledgeable about the best spots. Highly recommend this service for any outdoor enthusiast!"}
    ])

    function sortElements(elements, compare) {
        return [...elements].sort(compare)
    }
    function HandleChange() {
        let filterElem = document.getElementById("filter")
        switch (filterElem.value) {
            case "1":
                setReviews(sortElements(reviews, recent))
                break;
            case "2":
                setReviews(sortElements(reviews, highest))
                break;
            case "3":
                setReviews(sortElements(reviews, lowest))
                break;
            default:
                setReviews(sortElements(reviews))
                break;
        }
    }

    return (
        <div>
            <div className="d-flex align-items-center position-sticky top-0 bg-white padded z-3">
                <Link style={{
                    fontFamily: "Inter",
                    fontSize: "25px",
                    fontWeight: "750"
                }} className="link-dark link-underline-opacity-0 me-auto" to="/">iFLY</Link>
                <Navbar />
            </div>
            <div className="padded mt-3">
                <Title title={"Reviews"} />
                <div className="padded">
                    <div className="mb-3 d-flex"> { /* flex row auto margin between */}
                        <select id="filter" className="form-select" name="reviewFilter" onChange={HandleChange} style={{width: "fit-content"}}>
                            <option selected>Filter By</option>
                            <option value="1">Recent</option>
                            <option value="2">Highest</option>
                            <option value="3">Lowest</option>
                        </select>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        {reviews.map((review) => (
                            <ReviewCard title={review.title} stars={review.stars} half={review.half} description={review.description}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ReviewsPage