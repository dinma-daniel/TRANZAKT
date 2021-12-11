export default function SubscriptionSectionRow({subName, dueDate}) {
    return (
        <tr>
            <td>{subName}</td>
            <td>{dueDate}</td>
        </tr>
    );
}