export class User{
    patientId: string = '1234';
    avtar: string = '/assets/images/user.png';
    name: string = '';
    place: string ='';
    gender: string = '';
    adahar: string = '';
    number: number = 1234455551;
    age: number = 22;
}

export class Visit{
    adahar: string = '';
    problem: string = '';
}

export class WaitList{
    patientId: string = '1234';
    avtar: string = '/assets/images/user.png';
    name: string = '';
    place: string ='';
    gender: string = '';
    adahar: string = '';
    number: number = 1234455551;
    age: number = 22;
    problem: string ='';
    done: boolean = false;
}

export const  waitList: WaitList[] =[
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'Dhruva',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "severe pain at knee joint",
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'Ravi',
        place: 'Tanuku',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "Fracture hand"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'kiran',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'Rama Krishna',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'Hacker',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'Sehwag',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'George',
        place: 'Vijayawada',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'vinay',
        place: 'Tadepalligudam',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'ravi',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'Sai',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    },
    {
        patientId: '1332',
        avtar: '/assets/images/user.png',
        name: 'Siva',
        place: 'Bhimavaram',
        gender: 'male',
        age: 22,
        number: 1234567894,
        adahar: '12345678',
        done: false,
        problem: "sever pain at knee joint"
    }
]