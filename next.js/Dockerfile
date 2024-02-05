# 기본 이미지 설정
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install --frozen-lockfile

# 애플리케이션 파일 복사
COPY . .

# Next.js 빌드
RUN yarn build

# 애플리케이션 실행
CMD ["yarn", "start"]