const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askSubject() {
  rl.question("1: 소프트웨어 설계\n", (input) => {
    if (input === "1") {
      softwareDesign1();
    } else {
      askSubject();
    }
  });
}

function softwareDesign1() {
  rl.question(
    "1. UML 다이어그램 중 순차 다이어그램에 대한 설명으로 틀린 것은?\n 1: 객체 간의 동적 상호작용을 시간 개념을 중심으로 모델링 하는 것이다.\n 2: 주로 시스템의 정적 측면을 모델링하기 위해 사용한다.\n 3: 일반적으로 다이어그램의 수직 방향이 시간의 흐름을 나타낸다.\n 4: 회귀 메시지(Self-Message), 제어블록(Statement block) 등으로 구성된다.\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
        console.log(
          "순차 다이어그래은 행위 다어어그램이므로 동적이고, 순차적인 표현을 위한 다이어그램이다,"
        );
      }
      if (input === "2") {
        console.log("정답");
        console.log(
          "순차 다이어그래은 행위 다어어그램이므로 동적이고, 순차적인 표현을 위한 다이어그램이다,"
        );
        softwareDesign2();
      }
      if (input === "3") {
        console.log("오답");
        console.log(
          "순차 다이어그래은 행위 다어어그램이므로 동적이고, 순차적인 표현을 위한 다이어그램이다,"
        );
      }
      if (input === "4") {
        console.log("오답");
        console.log(
          "순차 다이어그래은 행위 다어어그램이므로 동적이고, 순차적인 표현을 위한 다이어그램이다,"
        );
      } else {
        softwareDesign1();
      }
    }
  );
}

function softwareDesign2() {
  rl.question(
    "2. 메시지 지향 미들웨어(Message-Oriented Middleware, MOM)에 대한 설명으로 틀린 것은?\n 1: 느리고 안정적인 응답보다는 즉각적인 응답이 필요한 온라인 업무에 적합하다.\n 2: 독립적인 애플리케이션을 하나의 통합된 시스템으로 묶기 위한 역할을 한다.\n 3: 송신측과 수신측의 연결 시 메시지 큐를 활용하는 방법이 있다\n 4: 상이한 애플리케이션 간 통신을 비동기 방식으로 지원한다.\n",
    (input) => {
      if (input === "1") {
        console.log("정답");
        console.log(
          "MOM(Message Oriented Middleware)\n- 메시지 기반의 비동기형 메시지를 전달하는 방식의 미들웨어이다.\n- 온라인 업무보다는 이기종 분산 데이터 시스템의 데이터 동기를 위해 많이 사용한다.\n\nMoM(Message Oriented Middleware)은 즉각적인 응답을 원하는 경우가 아니라 다소 느리고 안정적인 응답을 필요로 하는 경우에 많이 사용됩니다."
        );
        softwareDesign3();
      }
      if (input === "2") {
        console.log("오답");
        console.log(
          "MOM(Message Oriented Middleware)\n- 메시지 기반의 비동기형 메시지를 전달하는 방식의 미들웨어이다.\n- 온라인 업무보다는 이기종 분산 데이터 시스템의 데이터 동기를 위해 많이 사용한다.\n\nMoM(Message Oriented Middleware)은 즉각적인 응답을 원하는 경우가 아니라 다소 느리고 안정적인 응답을 필요로 하는 경우에 많이 사용됩니다."
        );
      }
      if (input === "3") {
        console.log("오답");
        console.log(
          "MOM(Message Oriented Middleware)\n- 메시지 기반의 비동기형 메시지를 전달하는 방식의 미들웨어이다.\n- 온라인 업무보다는 이기종 분산 데이터 시스템의 데이터 동기를 위해 많이 사용한다.\n\nMoM(Message Oriented Middleware)은 즉각적인 응답을 원하는 경우가 아니라 다소 느리고 안정적인 응답을 필요로 하는 경우에 많이 사용됩니다."
        );
      }
      if (input === "4") {
        console.log("오답");
        console.log(
          "MOM(Message Oriented Middleware)\n- 메시지 기반의 비동기형 메시지를 전달하는 방식의 미들웨어이다.\n- 온라인 업무보다는 이기종 분산 데이터 시스템의 데이터 동기를 위해 많이 사용한다.\n\nMoM(Message Oriented Middleware)은 즉각적인 응답을 원하는 경우가 아니라 다소 느리고 안정적인 응답을 필요로 하는 경우에 많이 사용됩니다."
        );
      } else {
        softwareDesign2();
      }
    }
  );
}

