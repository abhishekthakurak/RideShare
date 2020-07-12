import './style.css'
import avatar from "../../../assets/avatar.png";

export default class List {
    constructor({ data, selectedId }) {
        this.data = data
        this.selectedId = selectedId
    }

    render () {
        if (!this.data || !this.data.length) {
            return `<div class='no-result'> No cars available! </div>`
        }
        return this.data.map(({ id, name, source, destination, car, seats, rating, minAway }) => 
            `<div class='list-item-wrap ${this.selectedId === id ? 'selected': ''}' id=${id}>
                <img class='avatar' src=${avatar} alt='avatar'/>
                <div class='content-wrap'>
                    <span class='name'>${name}</span>
                    <span class='mins-away ${this.selectedId === id ? 'min-away-white': ''}''>${minAway} min(s) away</span> 
                    <span class='rating'>${rating} &#9733</span> 
                    <div class='route'>route: <strong>${source} to ${destination} </strong></div>
                    <span class='car'>car: <strong>${car}</strong></span>
                    <span class='seats'>seats available: <strong>${seats}</strong></span>
                </div>
            </div>`
        ).join('')
    }
}