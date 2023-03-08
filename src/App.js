// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="h-screen w-full bg-gray-700">
      <div className="max-w-3xl mx-auto h-7 pt-20">
        <p className='text-white text-3xl pb-6'>Task List</p>
        <div className='flex justify-between'>
          <input type="text" placeholder='What do you have planned?' className='text-white bg-slate-800 w-4/5 h-12 rounded-2xl pl-3 outline-none' />
        <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 pr-16'>Add Task</button>
        </div>
      </div>


      <div class="max-w-3xl mx-auto h-7 pt-8 mt-28">
        <p className='text-slate-300 text-1xl pb-4 mt-4'>Tasks</p>
        <div className='flex justify-between'>
          <p className='text-white w-11/12 h-12 rounded-2xl pl-3 pt-3 bg-gray-900'>Go to the hub from Monday to Friday to code
          </p>
          <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 ml-12 pl-48'>EDIT</button>
          <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text text-rose-700 ml-4'>DELETE</button>
        </div>

        <div className='flex justify-between mt-4'>
          <p className='text-white w-11/12 h-12 rounded-2xl pl-3 pt-3 bg-gray-900'>Weekends for the preparation of the exams
          <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 ml-9 pl-56'>EDIT</button>
        <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text text-rose-700 ml-4'>DELETE</button>
          </p>
        </div>

        <div className='flex justify-between mt-4'>
          <p className='text-white w-11/12 h-12 rounded-2xl pl-3 pt-3 bg-gray-900'>Complete my assignment before Wednesday
          <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 ml-10 pl-52'>EDIT</button>
        <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text text-rose-700 ml-4'>DELETE</button>
          </p>
        </div>

        <div className='flex justify-between mt-4'>
          <p className='text-white w-11/12 h-12 rounded-2xl pl-3 pt-3 bg-gray-900'>Get my results
          <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text bg-gradient-to-r from-pink-700 to-purple-700 ml-20 pl-96'>EDIT</button>
        <button type="Submit" className='font-extrabold text-transparent hover:text-white bg-clip-text text-rose-700 ml-4'>DELETE</button>
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;
