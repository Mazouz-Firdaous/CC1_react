import ApiImage from './ApiImage'
import ApiTableau from './ApiTableau';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <div className="container">
      <div className="row">
        <h1 style={{textAlign : 'center'}}>TP4 :</h1>
        <div className="col-md-6">
          <ApiImage />
        </div>
        <div className="col-md-6">
          <ApiTableau />
        </div>
      </div>
    </div>
  );
}

export default App;
