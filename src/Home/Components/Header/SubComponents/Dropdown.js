import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Dropdown() {
    const [dropdown, setDropdown] = useState(true)

    const lists = ['Power Tools','Hand Tools','Electronical','Machine Tools','Building Tools','Medical Tools','Construction Tools','Industrial Tools','Plumbing Tools',]
    return (
        <div className={`category_dropdown col-3`}>
            <div className='dropdown_btn' onClick={()=>setDropdown(!dropdown)}><span class="lnr lnr-text-align-right"></span><span className='btn_text'>Shop By Catgory</span>{dropdown ? <span class="lnr lnr-chevron-up float-right" style={{fontSize:'14px',margin:'7px 0px'}}></span> : <span class="lnr lnr-chevron-down float-right" style={{fontSize:'14px',margin:'7px 0px'}}></span>}</div>
            <ul className={`category_list ${dropdown ? '':'d-hidden'}`}>
                {lists.map(list=>(
                    <Link to={`/${list}`}><li>{list} <span class="lnr lnr-chevron-right float-right" style={{fontSize:'14px',margin:'5px 10px 0px 0px'}}></span></li></Link>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown
