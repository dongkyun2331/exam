const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const t = "정답";
const f = "오답";

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
        console.log(f);
        console.log(
          "순차 다이어그래은 행위 다어어그램이므로 동적이고, 순차적인 표현을 위한 다이어그램이다,"
        );
      }
      if (input === "2") {
        console.log(t);
        console.log(
          "순차 다이어그래은 행위 다어어그램이므로 동적이고, 순차적인 표현을 위한 다이어그램이다,"
        );
        softwareDesign2();
      }
      if (input === "3") {
        console.log(f);
        console.log(
          "순차 다이어그래은 행위 다어어그램이므로 동적이고, 순차적인 표현을 위한 다이어그램이다,"
        );
      }
      if (input === "4") {
        console.log(f);
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
        console.log(
          "- 기능적 요구사항: 시스템이 실제로 어떻게 동작하는지에 관점을 둔 요구사항\n- 비기능적 요구사항: 시스템 구축에 대한 성능, 보안, 품질, 안정 등에 대한 성능, 보안, 품질, 안정성등으로 실제 수행에 보조적인 요구사항\n- 차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다 는 성능에 해당 하므로 비기능적 요구사항에 해당한다."
        );
      }
      if (input === "2") {
        console.log("정답");
        console.log(
          "- 기능적 요구사항: 시스템이 실제로 어떻게 동작하는지에 관점을 둔 요구사항\n- 비기능적 요구사항: 시스템 구축에 대한 성능, 보안, 품질, 안정 등에 대한 성능, 보안, 품질, 안정성등으로 실제 수행에 보조적인 요구사항\n- 차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다 는 성능에 해당 하므로 비기능적 요구사항에 해당한다."
        );
        softwareDesign6();
      }
      if (input === "3") {
        console.log("오답");
        console.log(
          "- 기능적 요구사항: 시스템이 실제로 어떻게 동작하는지에 관점을 둔 요구사항\n- 비기능적 요구사항: 시스템 구축에 대한 성능, 보안, 품질, 안정 등에 대한 성능, 보안, 품질, 안정성등으로 실제 수행에 보조적인 요구사항\n- 차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다 는 성능에 해당 하므로 비기능적 요구사항에 해당한다."
        );
      }
      if (input === "4") {
        console.log("오답");
        console.log(
          "- 기능적 요구사항: 시스템이 실제로 어떻게 동작하는지에 관점을 둔 요구사항\n- 비기능적 요구사항: 시스템 구축에 대한 성능, 보안, 품질, 안정 등에 대한 성능, 보안, 품질, 안정성등으로 실제 수행에 보조적인 요구사항\n- 차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다 는 성능에 해당 하므로 비기능적 요구사항에 해당한다."
        );
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

function softwareDesign11() {
  rl.question(
    "11. 객체에 대한 설명으로 틀린 것은?\n 1: 객체는 상태, 동작, 고유 식별자를 가진 모든 것이라 할 수 있다.\n 2: 객체는 공통 속성을 공유하는 클래스들의 집합이다.\n 3: 객체는 필요한 자료 구조와 이에 수행되는 함수들을 가진 하나의 독립된 존재이다.\n 4: 객체의 상태는 속성값에 의해 정의된다.\n",
    (input) => {
      if (input === "1") {
        console.log(f);
      }
      if (input === "2") {
        console.log(t);
        softwareDesign12();
      }
      if (input === "3") {
        console.log(f);
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign11();
      }
    }
  );
}

function softwareDesign12() {
  rl.question(
    "12. 속성과 관련된 연산(Operation)을 클래스 안에 묶어서 하나로 취급하는 것을 의미하는 객체지향 개념은?\n 1: Inheritance\n 2: Class\n 3: Encapsulation\n 4: Association\n",
    (input) => {
      if (input === "1") {
        console.log(f);
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(t);
        softwareDesign13();
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign12();
      }
    }
  );
}

function softwareDesign13() {
  rl.question(
    "13. 애자일(Agile) 프로세스 모델에 대한 설명으로 틀린 것은?\n 1: 변화에 대한 대응보다는 자세한 계획을 중심으로 소프트웨어를 개발한다.\n 2: 프로세스와 도구 중심이 아닌 개개인과의 상호소통을 통해 의견을 수렴한다.\n 3: 협상과 계약보다는 고객과의 협력을 중시한다.\n 4: 문서 중심이 아닌, 실행 가능한 소프트웨어를 중시한다.\n",
    (input) => {
      if (input === "1") {
        console.log(t);
        softwareDesign14();
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(f);
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign13();
      }
    }
  );
}

function softwareDesign14() {
  rl.question(
    "14. 명백한 역할을 가지고 독립적으로 존재할 수 있는 시스템의 부분으로 넓은 의미에서는 재사용되는 모든 단위라고 볼 수 있으며, 인터페이스를 통해서만 접근할 수 있는 것은?\n 1: Model\n 2: Sheet\n 3: Component\n 4: Cel\n",
    (input) => {
      if (input === "1") {
        console.log(f);
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(t);
        softwareDesign15();
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign14();
      }
    }
  );
}

function softwareDesign15() {
  rl.question(
    "15. GoF(Gang of Four) 디자인 패턴을 생성, 구조, 행동 패턴의 세 그룹으로 분류할 때, 구조 패턴이 아닌 것은?\n 1: Adapter 패턴\n 2: Bridge 패턴\n 3: Builder 패턴\n 4: Proxy 패턴\n",
    (input) => {
      if (input === "1") {
        console.log(f);
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(t);
        softwareDesign16();
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign15();
      }
    }
  );
}

function softwareDesign16() {
  rl.question(
    "16. UI와 관련된 기본 개념 중 하나로, 시스템의 상태와 사용자의 지시에 대한 효과를 보여주어 사용자가 명령에 대한 진행 상황과 표시된 내용을 해석할 수 있도록 도와주는 것은?\n 1: Feedback\n 2: Posture\n 3: Module\n 4: Hash\n",
    (input) => {
      if (input === "1") {
        console.log(t);
        softwareDesign17();
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(f);
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign16();
      }
    }
  );
}

function softwareDesign17() {
  rl.question(
    "17. UI의 종류로 멀티 터치(Multi-touch), 동작 인식(Gesture Recognition) 등 사용자의 자연스러운 움직임을 인식하여 서로 주고받는 정보를 제공하는 사용자 인터페이스를 의미 하는 것은?\n 1: GUI(Graphical User Interface)\n 2: OUI(Organic User Interface)\n 3: NUI(Natural User Interface)\n 4: CLI(Command Line Interface)\n",
    (input) => {
      if (input === "1") {
        console.log(f);
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(t);
        softwareDesign18();
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign17();
      }
    }
  );
}

function softwareDesign18() {
  rl.question(
    "18. 소프트웨어 모델링과 관련한 설명으로 틀린 것은?\n 1: 모델링 작업의 결과물은 다른 모델링 작업에 영향을 줄 수 없다.\n 2: 구조적 방법론에서는 DFD(Data Flow Diagram), DD(Data Dictionary) 등을 사용하여 요구 사항의 결과를 표현한다.\n 3: 객체지향 방법론에서는 UML 표기법을 사용한다.\n 4: 소프트웨어 모델을 사용할 경우 개발될 소프트웨어에 대한 이해도 및 이해 당사자 간의 의사소통 향상에 도움이 된다.\n",
    (input) => {
      if (input === "1") {
        console.log(t);
        softwareDesign19();
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(f);
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign18();
      }
    }
  );
}

function softwareDesign19() {
  rl.question(
    "19. 유스케이스 다이어그램(Use Case Diagram)에 관련된 내용으로 틀린 것은?\n 1: 시스템과 상호작용하는 외부시스템은 액터로 파악해서는 안된다.\n 2: 유스케이스는 사용자 측면에서의 요구사항으로, 사용자가 원하는 목표를 달성하기 위해 수행할 내용을 기술한다.\n 3: 시스템 액터는 다른 프로젝트에서 이미 개발되어 사용되고 있으며, 본 시스템과 데이터를 주고받는 등 서로 연동되는 시스템을 말한다.\n 4: 액터가 인식할 수 없는 시스템 내부의 기능을 하나의 유스케이스로 파악해서는 안된다.\n",
    (input) => {
      if (input === "1") {
        console.log(t);
        softwareDesign20();
      }
      if (input === "2") {
        console.log(f);
      }
      if (input === "3") {
        console.log(f);
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign19();
      }
    }
  );
}

function softwareDesign20() {
  rl.question(
    "20. 소프트웨어 아키텍처 모델 중 MVC(Model-View-Controller)와 관련한 설명으로 틀린 것은?\n 1: MVC 모델은 사용자 인터페이스를 담당하는 계층의 응집도를 높일 수 있고, 여러 개의 다른 UI를 만들어 그 사이에 결합도를 낮출 수 있다.\n 2: 모델(Model)은 뷰(View)와 제어(Controller) 사이에서 전달자 역할을 하며, 뷰마다 모델 서브시스템이 각각 하나씩 연결된다.\n 3: 뷰(View)는 모델(Model)에 있는 데이터를 사용자 인터페이스에 보이는 역할을 담당한다.\n 4: 제어(Controller)는 모델(Model)에 명령을 보냄으로써 모델의 상태를 변경할 수 있다.\n",
    (input) => {
      if (input === "1") {
        console.log(f);
      }
      if (input === "2") {
        console.log(t);
        askSubject();
      }
      if (input === "3") {
        console.log(f);
      }
      if (input === "4") {
        console.log(f);
      } else {
        softwareDesign20();
      }
    }
  );
}

askSubject();
