import "./App.css";

import FormTask from "./components/FormTask";

function App() {
  return (
    <section className="vh-100 gradient-custom-2 min-vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="mask-custom card ">
              <div className="card-body p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <img
                    src={
                      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    }
                    className="App-logo"
                    alt="Check"
                  />
                  <h1 className="my-4">To Do List</h1>
                </div>
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
