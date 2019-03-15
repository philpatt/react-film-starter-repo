import React, { Component } from 'react';



class Fave extends Component { 
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation()
        console.log('link was clicked')
        //will call this function to pass through props
        this.props.onFaveToggle()
    }
    render() {
        let className = 'film-row-fave '
        let addRemove = ''
        if (this.props.isFave) { 
            addRemove = 'remove_from_queue'
        } else {
            addRemove = 'add_to_queue'
        }
        return (
            <div onClick={this.handleClick} className={'film-row-fave' + ' ' + addRemove}>
                <p className='material-icons'>{addRemove}</p>
            </div>
        )
    }
}

export default Fave;