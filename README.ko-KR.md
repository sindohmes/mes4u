# MES-U

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://element.eleme.io">
    <img src="https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-LGPL_2.1-blue" alt="license">
  </a>
  <a href="https://github.com/sindohmes/MESTEST/releases">
    <img src="https://img.shields.io/badge/release-v1.0-blue" alt="GitHub release">
  </a>
</p>

[Eng](./README.md) / 한글

## 소개

MES-U는 &copy;Sindoh(신도리코)에서 개발한 Web 기반 Open Source 생산관리시스템(MES)입니다. 

MES-U는 자사의 제조 현장에서 사용 중인 생산관리 시스템의 기능 및 노하우를 바탕으로 하여 개발된 시스템으로, Open Source로 MES에 관심을 가진 모든 분들을 대상으로 하여 오픈소스로 배포합니다.
현재 버전(v1)은 제조 현장에 필요한 생산 핵심 기능 및 기준정보를 중심으로 구축하였으며, 추후에는 제조 현장에서 사용되는 더욱 강화된 기능 및 재고, 자재 관리를 포함한 시스템으로 나아가고자 합니다.

+ [설치 및 사용](./Installation.ko-KR.md)
+ [주요 기능 안내](./features.ko-KR.md)
+ [버전 별 변경사항](./version.ko-KR.md)

## 구축 환경

시스템 구축 환경은 다음과 같습니다.

- Database: PostgreSQL 9.6.18
- Back-end
  + Framework: Spring Boot
  + Java: 1.8
  + Maven: 4.0.0
- Front-end
  + Vue.js: 2.6.10
  + Template: [Vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) (made by PanJiaChen)
  + UI: [Element-ui](https://element.eleme.io)

## 준비사항

MES 설치 및 사용을 위해서 준비해야 할 사항은 다음과 같습니다.

- 필수 설치 프로그램
  + [node.js](https://nodejs.org/) 
  + [git](https://git-scm.com/)

MES-U는 제조 분야에 의존하지 않으므로 실제 사용을 위해서는 사용자들이 일부 소스코드를 수정해야 할 수도 있으며, 상기 언급한 시스템 사양에 맞게 테스트를 하기 위해서 다음 프로그램의 사용을 권장합니다.
 
- 권장 서버 및 도구
  + Spring Tool Suite 4
  + Visual Studio Code
  + PostgreSQL
  + JDK 1.8
  
권장 웹 브라우저는 다음과 같습니다.

- Chrome 
- Firefox
- Internet Explorer 10+
- Microsoft Edge 

## 라이센스

[GNU LGPL v2.1](./LICENSE)

Copyright (c) 2020-present Sindoh
