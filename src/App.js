import './App.css';
import * as md from 'react-icons/md';
import * as ri from 'react-icons/ri';
import * as fc from 'react-icons/fc';
import * as ai from 'react-icons/ai';
import * as bs from 'react-icons/bs';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import * as cg from 'react-icons/cg';

function App() {
  return (
    <div className='m-4'>

      <div className='content-header'>
        <ul className='list-unstyled'>
          <li className='h2 text-break'>All my accounts</li>
          <li className='text-muted small'>June 10, 2018</li>
        </ul>
        <span><md.MdBarChart /></span>
      </div>

      <div className='content-card rounded row'>
        <div className='col-6'>
          <ri.RiVisaLine className='visa' />
        </div>

        <div className='col-6 ava'>
          <p className='m-auto text-end text-success'>Avaliable Balance</p>
        </div>

        <div className='col-6'>
          <fc.FcSimCardChip className='chip' />
        </div>

        <div className='col-6 h-100 d-flex align-items-center'>
          <ai.AiFillDollarCircle className='doller' />
          <p className='h-100 m-0 h2'> 7,392.00</p>
        </div>

        <div className='col-12 my-3'>
          <pre className='number m-auto text-center'>42012  3049  2800  9815</pre>
        </div>

        <div className='col-6'>
          <p>EXPIRE <ai.AiFillCaretRight /> 02/22</p>
        </div>

        <div className='col-6'>
          <p className='text-end'>CVC CODE <ai.AiFillCaretRight /> 230</p>
        </div>
      </div>

      <div className='text-center mt-2'>
        <span className='dot'></span>
        <span className='dot active'></span>
        <span className='dot'></span>
      </div>

      <div className='content-inex rounded row'>
        <div className='col-6 text-center bor'>
          <div className='btn border'>Income</div>
          <pre className='text-success m-auto inex'><ai.AiOutlineArrowDown /> $9,302.00</pre>
        </div>

        <div className='col-6 text-center'>
          <div className='btn border'>Expense</div>
          <pre className='text-danger m-auto inex'><ai.AiOutlineArrowUp /> $2,790.00</pre>
        </div>
      </div>

      <div className='content-footer mt-4'>
        <ul className='list-unstyled'>
          <li className='h4 text-break'>Detail of movements</li>
        </ul>
        <span><bs.BsCalendar4Event className='font-weight-bold'/></span>
      </div>

      <div className='content-footer-four rounded row mb-2 p-3'>
        <div className='col-2 text-center'>
          <bi.BiRestaurant className='center size-pic' />
        </div>
        <div className='col-7 p-0'>
          <strong>Restaurant Manhattan</strong>
          <p>June 10, 2018</p>
        </div>
        <div className='col-3 text-center p-0'>
          <p className='center h6 text-danger'>$170 <ai.AiOutlineArrowUp /></p>
        </div>
      </div>

      <div className='content-footer-four rounded row mb-2 p-3'>
        <div className='col-2 text-center p-auto'>
          <fa.FaHandHoldingUsd className='center size-pic' />
        </div>
        <div className='col-7 p-0'>
          <strong>Salary Deposit</strong>
          <p>June 1, 2018</p>
        </div>
        <div className='col-3 text-center p-0'>
          <p className='center h6 text-success'>$1,200 <ai.AiOutlineArrowDown /></p>
        </div>
      </div>

      <div className='content-footer-four rounded row mb-2 p-3'>
        <div className='col-2 text-center p-auto'>
          <cg.CgShoppingBag className='center size-pic' />
        </div>
        <div className='col-7 p-0'>
          <strong>Central Market</strong>
          <p>May 28, 2018</p>
        </div>
        <div className='col-3 text-center p-0'>
          <p className='center h6 text-danger'>$50 <ai.AiOutlineArrowUp /></p>
        </div>
      </div>

      <div className='content-footer-four rounded row mb-2 p-3'>
        <div className='col-2 text-center p-auto'>
          <bs.BsCoin className='center size-pic' />
        </div>
        <div className='col-7 p-0'>
          <strong>Salary Deposit</strong>
          <p>May 1, 2018</p>
        </div>
        <div className='col-3 text-center p-0'>
          <p className='center h6 text-success'>$1,200 <ai.AiOutlineArrowDown /></p>
        </div>
      </div>

    </div>
  );
}

export default App;
