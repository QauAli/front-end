 import accident from '../images/accident.jpg'
 import OilChange from '../images/oilchange.jpg';
 import diagnosticcar from '../images/diagnostic-car.jpg';
 import overhaul from '../images/overhaul.jpg'
//!this component is exported to Services component


const CardFront=[
    {
    image:(
        <img src={accident} alt=''></img>
    ),
    heading:"Accident Repair",
    details: "The accident of your car could be an alarming issue for your health and budget. Each accident is completely different and may cause distinctive issues to your vehicle.We can provide the complete accident repair of car"
    },

    {
        image:(
            <img src={OilChange} alt=''></img>
        ),
        heading:"Oil Change",
        details:"Regular Oil Change & Oil Filter Replacement help protect your engine and keep your car running smoothly. Oil changes and filter replacement help to promote maximum vehicle performance of the life of your car."
    },

    {
        image:(
            <img src={diagnosticcar} alt=''></img>
        ),
        heading:"CAR DIAGNOSTIC",
        details:`Car diagnostic test ought to be performed once your automobile running unhealthy or stall, you have got a check engine light flashing, you have experiencing automobile driving problems or the reduced fuel economy`
    },

    {
        image:(
            <img src={overhaul} alt=''></img>
        ),
        heading:"ENGINE CHANGE & OVERHAUL",
        details:"engine overhaul services that are ideal whether you have an old model imported or brand new car. We have best tools and certified mechanics to provide you highest quality engine overhaul services"
    },


]
export  default CardFront;