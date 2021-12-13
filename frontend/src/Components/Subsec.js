const Subsec = ({subname, subamount, substart, subnext}) => {
    return ( 
        <tr>
            <td>{subname}</td>
            <td>{subamount}</td>
            <td>{substart}</td>
            <td>{subnext}</td>
        </tr>
     );
}
 
export default Subsec;