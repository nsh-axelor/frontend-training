import "./App.css";
import NotesApp from "./NotesApp/NotesApp";


// UnComment below given line for reviewing React Practice file
// import ReactPractice from './ReactPractice.jsx'

// UnComment below given line for reviewing Form-Project
// import Form from './Form-Project';

// UnComment below given line for reviewing Uncontrolled from
// import UncontrolledForm from "./UncontrolledForm";

// UnComment below given line for reviewing Portfolio_Webiste-Project
// import PortfolioWebsite from "./Portfolio-Website"

// UnComment below given line for reviewing Calendar-Project
// import Calendar from './Calendar-Project';

// Uncomment below given lines for reviewing ReduxPractice
// import ReduxPractice from "./ReduxPractice/ReduxPractice";
// import { Provider } from "react-redux";
// import store from "./ReduxPractice/store";

// Uncomment below given lines for reviewing ReactRouter
// import ReactRouter from "./ReactRouterPractice/ReactRouter";

// Uncomment below given lines for Higher order component 
// import TodoListComponent from "./HOCPractice/TodoList";
// import UserListComponent from "./HOCPractice/UserList";

// Uncomment below given lines for Error Boundry
// import Users from "./ErrorBoundry/Users";

// Uncomment below given lines for PokeApp Project
// import { Provider } from "react-redux";
// import store from "./PokemonApp/Store";
// import PokeApp from "./PokemonApp/PokeApp";
// import {BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <div className="App">
      {/* UnComment ReactPractice Tag for reviewing React Practice file */}
      {/* <ReactPractice />    */}

      {/* UnComment Form Tag for reviewing Form-Project */}
      {/* <Form /> */}

      {/* UnComment PortfolioWebsite Tag for reviewing Portfolio_Webiste-Project */}
      {/* <PortfolioWebsite /> */}

      {/* UnComment Calendar Tag for reviewing Calendar-Project */}
      {/* <Calendar /> */}

      {/* UnComment UncontrolledForm Tag for reviewing Uncontrolled form */}
      {/* <UncontrolledForm /> */}

      {/* UnComment UncontrolledForm Tag for reviewing Redux Practice Project */}
      {/* <Provider store={store}>
        <ReduxPractice />
      </Provider> */}

      {/* Uncomment Below given code for reviewing React Router Practice  */}
      {/* <ReactRouter /> */}


      {/* Uncomment Below code for viewing Higher Order Component */}
      {/* <h1>Higher Order Component</h1>
      <div className="HOCPractice" style={{marginTop:"50px",display:"flex",justifyContent:"space-around"}}>
        <UserListComponent />
        <TodoListComponent />
      </div> */}

      {/* Uncomment below code for viewing Error Boundy Example */}
      {/* <Users /> */}


      {/* Uncomment below code for viewing PokeApp Project */}
      {/* <Provider store={store}>
        <Router>
          <PokeApp />
        </Router>
      </Provider> */}


      <NotesApp />
    </div>
  );
}

export default App;
