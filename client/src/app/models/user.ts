export class User{
    avtar: string =  'https://www.w3schools.com/w3images/avatar6.png';
    name: string = '';
    place: string ='';
    gender: string = '';
    adahar: string = '';
    number: number = 1234455551;
    age: number = 22;
}

export class Visit{
    adahar: string = '';
    new: boolean = false;
    problem: string = '';
    date: Date = new Date();
    done: boolean = false;
}

export class WaitList{
    avtar: string = 'https://www.w3schools.com/w3images/avatar6.png';
    name: string = '';
    place: string ='';
    gender: string = '';
    adahar: string = '';
    number: number = 1234455551;
    age: number = 22;
    visits: Visit[] = [];
}
