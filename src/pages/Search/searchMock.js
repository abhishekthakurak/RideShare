
const  availableCabs = {
    1: {   
        id: 1,
        name: 'Abhishek',
        source: 'Rohini',
        destination: 'Janakpuri',
        car: 'Polo',
        seats: 3,
        rating: 4.2,
        minAway: 5
    },
    2: {   
        id: 2,
        name: 'Divyanshu',
        source: 'Rohini',
        destination: 'Dwarka',
        car: 'Zen',
        seats: 3,
        rating: 4.4,
        minAway: 8
    },
    3: {
        id: 3,
        name: 'Shivani',
        source: 'Rohini',
        destination: 'Rani Bagh',
        car: 'WagonR',
        seats: 3,
        rating: 4.1,
        minAway: 3
    },
    4: {   
        id: 4,
        name: 'Sachin',
        source: 'Kailash Colony',
        destination: 'Janakpuri',
        car: 'Swift',
        seats: 3,
        rating: 3.9,
        minAway: 15
    },
    5: {   
        id: 5,
        name: 'Hitesh',
        source: 'Jahangir Puri',
        destination: 'Janakpuri',
        car: 'Swift Dzire',
        seats: 4,
        rating: 4.7,
        minAway: 3
    },
    6: {   
        id: 6,
        name: 'Akanksha',
        source: 'Kamla Nagar',
        destination: 'Rohini',
        car: 'Swift Dzire',
        seats: 4,
        rating: 4.8,
        minAway: 21
    },
    7: {   
        id: 7,
        name: 'Khusbhu',
        source: 'Lodhi Garden',
        destination: 'Rohini',
        car: 'Ciaz',
        seats: 4,
        rating: 4.8,
        minAway: 12
    },
    8: {   
        id: 8,
        name: 'Natansh',
        source: 'Qutub Minar',
        destination: 'Pitampura',
        car: 'Alto',
        seats: 2,
        rating: 4.5,
        minAway: 2
    }
}

const sourceLocationMap = {
    'Rohini': [1, 2, 3],
    'Kailash Colony': [4],
    'Jahangir Puri': [5],
    'Kamla Nagar': [6],
    'Lodhi Garden': [7],
    'Qutub Minar': [8]
}

const destinationLocationMap = {
    'Janakpuri': [1],
    'Dwarka': [2],
    'Rani Bagh': [3, 4, 5],
    'Rohini': [6, 7],
    'Pitampura': [8]
}

function searchCabs (dataSet, query, auxData) {
    if (!query) {
        return auxData
    }
    let filteredData = {}
    Object.entries(dataSet).forEach(([key, value])=>{
        if (key.toLowerCase().includes(query.toLowerCase())) {
            filteredData = value.reduce((filteredCars, id)=>{
                if (auxData[id]) {
                    filteredCars[id] = auxData[id]
                }
                return filteredCars
            }, {})
        }
    })
   return filteredData
}

export function getCabs ({source, destination}) {
    let cabs = searchCabs(sourceLocationMap, source, availableCabs)
    cabs =  searchCabs(destinationLocationMap, destination, cabs)
    return Object.values(cabs).sort(({ minAway: minAwayTwo }, { minAway: minAwayOne }) => {
        if (minAwayOne > minAwayTwo) {
            return -1
        }
        return 1
    })
}