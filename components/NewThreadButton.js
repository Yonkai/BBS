// Use 'Formik' library?
import React from 'react';
import axios from 'axios';

class NewThreadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openStatus: false, 
            name:'anon',
            subject:'', 
            comments:''
        };
        this.openNewThreadForm = this.openNewThreadForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openNewThreadForm(e){
        e.preventDefault();
        this.setState((state, props) => ({
            openStatus: !state.openStatus
          }));
    }

    handleChange = (name) => {
        return (event) => {
            // This syntax is just another way to set the key of an object without 
            // knowing ahead of time what you want it to be called.
           this.setState({ [name]: event.target.value });
        }
    }
    
    //3. TODO: Write to database here through the express routes...
    //TODO: Also, add error handlers here as well.
    handleSubmit(event) {
        event.preventDefault();
        //alert('A thing was submitted: ' + this.state.name + this.state.subject + this.state.comments);
        // const data = {name:this.state.name,subject:this.state.subject,comments:this.state.comments};
        // console.log(data);
        // fetch('http://localhost:4000/api/', {
        //   method: 'POST',
        //   body: JSON.stringify(data),
        //   mode: "cors",
        //   headers:{
        //     'Content-Type': 'application/json'
        //   },
        //  credentials: 'omit',
        // });
        if(this.props.isThisPartOfAnExclusiveThread){
            axios.post('http://localhost:4000/api/createreply', {
                name: this.state.name,
                comments: this.state.comments,
                threadsthreadsid:this.props.threadID,
                threadsboardsboardsid:this.props.boardID
              })
          }

          else{
            axios.post('http://localhost:4000/api/createthread', {
                name: this.state.name,
                subject: this.state.subject,
                comments: this.state.comments
              })
            }
          }
    
    render(){
        let form;
        if(!this.state.openStatus){
            form=
            <>
                <button className="check" onClick={this.openNewThreadForm}>{this.props.isThisPartOfAnExclusiveThread?'New Reply':'New Thread'}</button>
                <style jsx>{`button { margin-right:15px;} `}</style>
            </>
        }else{
        form=
        <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input onChange={this.handleChange('name')} value={this.state.name} type="text" name="name" id="name" maxlength="12"/>
                {
                    this.props.isThisPartOfAnExclusiveThread?<span>{/*nothing. not rendered because of ternary operator.*/}</span>:
                    <div><label htmlFor="subject">Subject:</label>
                    <input onChange={this.handleChange('subject')}  value={this.state.subject} type="text" id="subject" name="subject" maxlength="12"/>
                    </div>
                }
                <label htmlFor="comments">Comments:</label>
                <textarea onChange={this.handleChange('comments')} maxlength="500" required value={this.state.comments} name="comments" id="comments" rows="5" cols="25"/>
                {/* <input type="text" name="image" placeholder="Image?"/>
                    <input type="text" name="captcha" placeholder="captcha"/> */}
                <button>Send!</button>
            </form>
            {/* This might disable using enter? bad ux if so(the onClick): */}
            <button className="check" onClick={this.openNewThreadForm}>Close Form</button>
            <style jsx>{`button { margin-right:15px;} input{display:block;} textarea{display:block;}`}</style>
        </>
        }

        return (
            <div>
                {form}
            </div>
        );
    }
}

export default NewThreadButton;