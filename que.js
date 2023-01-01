class Queue {
    constructor(){
        this.storage = {}; //값을 저장할 객체
        this.front = 0; //첫 원소를 가리킬 포인터 
        this.rear = 0; // 마지막 원소를 가리킬 포인터
    }
    // 크기 구하기
    size(){
        //rear가 가리키는 값이 없을 때가 아무 데이터가 없는 경우임.
        if(this.storage[rear] === undefined)
        {
            return 0;
        } else {
            // 값이 있다면 0 부터 시작하기 때문에 + 1을 해줘야 함.
            return this.rear - this.front +1;
        }
    }

    add(value){
        //큐에 데이터가 없는 경우
        if(this.size()===0){
            // 0의 위치에 값을 넣고 포인터는 건드리지 않는다.
            //이때 ['0']인 이유는 JS객체 Object는 키값으로 오직 문자열과 symbol만 허용하기 때문
            this.storage['0'] = value;
        } else {
            //그 외의 경우는 간단하게 rear 위치는 1만큼 늘리고 해당 위치에 값을 삽입.
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }

    popleft(){
        let temp;
        if (this.front === this.rear){
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];
        }
        return temp;
    }
}

