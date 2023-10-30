

const TableRow = ({orders,hadelDelete,handelConfirmOrder }) => {
    const { img, title, price, name, date,_id,status } = orders;

   
    return (
        <tr>
            <td>
            <button onClick={() => hadelDelete(_id)} className="btn btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-lg w-20 h-20">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>

                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm'? <span className="text-xl text-primary">Confirmed</span>: 
                    <button onClick={() =>handelConfirmOrder(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default TableRow;