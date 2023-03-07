import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample() {
  return (
    <div className='percent_skills'>
        <div className='js'>
            <h5 className='name_skill'>JavaScript</h5>
            <ProgressBar className='skills' animated now={35} label={`${35}%`} />
        </div>
        <div className='html'>
            <h5 className='name_skill'>HTML</h5>
            <ProgressBar className='skills' animated now={80} label={`${80}%`} />
        </div>
        <div className='css'>
            <h5 className='name_skill'>CSS</h5>
            <ProgressBar className='skills' animated now={65} label={`${65}%`} />
        </div>
        <div className='sql'>
            <h5 className='name_skill'>SQL</h5>
            <ProgressBar className='skills' animated now={35} label={`${30}%`} />
        </div>
        <div className='react'>
            <h5 className='name_skill'>React</h5>
            <ProgressBar className='skills' animated now={30} label={`${30}%`} />
        </div>
    </div>
  );
}

export default ContextualExample;

 //   <div className='percent_skills'>
 //     <ProgressBar className='skills' variant="info" now={40} />
 //     <ProgressBar className='skills' variant="info" now={20} />
 //     <ProgressBar className='skills' variant="info" now={60} />
 //     <ProgressBar className='skills' variant="info" now={80} />
 //   </div>