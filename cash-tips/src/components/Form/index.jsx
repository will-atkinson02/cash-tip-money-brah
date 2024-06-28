import { useState } from "react"

function Form() {
    // Your app should display a form with the following fields:
        // Total bill (the total price of the restaurant bill)
        // Number of people (how many people are sharing the bill)
        // Tip percentage (what % do you want to tip)
        // Submit button
        // When a user clicks the submit button, calculate the total bill plus tip and display it, and calculate how much each person needs to pay and display it.
    
        const [BillTotal, setBillTotal] = useState('')
        const [TotalPeople, setTotalPeople] = useState('')
        const [TotalTip, setTotalTip] = useState('')

        function handleBillTotal(event) {
            setBillTotal(event.target.value)
        }

        function handleSubmit(event) {
            event.preventDefault()
            console.log (BillTotal)
        }

        function handleBillTotal(event) {
            setBillTotal(event.target.value)
        }

        function handleSubmit(event) {
            event.preventDefault()
            console.log (BillTotal)
        }

        function handleBillTotal(event) {
            setBillTotal(event.target.value)
        }

        function handleSubmit(event) {
            event.preventDefault()
            console.log (BillTotal)
        }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="total" >Total Bill</label>
                <input id="total" type="text" onChange={handleBillTotal} />

                <label htmlFor="total" >Total People</label>
                <input id="total" type="text" />
                
                <label htmlFor="total" >Total Tip</label>
                <input id="total" type="text" />

                <button type="submit" >submit</button>
                

            </form>

        </>
    )
}

export default Form