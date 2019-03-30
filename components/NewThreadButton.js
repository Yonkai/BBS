import React from 'react';

class NewThreadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openStatus: false, name:' ', subject:' ', comments:' '};
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
           this.setState({ [name]: event.target.value });
        }
    }
    
    handleSubmit(event) {
        alert('A thing was submitted: ' + this.state.name + this.state.subject + this.state.comments);
        event.preventDefault();
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
                <input onChange={this.handleChange('name')} value={this.state.name} type="text" name="name" placeholder="Name" />
                <input onChange={this.handleChange('subject')}  value={this.state.subject} type="text" name="subject" placeholder="Subject"/>
                <textarea onChange={this.handleChange('comments')}  value={this.state.comments} id="story" placeholder='Comments' name="story" rows="5" cols="25"/>
                <input type="text" name="image" placeholder="Image?"/>
                <input type="text" name="captcha" placeholder="captcha"/>
                <input type="submit" value="Submit" />
            </form>
            <button className="check" onClick={this.openNewThreadForm}>Close Form</button>
            <style jsx>{`button { margin-right:15px;} input{display:block;}`}</style>
        </>
        }

        return (
            <div>
                {form}
            </div>
        );
    }
}

export default NewThreadButton