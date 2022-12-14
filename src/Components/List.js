import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Layouts/Navbar';
import ListItem from './ListItem';

class List extends React.Component{
    constructor() {
        super();

        this.state = {
            lists: [
                {
                    id: 1,
                    title: "Pray",
                    details: "Go before the throne of grace and obtain mercy.",
                    time: new Date(),
                    checked: true
                },
                {
                    id: 2,
                    title: "Bath",
                    details: "Cleanliness is next to godliness.",
                    time: new Date(),
                    checked: false
                },
                {
                    id: 3,
                    title: "Prepare",
                    details: "Probably wear cloth, comb my hair, eat, an so on...",
                    time: new Date(),
                    checked: false
                }
            ]
        }
    }

    deleteItem = (id) => {
        const { lists } = this.state;

        let newLists = lists.filter(list => list.id !== id);

        this.setState({
            lists: newLists
        });
    }

    render () {
        const { lists } = this.state

        let listsDetails;

        // console.log(typeof lists);
        if (lists.length !== 0 && typeof lists === "object") {
            listsDetails = <div>
                {lists.map(list => (
                    <ListItem key={list.id} title={list.title} details={list.details} time={list.time.toLocaleTimeString()} deleteClickHandler={this.deleteItem.bind(this, list.id)} />
                ))}
            </div>
        } else {
            listsDetails = <ListItem 
                title="Add a new task"
                details="Click the 'Add new' button to add a new task."
                time={<Link className='button is-success is-light is-small' to={`/add`} > Add new </Link>}
            />
        }

        return (
            <div>
                <Navbar />
                <div className='lists'>
                    <h3 className='title has-text-danger'>TO DO LISTS</h3>
                    <hr></hr>
                    {/* <ListItem /> */}
                    {listsDetails}
                    {/* {lists.map(list => (
                        <ListItem key={list.id} title={list.title} details={list.details} time={list.time} deleteClickHandler={this.deleteItem.bind(this, list.id)} />
                    ))} */}
                </div>
                <div className='appFooter'>
                    <i className='has-text-white'>Powered by <span className='has-text-warning'>Etarious Media & Technologies</span></i>
                </div>
            </div>
        );
    }
}

export default List;