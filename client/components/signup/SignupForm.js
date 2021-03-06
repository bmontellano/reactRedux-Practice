import React from 'react'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChage={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primatry btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

export default SignupForm
