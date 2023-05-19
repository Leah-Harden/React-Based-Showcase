


function Form({ }) {
    return (<form className="formResume">
        <div>
            <input type="text" name="firstName" value='Jane' className="inset" />
            <input type="text" name="LastName" value='Doe' className="inset" />
        </div>
        <div className="col center">
            <input type="text" name="Email" value='Doe@gmail.com' className="inset emailForm" />
            <textarea className="inset FormTextarea" rows='10' cols={50}></textarea>
            <button className="FormBtn">Submit</button>
        </div>
    </form >);
}

export default Form