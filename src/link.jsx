import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

export default function Links(){
    const navigate=useNavigate();
    const navi=useNavigate();
    return (
        
        <div>
            <h1>WELCOME TO MY <strong><i>BOOK STORE</i>&nbsp;📗&nbsp;📚</strong></h1>
            <div style={{display:'flex',gap:'20px',alignItems:'center',justifyContent:'center'}}>
                
                    <div className='card rounded' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={('../images/dictionary.jpg')} style={{height:'300px',width:'300px'}} onClick={()=>navi("/dictionary")}/>
                    </div>
                

                <Link to='/ramayana'>
                    <div className='card' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={('../images/ramayana.jpg')} style={{height:'300px',width:'300px'}}  />
                    </div>
                </Link>

                <Link to='/Mockingbird'>
                    <div className='card' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={('../images/mockingbird.jpg')} style={{height:'300px',width:'300px'}}  />
                    </div>
                </Link>

            </div>
            <br/><br/>
            <div style={{display:'flex',gap:'20px',alignItems:'center',justifyContent:'center'}}>
                <Link to='/invisibleman'>
                    <div className='card' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={('../images/invisible.jpg')} style={{height:'300px',width:'300px'}} />
                    </div>
                </Link>

                <Link to='/annakarenina'>
                    <div className='card' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={('../images/anna.jpeg')} style={{height:'300px',width:'300px'}}  />
                    </div>
                </Link>

                <Link to='/lordofthefiles'>
                    <div className='card' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={('../images/lord.jpg')} style={{height:'300px',width:'300px'}}  />
                    </div>
                </Link>
            </div>
            
        </div>

        
    )
}

