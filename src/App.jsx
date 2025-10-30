import Card from "./assets/Card"
import profilepic1 from "./assets/my-image.jpg"
import profilepic2 from "./assets/bella.jpg"
import profilepic3 from "./assets/debby.jpg"
import profilepic4 from "./assets/isabel.jpg"
import "./index.css"


function App() {
    return(
        <div className="cards-container">
        <Card 
            image={profilepic1}
            title="Vincent the Coder"
            text="I am in a Programming School, I also play football cook foods"

            />
        <Card 
            image={profilepic2}
            title="Bella Sandy's Class"
            text="Lecturer by profession, loves biking and reading books"
        />

         <Card 
            image={profilepic3}
            title="Debby Maxwell Food's"
            text="Professional Chef at your Service"
            className= "debby-card"
        />

         <Card 
            image={profilepic4}
            title="Isabels Violin"
            text="Musician by profession, Student and Dance Teacher"
            
        />
       
        </div>
    );
}

export default App;
