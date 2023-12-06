import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBtn from './components/button/button.tsx';
import MainTable from './components/table/table.tsx';






function App() {

  return (
    <>
    <h1>Book Samsys</h1>
    
    <MyBtn color= 'danger' text='que tal isso' size='lg' />
    <MainTable />
    </>
  );
}
export default App;
