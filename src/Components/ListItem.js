import React from'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetail: false
        };

        this.onShowClick = this.onShowClick.bind(this);
    }

    onShowClick(e){
        let eClass = e.target.classList;
        let result = eClass.toggle("fa-sort-down");

        if (!result) {
            eClass.toggle("fa-sort-up");
            eClass.toggle("fa-sort-down");
        } else {
            eClass.toggle("fa-sort-up");
            eClass.toggle("fa-sort-down");
        }

        // console.log(e);

        this.setState({
            showDetail: !this.state.showDetail
        });
    }

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render () {
        // const { title, details, time, id } = this.props;
        let showDetail = this.state.showDetail
        let detail;

        if (showDetail) {
            detail = <div className='details'>
                        <hr />
                        <p className="has-text-grey">{this.props.details}</p>
                        <div className='sideInfo'>
                            <small className='has-text-info'><i>{this.props.time}</i></small>
                            {this.props.deleteClickHandler ? <Link to={`/edit`} className='button is-link is-light is-small'><i className='fas fa-pen'></i> Edit</Link> : null}
                        </div>
                    </div>
        } else {
            detail = null
        }

        // I need to add a conditional rendering for the check and delete button...
        let action;
        // console.log(this.props.deleteClickHandler);
        if (this.props.deleteClickHandler) {
            action = <span>
                <i className='icons-item fas fa-check has-text-success'></i>
                <i className='icons-item fas fa-trash has-text-danger' onClick={this.onDeleteClick} ></i>
            </span>
        } else {
            action = null
        }

        return (
            <div className='listItem card'>
                <span className='subtitle'><strong>{this.props.title}</strong></span>
                <span className='icons'>
                    {action}
                    <i className='icons-item fas fa-sort-down' onClick={this.onShowClick} ></i>
                </span>
                {detail}
            </div>
        )
    }
}

ListItem.defaultProps = {
    title: "Task",
    details: "More details",
    time: "",
    id: ""
};

ListItem.propTypes = {
    item: PropTypes.object,
    deleteClickHandler: PropTypes.func
};

export default ListItem;