스꾸딩 2025년 2학기 백엔드 스터디

이 프로젝트는 Node.js 기반의 웹 서버 기초부터 시작하여, NestJS 프레임워크와 데이터베이스, 그리고 GraphQL API까지 단계별로 발전시키는 과정을 담고 있습니다.

📚 학습 및 실습 내용 (Curriculum)
매주 단계별 과제를 수행하며 다음과 같은 백엔드 핵심 기술들을 학습하고 적용했습니다.

1. Express.js & TypeScript 기초
Node.js와 Express.js를 이용한 기본 REST API 서버 구축

JavaScript 코드를 TypeScript로 마이그레이션하여 정적 타입 시스템 적용

파일 시스템(fs)을 이용한 데이터 관리에서 메모리 기반 구조로의 리팩토링

2. NestJS 마이그레이션 & 아키텍처
Express 기반 코드를 NestJS 프레임워크로 마이그레이션

Module, Controller, Service 패턴을 적용하여 관심사 분리

**DTO(Data Transfer Object)**와 Pipe를 활용한 데이터 유효성 검사

Unit Test(유닛 테스트) 작성 및 비즈니스 로직 검증

3. 데이터베이스 & ORM (PostgreSQL + Prisma)
Docker와 Docker Compose를 활용한 PostgreSQL 컨테이너 환경 구축

Prisma ORM을 도입하여 스키마(Schema) 설계 및 DB 연동

데이터베이스 Migration 및 초기 데이터 Seeding 실습

실제 DB와 연동된 영속적인 CRUD 로직 구현

4. GraphQL API 전환
기존 REST API 구조를 GraphQL 기반으로 전환

Code First 방식을 사용하여 TypeScript 클래스로 스키마 자동 생성

Query(조회) 및 Mutation(생성, 수정, 삭제) Resolver 구현

Apollo Playground를 활용한 API 테스트

🛠 Tech Stack
Framework: NestJS

Language: TypeScript

Database: PostgreSQL

ORM: Prisma

API: GraphQL (Apollo Server), REST API (Legacy)

Infra: Docker, Docker Compose

🚀 실행 방법 (Getting Started)
이 프로젝트를 로컬 환경에서 실행하려면 다음 단계가 필요합니다.

1. 패키지 설치

Bash

npm install
2. 데이터베이스 실행 (Docker)

Bash

docker compose up -d
3. Prisma 설정 및 데이터 초기화

Bash

# 데이터베이스 마이그레이션 (테이블 생성)
npx prisma migrate dev

# 초기 더미 데이터 생성 (Seeding)
npx prisma db seed
4. 서버 실행

Bash

npm run start:dev
5. 테스트 (GraphQL Playground) 브라우저에서 http://localhost:3000/graphql로 접속하여 쿼리를 테스트할 수 있습니다.
