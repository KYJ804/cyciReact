import { useEffect, useState } from "react";

export default function OutStudy() {
  const [메세지, 변경메세지] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('study'); // localStorage에서 데이터 가져오기
    if (data && data !== 'null') { // 데이터가 유효한 경우
      변경메세지(data);
    } else {
      변경메세지('저장된 데이터가 없습니다.'); // 기본 메시지 설정
    }
  }, []); // 컴포넌트 마운트 시 실행

  return (
    <div style={{ padding: '20px' }}>
      <h1>출력 화면</h1>
      <p style={{ fontSize: '18px', color: '#333', fontWeight: 'bold' }}>
        {메세지}
      </p>
    </div>
  );
}