function softwareDesign3() {
  rl.question(
    "3. 익스트림 프로그래밍에 대한 설명으로 틀린 것은?\n 1: 대표적인 구조적 방법론 중 하나이다.\n 2: 소규모 개발 조직이 불확실하고 변경이 많은 요구를 접하였을 때 적절한 방법이다.\n 3: 익스트림 프로그래밍을 구동시키는 원리는 상식적인 원리와 경험을 최대한 끌어 올리는 것이다.\n 4: 구체적인 실천 방법을 정의하고 있으며, 개발 문서 보다는 소스코드에 중점을 둔다.\n",
    (input) => {
      if (input === "1") {
        console.log("정답");
        console.log("구조적 방법론이 아니라 애자일 방법론 중 하나이다.");
        softwareDesign4();
      }
      if (input === "2") {
        console.log("오답");
        console.log("구조적 방법론이 아니라 애자일 방법론 중 하나이다.");
      }
      if (input === "3") {
        console.log("오답");
        console.log("구조적 방법론이 아니라 애자일 방법론 중 하나이다.");
      }
      if (input === "4") {
        console.log("오답");
        console.log("구조적 방법론이 아니라 애자일 방법론 중 하나이다.");
      } else {
        softwareDesign3();
      }
    }
  );
}

function softwareDesign4() {
  rl.question(
    "4. 유스케이스(Use Case)의 구성 요소 간의 관계에 포함되지 않는 것은?\n 1: 연관\n 2: 확장\n 3: 구체화\n 4: 일반화\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
        console.log(
          "유스케이스(Use Case)의 구성 요소 간의 관계\n- 연관관계(Association): 유스케이스와 액터간의 상호작용이 있음을 표현한다.\n- 포함 관계(Include): 하나의 유스케이스가 다른 유스케이스의 실행을 전제로 할 때 형성되는 관계이다.\n- 확장 관계(Extend): 확장 기능 유스케이스와 확장 대상 유스케이스 사이에 형성 되는 관계이다.\n- 일반화 관계(Generalization): 유사한 유스케이스 또는 액터를 모아 추상화한 유스케이스 또는 액터와 연결시켜 그룹을 만들어 이해도를 높이기 위한 관계이다."
        );
      }
      if (input === "2") {
        console.log("오답");
        console.log(
          "유스케이스(Use Case)의 구성 요소 간의 관계\n- 연관관계(Association): 유스케이스와 액터간의 상호작용이 있음을 표현한다.\n- 포함 관계(Include): 하나의 유스케이스가 다른 유스케이스의 실행을 전제로 할 때 형성되는 관계이다.\n- 확장 관계(Extend): 확장 기능 유스케이스와 확장 대상 유스케이스 사이에 형성 되는 관계이다.\n- 일반화 관계(Generalization): 유사한 유스케이스 또는 액터를 모아 추상화한 유스케이스 또는 액터와 연결시켜 그룹을 만들어 이해도를 높이기 위한 관계이다."
        );
      }
      if (input === "3") {
        console.log("정답");
        console.log(
          "유스케이스(Use Case)의 구성 요소 간의 관계\n- 연관관계(Association): 유스케이스와 액터간의 상호작용이 있음을 표현한다.\n- 포함 관계(Include): 하나의 유스케이스가 다른 유스케이스의 실행을 전제로 할 때 형성되는 관계이다.\n- 확장 관계(Extend): 확장 기능 유스케이스와 확장 대상 유스케이스 사이에 형성 되는 관계이다.\n- 일반화 관계(Generalization): 유사한 유스케이스 또는 액터를 모아 추상화한 유스케이스 또는 액터와 연결시켜 그룹을 만들어 이해도를 높이기 위한 관계이다."
        );
        softwareDesign5();
      }
      if (input === "4") {
        console.log("오답");
        console.log(
          "유스케이스(Use Case)의 구성 요소 간의 관계\n- 연관관계(Association): 유스케이스와 액터간의 상호작용이 있음을 표현한다.\n- 포함 관계(Include): 하나의 유스케이스가 다른 유스케이스의 실행을 전제로 할 때 형성되는 관계이다.\n- 확장 관계(Extend): 확장 기능 유스케이스와 확장 대상 유스케이스 사이에 형성 되는 관계이다.\n- 일반화 관계(Generalization): 유사한 유스케이스 또는 액터를 모아 추상화한 유스케이스 또는 액터와 연결시켜 그룹을 만들어 이해도를 높이기 위한 관계이다."
        );
      } else {
        softwareDesign4();
      }
    }
  );
}

