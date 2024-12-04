import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputStudy() {
  const [inp, setInp] = useState('');
  const navigate = useNavigate();

  function send() {
    if (inp.trim() === '') {
      alert('값을 입력해주세요!'); // 유효성 검사
      return;
    }

    localStorage.setItem('study', inp); // 데이터를 로컬 스토리지에 저장
    navigate('/oup1'); // '/oup1' 경로로 이동
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>데이터 입력</h1>
      <input
        type="text"
        value={inp}
        placeholder="값을 입력하세요"
        onChange={(e) => setInp(e.target.value)} // 상태 업데이트
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px',
          marginRight: '10px',
        }}
      />
      <input
        type="button"
        value="전송"
        onClick={send}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
