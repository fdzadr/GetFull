

export default function otp (){

    const handleChange = async (e) =>{
        const {name, value } = e.target
        this.setState({
            [name]: value
          })
    }

    const onSubmitOTP = async (e) =>{
        e.preventDefault()
        const code = this.state.otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user))
          alert("User is verified")
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }

    return(
    <>
    <h2>Enter OTP</h2>
    <form onSubmit={onSubmitOTP}>
        <input type="number" name="otp" placeholder="OTP Number" required onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
    
    </>

    )
}