export interface Table {
    number: number;
    imgURL: String;
    seats: number;
    type: String;
    timeIsReserved: {
        four: boolean,
        five: boolean,
        six: boolean,
        seven: boolean,    
        eight: boolean,    
        nine: boolean,            
    }
}
