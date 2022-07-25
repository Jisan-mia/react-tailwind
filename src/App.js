import './App.css';
import CompanyEnroll from './components/CompanyEnroll';

function App() {
  return (
   <>
   {/* header here */}
   <header className="h-12 bg-[#1F497B] w-full flex items-center px-7 text-white text-lg">
      <h1>Header</h1>
   </header>
   <CompanyEnroll />
   </>
  );
}

export default App;
