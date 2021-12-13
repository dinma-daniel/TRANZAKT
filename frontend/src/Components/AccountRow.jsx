export default function AccountRow({ accNumber, bankName, accBalance }) {
    return (
        
        <tr className="accountRow">
            <td className="accName"> <span>&#8358;</span>{accBalance}</td>
            <td className="accNumber">{accNumber}</td>
            <td className="bankNumber">{bankName}</td>
        </tr>
        
    );
}
