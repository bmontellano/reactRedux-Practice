import React from 'react'

class SignupForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primatry btn-lg">
            Sign up
          </button>
          <input
            type="text"
            name="username"
            className="form-control"
          />
        </div>
      </form>
    )
  }
}

export default SignupForm
