

function DestinationCard({ name, src, description}) {
    return (
        <div className="card shadow d-flex flex-row overflow-hidden mb-3">
            <img width={"40%"} src={src} alt="destination thumbnail" />
            <div className="my-4 h-100">
                <h3 className="mx-4 fw-bold">{ name }</h3>
                <p className="mx-4 mt-3">{ description }</p>
                {/* <button className="btn btn-primary rounded-pill d-flex align-items-center justify-content-center ms-auto me-5 mt-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                </svg>
                </button> */}
            </div>
        </div>
    );
}

export default DestinationCard