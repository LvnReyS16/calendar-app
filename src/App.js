
import './App.css';
import CalendarForm from './components/CalendarForms';
import CalendarList from './components/CalendarList';
import UpdateForm from './components/UpdateForm';
import {
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="h-screen flex justify-center items-center">
     
      <Switch>
          <Route exact path="/"  component={CalendarList}/>
          <Route exact path="/add" component={CalendarForm}/>
          <Route exact path="/update/:id" component={UpdateForm}/>
      </Switch>
    </div>
  );
}

export default App;
