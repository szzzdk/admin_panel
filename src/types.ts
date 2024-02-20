// import axios from 'axios';

// interface Dariga<T> {
//     status: number;
//     code: number;
//     data: T;
//     error?: string;
// }

// interface Data {
//     name: string;
//     count: number;
//     parent: string;
// }

// axios.get<Data>('url').then((response) => {
//    response.data.count;
// });

// const test = {
//     "TEST": "valuE"
// }
// test.TEST

// [
//     {
//         name: "string",
//         count: 0,
//         parent: "string"
//     }
// ]


// type ApiResponse<Data> = {
//     data: Data,
//     isError: boolean
// }

// type UserResponse = ApiResponse<{ name: string; age: number }>
// type BlogResponse = ApiResponse<{ title: string }>
// type StatusResponse = ApiResponse<{ status: number}>

// const response: UserResponse = {
//     data: {
//         name: 'Kylie',
//         age: 21
//     },
//     isError: false
// }

// const blogResponse: BlogResponse = {
//     data: {
//         title: 'jjdj'
//     },
//     isError: true
// }

// console.log(response)
// console.log(blogResponse)