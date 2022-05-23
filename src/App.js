import './App.css'
import FormHeader from './components/FormHeader'
import FormTask from './components/FormTask'

function App() {
  return (
    <section className="vh-100 gradient-custom-2 min-vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="mask-custom card ">
              <div className="card-body p-4 text-white">
                <FormHeader />
                <FormTask />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
