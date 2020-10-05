[Eng](manual_mdm.md) / 한글

## 1. Register User and Login

생산시스템은 기본적으로 생산 관련 인원, 즉 직원들을 대상으로 사용되는 시스템입니다. 

그러므로 일반 사용자가 회원가입을 진행하여 가입되는 절차와는 달리, 관리자가 직원을 등록해서 관리하는 시스템으로 구성되어 있습니다. 

이 버전에서는 외부 ERP 등과 연동하여 사원정보를 Interface하는 절차는 생략합니다. 하지만 필요 시에는 사원정보를 연동해서 활용하는 것도 가능합니다.

시스템을 처음 사용할 경우에는 관리자 계정인 'adminstrator'만 제공되어 있습니다. 

![Login](./images/s001.png)

해당 계정으로 접속하면 사원 등록을 할 수 있으며, 등록된 사원으로 로그인이 가능합니다.

![Register User](./images/s002.png)

## 2. External System / Printing Info

외부 시스템은 생산시스템과 연계해서 사용하는 시스템을 뜻하며, 크게 실행 가능한(Executable) 시스템과 출력물(Printing) 시스템으로 구분합니다. 

Executable System은 공정 작업 중에 특정 외부 프로그램을 실행하기 위한 용도로 사용되나, 현재는 IE 10.0 이상 버전에서만 호환 가능하기 때문에 사용 상 제약이 있습니다. 이 기능은 추가 업데이트 중 삭제될(Deprecated) 수도 있습니다.

Printing Systems은 생산 준비 및 공정 작업, 리포트 등의 모든 출력물에 사용될 프로그램을 등록하기 위한 용도로 사용됩니다. 현재는 예제 또는 세팅된 오픈소스 용 Report가 없지만, 추후에 활용 가능한 Report 프로그램을 등록할 예정이니 참고 바라겠습니다.

![External Systems](./images/s003.png)

Printing Info는 Exedutable System에서 등록된 출력물 시스템에 연결된 기능으로, 실제 출력물을 등록하는 화면입니다. 출력물은 라벨이 될 수도 있고, 리포트가 될 수도 있습니다.

![Printing Info](./images/s004.png)

출력물 정보는 다음 기능을 포함합니다.

+ 어떤 출력물 프로그램을 사용할 것인지
+ 출력물의 이름 및 사용할 파일, 세부 내용
+ 공정 중에서 출력할 경우에 사용할 공정 명(Used Operation)
+ 출력물 파라미터 명 및 파라미터 이름(Parameters / Labels)
+ 출력물에 사용될 세부 기본 파라미터 명(Attributes)
+ QR Code 사용시 표현할 URL(QR Code)
+ 작업지시(Job Order0에서의 사용 여부(Order Flag)
+ 일련번호 사용 여부(Serial Flag)

mes4u에서 사용 가능한 공정은 시작, 부품 투입, 완성, 검사, 포장, 외부 시스템 사용 공정이 있으며, 그 중에서도 출력물을 사용할 수 있는 공정은 현재 완성(Completion) 공정과 포장(Packing) 공정으로 분류되어 있습니다. 

공정명을 입력하는 방법은 Vue.js 소스코드 중 parameter.js 파일에 등록된 값을 따릅니다. 이 값은 자유자재로 변경할 수 있으나, 등록된 값과 Used Operation의 값이 일치해야만 사용이 가능하니 유의 바랍니다.

parameter.js

```
module.exports = {
  ...
  op_sol: 'ST',
  op_trace: 'OPS',
  op_eol: 'TS',
  op_packing: 'PK',
  op_inspection: 'IN',
  ...
}
```

위 값에서 'op_eol' 값이 완성공정에서 사용할 공정명이고, 'op_packing' 값이 포장공정에서 사용할 공정명입니다.

파라미터는 출력물을 실제 출력할 때 사용되는 파라미터이며, 파라미터 이름은 화면 상에 표시할 파라미터의 라벨(Label)을 나타냅니다.

기본 파라미터 명(Attributes)은 품목(Item) 별로 출력물 정보를 등록할 때, 품목 별 출력물에 대한 기본(Default) 파라미터명을 나타내는 부분입니다. 품목 별 출력물 정보는 품목 관리(Items)에서 관리됩니다.

하지만 이 부분은 현재 관련 정보에 대한 저장은 가능하나 실제로 품목 별 출력물 정보 등록 시 기본값으로 나타내지는 않았습니다. 이 부분은 추후 개선 시 검토하겠습니다.

작업 지시 사용 여부는 작업 지시 별로 출력물을 미리 출력해야 할 경우에 사용할 것인지를 나타내는 부분이며, 일련번호 사용 여부는 출력물에 일련번호가 포함될 때 사용합니다. 

출력물 관리정보는 메뉴얼만으로는 설명이 부족할 수 있습니다. 이에 따라 실제 사용 시 피드백을 주시면 세부적인 도움을 드리는 방향으로 하겠습니다.

## 3. Log

로그 관리는 사용자가 접속한 내용을 나타내는 화면입니다.

![Printing Info](./images/s005.png)

날짜 별로 검색이 가능하며, 로그 관리에서 표현되는 기능은 다음과 같습니다.

+ 로그인을 시도한 사용자의 IP 주소
+ 로그인을 성공한 사용자가 접속한 화면
+ 오류 발생 시 오류 정보

참고해야 할 사항으로는, 접속한 화면에 대한 정보는 나타나더라도, 어떤 데이터를 입력했는지에 대한 활동 정보는 기록되어 있지 않습니다.

<div style="text-align:right">
    <p><a href='./manual_mdm.ko-KR.md'>→ Master Data Management</a></p>
    <p><a href='./manual_production_mgmt.ko-KR.md'>→ Production Management</a></p>
    <p><a href='./manual_operation_exec.ko-KR.md'>→ Operation Execution and Monitoring</a></p>
</div>