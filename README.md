<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="60" alt="Nest Logo" /></a>
</p>

<h1 align="center"> 스꾸딩 2025년 2학기 백엔드 스터디</h1>


<br>

<h2>📚 학습 및 실습 내용 (Curriculum)</h2>

<p> 다음과 같은 단계별 과제를 수행하며 백엔드 핵심 기술들을 학습하고 적용했습니다.</p>

<ul>
  <li>
    <b> Express.js & TypeScript 기초</b><br>
    Node.js와 Express.js를 이용한 기본 REST API 서버 구축 및 TypeScript 마이그레이션 실습
  </li>
  <li>
    <b> NestJS 마이그레이션 & 아키텍처</b><br>
    NestJS 프레임워크 도입, Module/Controller/Service 패턴 적용, DTO/Pipe를 활용한 데이터 유효성 검사 및 유닛 테스트 작성
  </li>
  <li>
    <b> 데이터베이스 & ORM (PostgreSQL + Prisma)</b><br>
    Docker를 활용한 DB 환경 구축, Prisma ORM을 이용한 스키마 설계, 마이그레이션(Migration) 및 시딩(Seeding) 실습
  </li>
  <li>
    <b> GraphQL API 전환</b><br>
    Code First 방식을 통한 GraphQL API 전환, Query 및 Mutation 구현, Apollo Playground를 활용한 테스트
  </li>
</ul>

<br>

<h2>🛠 Tech Stack</h2>

<p>
  <code>NestJS</code>
  <code>TypeScript</code>
  <code>PostgreSQL</code>
  <code>Prisma</code>
  <code>GraphQL (Apollo)</code>
  <code>Docker</code>
</p>

<br>

<h2>🚀 실행 방법 (Getting Started)</h2>

<p>로컬 환경에서 이 프로젝트를 실행하려면 다음 단계가 필요합니다.</p>

<ol>
  <li>
    <b>패키지 설치</b>
    <pre><code>npm install</code></pre>
  </li>
  <li>
    <b>데이터베이스 실행 (Docker)</b>
    <pre><code>docker compose up -d</code></pre>
  </li>
  <li>
    <b>Prisma 설정 및 데이터 초기화</b>
    <pre><code>npx prisma migrate dev && npx prisma db seed</code></pre>
  </li>
  <li>
    <b>서버 실행</b>
    <pre><code>npm run start:dev</code></pre>
  </li>
</ol>

<p>서버가 실행되면 브라우저에서 <code>http://localhost:3000/graphql</code>로 접속하여 API를 테스트할 수 있습니다.</p>

<br>

