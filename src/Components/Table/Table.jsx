import { ButttonAdd } from "../Buttons/ButtonAdd"
import { ListTable } from "./ListTable"
export function Table({title}){
    return (
        <div className="p-5 rounded-lg shadow-2xl bg-slate-300">
            <div className="grid content-between grid-cols-2 p-5">
                <h1 className="ml-2 text-5xl font-bold">{title}</h1>
                <ButttonAdd text="AGREGAR"></ButttonAdd>
            </div>

            <table className="grid shadow-2xl table-fixed">
                <thead >
                    <tr className="grid grid-cols-11 ">
                      <th className="col-span-3 border border-slate-600">Categoria</th>
                      <th className="col-span-3 border border-slate-600">Fecha</th>
                      <th className="col-span-3 border border-slate-600">Monto</th>
                      <th className="border border-slate-600">Edit</th>
                      <th className="border border-slate-600">Delete</th>
                      
                    </tr>
                </thead>
                <tbody>
                    <ListTable></ListTable>
                </tbody>
            </table>
        </div>
    )
}  