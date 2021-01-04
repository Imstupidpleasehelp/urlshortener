
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
    <h1>URL Shrinker</h1>
    <form action="/makeurl" method="POST" class="my-4 form-inline">
      <label for="fullUrl" class="sr-only">Url</label>
      <input required placeholder="Url" type="url" name="fullUrl" id="fullUrl" class="form-control col mr-2" />
      <button class="btn btn-success" type="submit">Do it</button>
    </form>
    
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th>Full URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      
    </table>
  </div>
    </div>
  );
}

export default App;
