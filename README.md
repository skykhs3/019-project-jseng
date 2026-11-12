# (주) 정석기술연구소
## https://jseng.fly.dev/

이 프로젝트는 Next.js를 사용한 웹 애플리케이션입니다. Fly.io를 통해 배포됩니다.

## 프로젝트 소개
정석기술연구소의 공식 웹사이트로, 회사 소개, 서비스 정보를 제공합니다.

## 기술 스택
- **Frontend**: Next.js 16.4.6, React 19.3.1
- **스타일링**: Tailwind CSS 4.3.5
- **UI 컴포넌트**: React Slick (캐러셀)
- **배포**: Fly.io
- **컨테이너화**: Docker

## 프로젝트 구조
```
├── frontend/             # 프론트엔드 애플리케이션
│   ├── src/              # 소스 코드
│   │   ├── app/          # Next.js 앱 라우터
│   │   ├── components/   # 재사용 가능한 컴포넌트
│   │   ├── ui/           # UI 컴포넌트
│   │   └── fonts/        # 폰트 파일
│   ├── public/           # 정적 파일 (이미지, 아이콘 등)
│   ├── dockerfile        # 프론트엔드 Docker 설정
│   └── fly.toml          # Fly.io 배포 설정
└── docker-compose.yml    # 로컬 개발 환경 설정
```

## 설치 및 실행 방법

### 로컬 개발 환경 (Docker 사용)
```bash
# 프로젝트 클론
git clone https://github.com/your-username/jseng.git
cd jseng

# Docker Compose로 실행
docker-compose up
```

### 로컬 개발 환경 (직접 실행)
```bash
# 프론트엔드 실행
cd frontend
pnpm install
pnpm run dev
```

## 배포

### 자동 배포 (기본)

`main` 브랜치에 변경사항이 머지되면 GitHub Actions의
`Frontend Deploy` 워크플로가 Fly.io 프로덕션 앱에 자동으로 배포합니다.

배포 전에 PR의 `Frontend Build` 검사가 통과했는지 확인합니다. GitHub
저장소에는 다음 Actions secrets가 등록되어 있어야 합니다.

- `FLY_API_TOKEN`
- `NEXT_PUBLIC_NAVER_SERVICE_CLIENT_ID`

### 수동 배포

자동 배포를 사용할 수 없을 때는 인증된 Fly CLI로 직접 배포합니다.
Depot 빌더의 레지스트리 인증 오류를 피하기 위해 Fly의 원격 Docker
빌더를 사용합니다.

```bash
cd frontend
flyctl deploy --remote-only --depot=false --yes
```
