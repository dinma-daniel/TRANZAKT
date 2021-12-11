export default function AccountRow({accName, accNumber, bankName}) {
    return (
        <tr className="accountRow">
                <td className="accName">{accName}</td>
                <td className="accNumber">{accNumber}</td>
                <td className="bankNumber">{bankName}</td>
        </tr>
    );
}