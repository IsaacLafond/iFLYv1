import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";

function DestinationPage() {
    const destinations = [
        { name: "Lake of the Woods", src: "https://paddlingmagazine-images.s3.amazonaws.com/2021/01/02110448/lake-of-the-woods.jpg", description: "Located in the border regions of Ontario, Manitoba, and Minnesota, Lake of the Woods is a massive freshwater lake known for its stunning beauty and abundant wildlife. Spanning over 70 miles, it is home to more than 14,000 islands and 65,000 miles of shoreline. The lake is a paradise for anglers, offering a rich variety of fish species such as walleye, northern pike, and smallmouth bass. Boating and kayaking are popular activities, allowing visitors to explore the many coves and inlets. The surrounding forests are lush and full of wildlife, providing excellent opportunities for hiking, camping, and birdwatching. With its scenic landscapes and diverse recreational opportunities, Lake of the Woods is a top destination for outdoor enthusiasts." },
        { name: "Great Slave Lake", src: "https://adventures.com/media/212468/yellowknife-night-panorama-canada.jpg?anchor=center&mode=crop&width=970&height=645&rnd=133217086330000000&format=jpg&quality=80", description: "Situated in Canada's Northwest Territories, Great Slave Lake is the second-largest lake in the country and the deepest in North America. Its crystal-clear waters reach depths of over 2,000 feet, making it a prime spot for fishing, particularly for lake trout, northern pike, and Arctic grayling. The lake's remote and rugged wilderness is largely untouched, offering a pristine environment for camping, hiking, and wildlife viewing. Visitors can also explore the vibrant Indigenous cultures and communities around the lake. Whether you're casting a line, paddling in a kayak, or simply taking in the breathtaking views, Great Slave Lake offers a truly unforgettable outdoor adventure." },
        { name: "Algoma Region", src: "https://www.algomacountry.com/wp-content/uploads/2015/09/nature-outdoors-photo6.jpg", description: "The Algoma Region in Ontario is renowned for its breathtaking landscapes, including dense forests, sparkling lakes, and rugged cliffs. Stretching from Lake Huron to the northern wilderness, this area offers a diverse range of outdoor activities such as fishing, canoeing, hiking, and wildlife photography. The region is famous for its fall foliage, where the forests explode in vibrant colors, providing a stunning backdrop for any outdoor activity. Algoma's scenic beauty and tranquility make it a perfect getaway for adventurers and nature lovers alike. The area is also rich in Indigenous history and culture, offering visitors a chance to learn about the traditions and heritage of the First Nations peoples." },
        { name: "Algonquin Park", src: "https://paddlingmagazine-images.s3.amazonaws.com/2021/02/23102204/Hero_10001774.jpg", description: "Algonquin Park, located in Ontario, is one of Canada's most famous provincial parks, spanning nearly 8,000 square kilometers. This vast wilderness area offers a myriad of outdoor activities, including canoeing on its extensive network of lakes and rivers, hiking through its numerous trails, and camping in one of its many campsites. The park is home to diverse wildlife, including moose, black bears, wolves, and a variety of bird species. Visitors can explore the park's stunning landscapes, from dense forests to open meadows and rocky ridges. Algonquin Park is also a great place for stargazing, with its dark skies offering clear views of the night sky. Whether you're paddling through serene waters, hiking scenic trails, or simply relaxing by a campfire, Algonquin Park offers a quintessential Canadian wilderness experience." },
        { name: "Goin Reservoir", src: "https://tamarac.ca/medias/siteweb-photos/peche/reservoir-gouin/chalets/40/chalet-reservoir-gouin-40-1.jpg", description: "Gouin Reservoir in Quebec is a large man-made lake created by the construction of the Gouin Dam. Covering over 1,700 square kilometers, it is known for its excellent fishing opportunities, particularly for walleye and northern pike. The reservoir's vast waters and numerous islands provide a picturesque setting for boating and camping. The remote location and pristine environment make it an ideal destination for those seeking a peaceful retreat in the heart of nature. In addition to fishing, visitors can enjoy canoeing, kayaking, and exploring the surrounding forests. The area is also home to a variety of wildlife, making it a great spot for nature photography and birdwatching. With its tranquil waters and unspoiled beauty, Gouin Reservoir offers a perfect escape from the hustle and bustle of everyday life." },
        { name: "Whiteshell Pakr", src: "https://www.explorethewhiteshell.com/wp-content/uploads/2019/06/High_lake_tree_EmilyChristie-0136-640x400.jpg", description: "Whiteshell Provincial Park, located in Manitoba, is a natural gem featuring crystal-clear lakes, dense forests, and rocky terrain. Spanning over 2,700 square kilometers, the park offers a wide range of activities, including swimming, fishing, hiking, and birdwatching. The park's numerous lakes and rivers are perfect for boating, canoeing, and kayaking, while its extensive trail system provides excellent hiking and biking opportunities. Whiteshell Park is also known for its beautiful beaches and picnic areas, making it a popular spot for family outings. The park's diverse ecosystems support a variety of wildlife, including deer, black bears, and over 200 species of birds. With its stunning landscapes and wealth of recreational opportunities, Whiteshell Park is a perfect destination for those looking to explore the great outdoors and experience the tranquility of nature." }
    ]

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
                <Title title={"Popular Destinations"} />
                {destinations.map((destination) => (
                    <DestinationCard name={destination.name} src={destination.src} description={destination.description} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default DestinationPage