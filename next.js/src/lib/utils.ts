export function calculateLastPage(totalRows: number, limit: number): number {
  return Math.ceil(totalRows / limit);
}

export function formatDateString(dateString: string): string {
  // Date 객체 생성
  const date = new Date(dateString);

  // 년, 월, 일, 시, 분, 초를 각각 추출
  const year = date.getFullYear();
  // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // 포맷에 맞춰 문자열로 결합
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function getTodayString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}
