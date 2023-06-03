import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const elementPen = <FontAwesomeIcon icon={faPenToSquare} className='faPenToSquare'/>
const elementTrash = <FontAwesomeIcon icon={faTrashCan} className='faTrashCan'/>

const ClassName = "grid self-center col-span-3 border justify-items-center border-slate-600"
const ClassName01 = "grid items-center border justify-items-center border-slate-600"

export function ListTable () {
    return(
        <tr className="grid grid-cols-11">
            <td className={ClassName}>Sueldo</td>
            <td className={ClassName}>07/03/2023</td>
            <td className={ClassName}>$20000</td>
            <td className={ClassName01}><button>{elementPen}</button></td>
            <td className={ClassName01}><button>{elementTrash}</button></td>
        </tr>
    )
} 