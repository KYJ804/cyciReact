import { useState } from 'react';

function Study() {
  const [아이디, 확인아이디] = useState('');
  const [비밀번호, 확인비밀번호] = useState('');
  const [이메일주소, 확인이메일] = useState('');
  const [성별, 확인성별] = useState('');
  const [sel, setSel] = useState('1학년');

  const hobbyList = [
    { name: '독서' },
    { name: '악기연주' },
    { name: '프라모델 조립' },
    { name: '자기' },
    { name: '여행' }
  ];

  const [hobby, setHobby] = useState([]);

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobby((prevHobbies) => [...prevHobbies, value]);
    } else {
      setHobby((prevHobbies) => prevHobbies.filter((h) => h !== value));
    }
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
          }

          .App {
            background: #fff;
            padding: 30px 40px;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 400px;
          }

          h1, h4 {
            color: #444;
            margin-bottom: 20px;
          }

          input[type='text'],
          input[type='password'],
          select {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: border-color 0.3s;
          }

          input[type='text']:focus,
          input[type='password']:focus,
          select:focus {
            border-color: #ff758c;
            outline: none;
          }

          input[type='button'] {
            background: linear-gradient(135deg, #ff758c, #ff7eb3);
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            padding: 10px 20px;
            cursor: pointer;
            width: 100%;
            margin-top: 20px;
            transition: background 0.3s, transform 0.2s;
          }

          input[type='button']:hover {
            background: linear-gradient(135deg, #ff6a8e, #ff6093);
            transform: scale(1.05);
          }

          input[type='radio'],
          input[type='checkbox'] {
            margin-right: 10px;
          }

          label {
            margin-bottom: 15px;
            display: block;
            font-size: 14px;
            color: #666;
          }

          div {
            margin-bottom: 10px;
          }

          h1 {
            font-size: 24px;
            text-align: center;
          }
        `}
      </style>
      <div className="App">
        <h1>회원가입</h1>
        <input
          type="text"
          placeholder="아이디"
          value={아이디}
          onChange={(e) => 확인아이디(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={비밀번호}
          onChange={(e) => 확인비밀번호(e.target.value)}
        />
        <input
          type="text"
          placeholder="이메일주소"
          value={이메일주소}
          onChange={(e) => 확인이메일(e.target.value)}
        />

        <h4>성별</h4>
        <label>
          <input
            type="radio"
            name="성별"
            value="남"
            checked={성별 === '남'}
            onChange={(e) => 확인성별(e.target.value)}
          />
          남
        </label>
        <label>
          <input
            type="radio"
            name="성별"
            value="여"
            checked={성별 === '여'}
            onChange={(e) => 확인성별(e.target.value)}
          />
          여
        </label>

        <h4>학년</h4>
        <select value={sel} onChange={(e) => setSel(e.target.value)}>
          <option value="1학년">1학년</option>
          <option value="2학년">2학년</option>
          <option value="3학년">3학년</option>
          <option value="4학년">4학년</option>
        </select>

        <h1>취미 선택</h1>
        {hobbyList.map((item, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={item.name}
              checked={hobby.includes(item.name)}
              onChange={handleHobbyChange}
            />
            {item.name}
          </label>
        ))}

        <input
          type="button"
          value="회원가입"
          onClick={() => {
            console.log('아이디:', 아이디);
            console.log('비밀번호:', 비밀번호);
            console.log('이메일주소:', 이메일주소);
            console.log(`학년: ${sel}`);
            console.log('성별:', 성별);
            console.log('취미:', hobby.join(', '));

            확인아이디('');
            확인비밀번호('');
            확인이메일('');
            setHobby([]);
          }}
        />
      </div>
    </>
  );
}

export default Study;
