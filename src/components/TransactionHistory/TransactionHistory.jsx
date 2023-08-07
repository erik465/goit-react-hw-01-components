import { TransactionTable } from "./TransactionHistory.styled"

export const TransactionHistory = ({ props }) => {
    return (
    <TransactionTable >
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {props.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )
            })}         
        </tbody>
    </TransactionTable>
    )
}