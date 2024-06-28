import { useState } from "react"

function Form() {
    // Your app should display a form with the following fields:
        // Total bill (the total price of the restaurant bill)
        // Number of people (how many people are sharing the bill)
        // Tip percentage (what % do you want to tip)
        // Submit button
        // When a user clicks the submit button, calculate the total bill plus tip and display it, 
        // and calculate how much each person needs to pay and display it.


        const [BillTotal, setBillTotal] = useState('')
        const [TotalPeople, setTotalPeople] = useState('')
        const [TotalTip, setTotalTip] = useState('')


        // inputs
        function handleBillTotal(event) {
            setBillTotal(Number(event.target.value))
        }

        function handleTotalPeople(event) {
            setTotalPeople(Number(event.target.value))
        }

        function handleTotalTip(event) {
            setTotalTip(Number(event.target.value))
        }

        // submit
        function handleSubmit(event) {
            event.preventDefault()
            tipMath()
        }

        // tip maths
        function tipMath() {
            console.log(((BillTotal + TotalTip) / TotalPeople))
        }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="total" >Total Bill</label>
                <input id="total" type="text" onChange={handleBillTotal} />

                <label htmlFor="total" >Total People</label>
                <input id="total" type="text" onChange={handleTotalPeople} />
                
                <label htmlFor="total" >Total Tip</label>
                <input id="total" type="text" onChange={handleTotalTip} />

                <button type="submit" >submit</button>
                
                <p>{}</p>


            </form>

        </>
    )
}

export default Form