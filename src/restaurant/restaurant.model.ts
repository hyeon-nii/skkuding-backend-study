// Restaurant 인터페이스 정의이다.
export interface Restaurant {
    name: string;
    address: string;
    phone: string;
}

// 메모리 기반 데이터 배열이며, CRUD를 위해 let으로 선언한다.
export let Restaurants: Restaurant[] = [
    {
        "name": "봉수육",
        "address": "경기 수원시 장안구 율전로108번길 11 1층",
        "phone": "0507-1460-0903"
    },
    {
        "name": "닭발먹은새우 율전성대점",
        "address": "경기 수원시 장안구 율전로92번길 13-1",
        "phone": "031-294-8889"
    },
    {
        "name": "성대 막국수",
        "address": "경기 수원시 장안구 율전로86번길 18",
        "phone": "050-9999-8888"
    }
];