function softwareDesign5() {
  rl.question(
    "5. 요구사항 분석에서 비기능적(Nonfunctional) 요구에 대한 설명으로 옳은 것은?\n 1: 시스템의 처리량(Throughput), 반응 시간 등의 성능 요구나 품질 요구는 비기능적 요구에 해당하지 않는다.\n 2: '차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다'는 비기능적 요구이다.\n  3: 시스템 구축과 관련된 안전, 보안에 대한 요구사항들은 비기능적 요구에 해당하지 않는다.\n 4: '금융 시스템은 조회, 인출, 입금, 송금의 기능이 있어야 한다'는 비기능적 요구이다.\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
      }
      if (input === "2") {
        console.log("정답");
        softwareDesign6();
      }
      if (input === "3") {
        console.log("오답");
      }
      if (input === "4") {
        console.log("오답");
      } else {
        softwareDesign5();
      }
    }
  );
}

function softwareDesign6() {
  rl.question(
    "6. 정보공학 방법론에서 데이터베이스 설계의 표현으로 사용하는 모델링 언어는?\n 1: Package Diagram\n 2: State Transition Diagram\n 3: Deployment Diagram\n 4: Entity-Relationship Diagram\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
      }
      if (input === "2") {
        console.log("오답");
      }
      if (input === "3") {
        console.log("오답");
      }
      if (input === "4") {
        console.log("정답");
        softwareDesign7();
      } else {
        softwareDesign6();
      }
    }
  );
}

function softwareDesign7() {
  rl.question(
    "7. 미들웨어(Middleware)에 대한 설명으로 틀린 것은?\n 1: 여러 운영체제에서 응용 프로그램들 사이에 위치한 소프트웨어이다.\n 2: 미들웨어의 서비스 이용을 위해 사용자가 정보 교환 방법 등의 내부 동작을 쉽게 확인할 수 있어야 한다.\n 3: 소프트웨어 컴포넌트를 연결하기 위한 준비된 인프라 구조를 제공한다.\n 4: 여러 컴포넌트를 1대 1, 1대 다, 다대 다 등 여러 가지 형태로 연결이 가능하다\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
      }
      if (input === "2") {
        console.log("정답");
        softwareDesign8();
      }
      if (input === "3") {
        console.log("오답");
      }
      if (input === "4") {
        console.log("오답");
      } else {
        softwareDesign7();
      }
    }
  );
}

function softwareDesign8() {
  rl.question(
    "8. UI의 설계 지침으로 틀린 것은?\n 1: 이해하기 편하고 쉽게 사용할 수 있는 환경을 제공해야 한다.\n 2: 주요 기능을 메인 화면에 노출하여 조작이 쉽도록 하여야 한다.\n 3: 치명적인 오류에 대한 부정적인 사항은 사용자가 인지할 수 없도록 한다.\n 4: 사용자의 직무, 연령, 성별 등 다양한 계층을 수용하여야 한다.\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
      }
      if (input === "2") {
        console.log("오답");
      }
      if (input === "3") {
        console.log("정답");
        softwareDesign9();
      }
      if (input === "4") {
        console.log("오답");
      } else {
        softwareDesign8();
      }
    }
  );
}

function softwareDesign9() {
  rl.question(
    "9. 객체지향 개념에서 다형성(Polymorphism)과 관련한 설명으로 틀린 것은?\n 1: 다형성은 현재 코드를 변경하지 않고 새로운 클래스를 쉽게 추가할 수 있게 한다.\n 2: 다형성이란 여러 가지 형태를 가지고 있다는 의미로, 여러 형태를 받아들일 수 있는 특징을 말한다.\n 3: 메소드 오버라이딩(Overriding)은 상위 클래스에서 정의한 일반 메소드의 구현을 하위 클래스에서 무시하고 재정의 할 수 있다.\n 4: 메소드 오버로딩(Overloading)의 경우 매개 변수 타입은 동일하지만 메소드명을 다르게 함으로써 구현, 구분할 수 있다.\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
      }
      if (input === "2") {
        console.log("오답");
      }
      if (input === "3") {
        console.log("오답");
      }
      if (input === "4") {
        console.log("정답");
        softwareDesign10();
      } else {
        softwareDesign9();
      }
    }
  );
}

function softwareDesign10() {
  rl.question(
    "10. 소프트웨어 개발 영역을 결정하는 요소 중 다음 사항과 관계있는 것은?\n - 소프트웨어에 의해 간접적으로 제어되는 장치와 소프트웨어를 실행하는 하드웨어\n - 기존의 소프트웨어와 새로운 소프트웨어를 연결하는 소프트웨어\n - 순서적 연산에 의해 소프트웨어를 실행하는 절차\n 1: 기능(Function)\n 2: 성능(Performance)\n 3: 제약 조건(Constraint)\n 4: 인터페이스(Interface)\n",
    (input) => {
      if (input === "1") {
        console.log("오답");
      }
      if (input === "2") {
        console.log("오답");
      }
      if (input === "3") {
        console.log("오답");
      }
      if (input === "4") {
        console.log("정답");
        softwareDesign11();
      } else {
        softwareDesign10();
      }
    }
  );
}

askSubject();
