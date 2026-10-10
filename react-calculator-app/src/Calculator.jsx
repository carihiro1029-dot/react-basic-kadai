import { useState } from 'react';

export function Calculator() {

    // 合計値をstateとして管理
    const [display, setDisplay] = useState(''); // 初期値は''

    // ボタンの配置を表す配列（記述順に表示）
    const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
    ];

  // ボタンのクリック時に処理するイベントハンドラ
  const handleClick = (btn) => {
    if('C' == btn)
    {
        handleClear();
    }
    else if('=' == btn)
    {
        handleEqual();
    }
    else
    {
        handleInput(btn);
    }
  };

  const handleClear = () => {
    setDisplay('');
  }

  const handleEqual = () => {
    // 「整数 演算子 整数」の形式のみ許可
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    // 有効な式であるかチェック
    const match = display.match(validExpression);
    if (!match) {
    throw new Error('無効な式です。');
    }

    const num1 = Number(match[1]); // 1つ目の整数
    const operator = match[2]; // 演算子
    const num2 = Number(match[3]); // 2つ目の整数

    let result;

    switch(operator)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = null;
    }

    if(null == result)
    {
        setDisplay("エラー");
    }
    else
    {
        setDisplay(result);
    }
  }

  const handleInput = (value) => {
    setDisplay((prev) => prev + value);
  }

  return (
    <div className='calculator'>
      <h2>電卓アプリ</h2>
      <div className='calculator-container'>{display}</div>
      <div className='button-grid'>
        {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
            ))}
      </div>
    </div>
  );
};