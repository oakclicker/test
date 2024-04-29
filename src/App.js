import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const incrementButtonRef = useRef(null);

  useEffect(() => {
    const telegramApp = window.Telegram.WebApp;

    // Функция для обновления данных пользователя
    const updateUserData = () => {
      const userData = telegramApp.initDataUnsafe.user;
      setUserData(userData);
    };

    // Обновляем данные пользователя при загрузке страницы
    updateUserData();

    // Добавляем обработчик события для кнопки увеличения баланса
    const incrementButton = incrementButtonRef.current;
    if (incrementButton) {
      incrementButton.addEventListener('click', () => {
        const balanceElement = document.getElementById("balance");
        const currentBalance = parseInt(balanceElement.innerText.split(": ")[1]);
        balanceElement.innerText = `Balance: ${currentBalance + 1}`;
      });
    }

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      if (incrementButton) {
        incrementButton.removeEventListener('click');
      }
    };
  }, []);

  return (
    <div className="App">
      {userData && (
        <div id="usercard">
          <p>{`${userData.first_name} ${userData.last_name}`}</p>
          <p>{`User ID: ${userData.id}`}</p>
          <p>{`Username: ${userData.username}`}</p>
          <img src={userData.photo_url} alt="User Avatar" id="avatar" />
        </div>
      )}
      <button ref={incrementButtonRef} id="incrementButton">Increment Balance</button>
      <p id="balance">Balance: 0</p>
    </div>
  );
}

export default App;
