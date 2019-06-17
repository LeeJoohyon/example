# callback 함수란?

Node.js(자바스크립트)에서 함수는 일급 객체로 취급 됩니다. 일급 객체가 되기 위헤서는 아래조건이 충족되어야 합니다.

- 변수나 데이터 구조안에 담을 수 있다.
- 파라미터로 전달 할 수있다.
- 변환 값(return value)으로 사용할 수 있다.
- 할당에 사용된 이름과 관계없이 고유한 구별이 가능하다.
- 동적으로 프로퍼티가 가능하다.

```
// 일반적인 함수
function callbackTest(a, b)
{
    console.log("callbackTest, a:%s, b:%s", a, b);
}

callbackTest(1, 2);
```

callbacktest라는 함스를 선언해 줬고 a,b 두개의 매개 변수를 처리하고 있다.

```
$ node callbackTest.js
callbackTest, a:1, b:2
```

콜백을 추가하게되면 
```
function callbacktest(a, b, callback){
    console.log("callbackTest, a:%s, b:%s", a, b);
}
```

callbacktest() 함수에 **함수 객체가 매개변수**로 추가된 형상이다. 

처리 순서를 보면 callbacktest 가 실행되고 마지막에 callback 을 부른다. 이는 마치 일반적인 프로그래밍에서 return 을 하는 것과 유사하게 callbacktest() 함수의 세번째 인자인 functino(msg) { } 로 회귀된다. 여기서 사용된 callback 이라는 단어는 노드나 자바스크립트에서 특수하게 사용되는 케이스가 아니라 함수객체 입니다. 동작을 가장 잘 표현하고 있기 때문에 범용적으로 사용되고 있는 단어이다. 실행결과는 아래와 같다.
 
```
$node callback.js
callbackTest, a:1, b:2
success call callbackTest()
```

