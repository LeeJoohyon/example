## 블로킹

블로킹은 Node.js 프로세스에서 추가적인 JavaScript의 실행을 위해 JavaScript가 아닌 작업이 완료될 때까지 기다려야만 하는 상황입니다. 이는 이벤트 루프가 블로킹 작업을 하는 동안 JavaScript 실행을 계속할 수 없기 때문입니다.

Node.js에서, I/O 등의 JavaScript가 아닌 작업을 기다리는 것보다 CPU 집약적인 작업 때문에 나쁜 성능을 보여주는 JavaScript는 보통 블로킹이라고 부르지 않습니다. libuv를 사용하는 Node.js 표준 라이브러리의 동기 메서드가 가장 대표적인 블로킹 작업입니다. 네이티브 모듈도 블로킹 메서드를 가질 수 있습니다.

Node.js 표준 라이브러리의 모든 I/O 메서드는 논블로킹인 비동기 방식을 제공하고 콜백 함수를 받습니다. 일부 메서드는 같은 작업을 하는 블로킹 메서드도 가지는데 이는 이름 마지막에 Sync가 붙습니다.

**블로킹** 메서드는 동기로 실행되고 논블로킹 메서드는 비동기로 실행됩니다.

예시로 파일 시스템 모듈을 사용할 때 다음은 동기로 파일을 읽는 예제입니다.

```
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // 파일을 읽을 때까지 여기서 블로킹 됩니다.
```

## 논블로킹 (비동기)
```
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```