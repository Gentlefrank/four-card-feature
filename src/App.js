import logo from './logo.svg';
 

function App() {
  return (
    <div className="container">
      <div className='header--text'>
    <h1 className='poppinsRegular'>Reliable, efficient delivery </h1>
    <h1 className='poppinsBlack'>Powered by Technology</h1>
    <p className='poppinsRegular'>Our Artificial Intelligence power tools use millions of project data</p>
    <p className='poppinsRegular'> points to ensure that your project is successful</p>
      </div> 

    <div className='myGrid'>
    <div className='supervisor'>
    <h1 className='poppinsBlack'>Supervisor</h1>
    <p className='poppinsRegular'>Monitors activity to identify project roadblocks</p>
    <img src='images/icon-supervisor.svg' alt='supervisor' />
</div>

    <div className='team-builder'>
    <h1 className='poppinsBlack'>Team Builder</h1>
    <p className='poppinsRegular'>Scans our talent network to create the optimal team for your project</p>
    <img src='images/icon-team-builder.svg' alt='supervisor' />
    </div>

    <div className='karma'>
    <h1 className='poppinsBlack'>Karma</h1>
    <p className='poppinsRegular'>Regularly evaluates our talent to ensure quality</p>
    <img src='images/icon-karma.svg' alt='supervisor' />
</div>

    <div className='calculator'>
    <h1 className='poppinsBlack'>Calculator</h1>
    <p className='poppinsRegular'>Use data from past projects to provide better delivery estimates</p>
    <img src='images/icon-calculator.svg' alt='supervisor' />
</div>
 

    </div>

    </div>
  );
}

export default App;
