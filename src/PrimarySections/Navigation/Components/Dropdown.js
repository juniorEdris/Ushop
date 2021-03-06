import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Dropdown() {
    const [dropdown, setDropdown] = useState(true)

    const lists = [{id:1,category:'Power Tools'},{id:2,category:'Hand Tools'},{id:3,category:'Electronical'},{id:4,category:'Machine Tools'},{id:5,category:'Building Tools'},{id:6,category:'Medical Tools'},{id:7,category:'Construction Tools'},{id:8,category:'Industrial Tools'},{id:9,category:'Plumbing Tools'},]
    return (
        <div className={`category_dropdown col-3`}>
            <div className='dropdown_btn' onClick={()=>setDropdown(!dropdown)}><span className="lnr lnr-text-align-right"></span><span className='btn_text'>Shop By Catgory</span>{dropdown ? <span className="lnr lnr-chevron-up float-right" style={{fontSize:'14px',margin:'7px 0px'}}></span> : <span className="lnr lnr-chevron-down float-right" style={{fontSize:'14px',margin:'7px 0px'}}></span>}</div>
            <ul className={`category_list ${dropdown ? '':'d-hidden'}`}>
                {lists.map(list=>(
                    <Link to={`/${list.category}` }key={list.id}><li key={list.id}>{list.category} <span className="lnr lnr-chevron-right float-right" style={{fontSize:'14px',margin:'5px 10px 0px 0px'}}></span></li></Link>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown
