# Getting Started - Installation

[Eng](Installation.md) / 한글

## I. Clone Repository

소스코드 다운로드는 아래와 같습니다.

```
git clone git@github.com:sindohmes/MESTEST
```

## II. PostgreSQL Setup

만약 PostgreSQL이 설치되어 있지 않다면, 먼저 PostgreSQL을 설치해주시기 바랍니다.
현재까지 테스트 된 버전은 아래와 같으며, 추가 버전 테스트가 필요할 경우 목록에 추가하겠습니다.

+ PostgreSQL 9.6.18 (OS: Red Hat 4.8.5-39, 64-bit)
+ PostgreSQL 9.6.19 (OS: Windows 10, 64-bit)
+ PostgreSQL 12.4 (OS: Windows 10, 64-bit)

[PostgreSQL 다운로드 링크](https://www.postgresql.org/download/)

다운로드 및 설치가 완료되면, pgAdmin을 실행하신 후 사용자 및 DB를 생성합니다.
사용자 및 DB 생성은 아래 명령어를 실행합니다.

```PostgreSQL
CREATE USER mesuser PASSWORD 'mesuser';
CREATE DATABASE sdmes OWNER 'mesuser';
ALTER DATABASE sdmes SET search_path TO sdmes;
```

명령어 실행 시 상기 코드의 'mesuser' 및 'sdmes'는 사용자가 직접 수정해서 관리할 수 있으나, DB Schema 생성 스크립트 및 Spring의 application.properties 파일도 이에 맞춰서 수정을 해야 하니 주의 바랍니다.

사용자 및 DB 생성이 완료되었으면, 다음은 Schema 생성 스크립트를 다운로드 받으신 후, PostgreSQL에서 실행합니다. 스크립트에는 Table, View, Sequence, Function, Index 등을 포함하여 필수 데이터 Insert 구문을 포함합니다.

[PostgreSQL Schema Creation Script 다운로드 링크](./pgschemascript.sql)

## III. Java Spring Framework Setting

mes4u는 오픈소스로 제공되므로, Java 언어의 Spring Framework에서 가동됩니다. 

구동 환경은 Maven Project 기반으로 구성되어 있으며, Spring Framework에서 실행하기 위해서는 기본 설정이 jre 1.8로 되어 있는데, jdk 1.8을 설치해주신 후 변경을 해 주셔야 합니다.
변경 방법은 다음과 같습니다.

+ 프로젝트 우클릭 - Properties
+ Java Build Path 탭 클릭 - Libraries 탭 - JRE System Library - Edit 클릭
+ Alternae JRE: JRE -> JDK로 변경

프로젝트의 디렉토리 구조는 다음과 같습니다.

![Backend Directory](./images/be_directory.png)

+ src/main/java: Back-end Java 소스
+ src/main/resources/com: MyBatis XML 
+ src/main/resources/static: Front-end Webpack Build용 배포 디렉토리
+ src/main/resources/application.properties: Spring 환경설정 및 PostgreSQL 연결 설정
+ frontend: Front-end Vue.js 소스 및 환경
+ target: WAR, Class 등 배포 디렉토리
+ pom.xml: Maven Project 환경설정 파일

위 디렉토리 및 파일에서 설정 파일은 application.properties, pom.xml로, 다음 사항을 확인합니다.

### 1. application.properties

Spring Framework 환경설정 값을 지정하는 파일로, 주로 PostgreSQL 연결 시 사용합니다.

```
spring.datasource.hikari.maximum-pool-size=4
spring.datasource.url=jdbc:postgresql://localhost:5434/sdmes
spring.datasource.username=mesuser
spring.datasource.password=mesuser

spring.datasource.tomcat.max-wait=10000
spring.datasource.tomcat.max-active=20

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true
spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect
spring.jpa.open-in-view=false

# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto= update
spring.data.jdbc.repositories.enabled=false

mybatis.mapper-locations=com/sindoh/sdmes/mapper/*.xml

# Project Custom Values
sdmes.datasource.db=sdmes
sdmes.app.jwtSecret=sdmes
sdmes.app.jwtExpirationMs=86400000
```

위 코드에서 postgresql 연결에 사용할 주소 및 DB, 접속 계정을 설정할 수 있습니다.

### 2. pom.xml

Spring Boot - Maven Project에서 사용할 라이브러리를 나타내며, 현재는 다음 라이브러리를 사용합니다.

+ Spring JDBC
+ Spring JPA
+ Spring Security
+ Spring MyBatis
+ JsonWebtoken
+ Jackson
+ Devtools
+ PostgreSQL
+ Lombok
+ Swagger-UI

특별한 변경 사항은 없으며, 추가로 라이브러리를 사용해서 변경하고 싶을 경우에는 pom.xml 파일에서 추가 후, Maven - Update Project를 통해서 라이브러리를 다운로드 및 사용할 수 있습니다.

## IV. Vue.js Setting

mes4u의 Front-end Framework는 Vue.js를 사용하며, 설치 및 관리는 npm을 사용합니다. npm을 사용할 수 없는 경우에는 node.js를 설치해야 하며, 아래 링크를 통해서 다운로드를 할 수 있습니다.

[Node.js 다운로드 링크](https://nodejs.org/ko/)

현재는 Java WAR 파일 및 Vue.js 배포 Build 파일이 이미 업로드되어 있으므로, Front-end 소스코드를 수정하거나 추가하지 않고 단순 열람 및 테스트 용도로 사용할 경우에는 별도의 설정을 하지 않아도 됩니다. 하지만 Vue.js 코드 수정을 위해서는 다음과 같은 절차를 따릅니다.

+ Vue.js 개발환경 설치
```
npm install
```

+ Vue.js 개발환경 실행
```
npm run dev
```

+ Vue.js Build 및 배포
```
npm run build
```

Vue.js 환경은 다음의 구조를 따릅니다.

![Frontend Directory](./images/fe_directory.png)

+ build: 빌드에 사용, 수정하지 않음
+ node_modules: 개발환경 설치 시 생성됨, Git에는 해당 디렉토리가 존재하지 않음
+ public: HTML 조회 파일, 수정하지 않음
+ src: Vue.js 개발 소스코드 파일, 모든 코드의 추가 및 수정은 해당 디렉토리에서 수행
+ package.json: Vue.js에서 사용할 라이브러리 및 환경 설정 파일
+ vue.config.js: 개발 및 배포환경 설정 관련 파일
+ .env.development: 개발 환경에서 Back-end API에 연결하기 위한 Base URL 지정 파일
+ .env.production: 배포 환경에서 Back-end API에 연결하기 위한 Base URL 지정 파일

mes4u의 Vue.js는 다음 UI 및 Template을 사용합니다.

+ [Element UI: MIT License](https://element.eleme.io/#/en-US)
+ [vue-element-admin: MIT License](https://github.com/PanJiaChen/vue-element-admin)

## V. mes4u 실행

mes4u 실행은 STS4(Spring Tool Suite)의 Spring Boot App을 통해서 실행하거나, 혹은 target 디렉토리의 ROOT.war 파일을 실행합니다.

```
java -jar ROOT.war
```

기본 설정 주소는 http://localhost:8080 을 사용하며, 특정 서버에서 사용하기 위해서는 Tomcat Server에서 가동시킵니다.

http://localhost:8080 으로 접속하면 다음 화면이 나타납니다.

![Login Page](./images/login_page.png)

PostgreSQL 설치 및 DB 연결 설정이 완료될 경우 정상적으로 페이지가 조회될 것이며, 기본 설정 된 계정은 다음과 같습니다.

+ ID: administrator
+ PW: administrator

접속이 완료되면 메인 페이지가 나타날 것이며, MES Web의 다양한 기능을 이용할 수 있습니다.

![Dashboard](./images/dashboard.png)