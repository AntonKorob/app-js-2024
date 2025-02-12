  function copyTextFromParagraphs() {
    const pairs = [
      { paragraphId: 'myParagraph1', buttonId: 'myButton1' },
      { paragraphId: 'myParagraph2', buttonId: 'myButton2' },
      { paragraphId: 'myParagraph3', buttonId: 'myButton3' },
      { paragraphId: 'myParagraph4', buttonId: 'myButton4' },
      { paragraphId: 'myParagraph5', buttonId: 'myButton5' },
      { paragraphId: 'myParagraph6', buttonId: 'myButton6' },
      { paragraphId: 'myParagraph7', buttonId: 'myButton7' },
      { paragraphId: 'myParagraph8', buttonId: 'myButton8' },
      { paragraphId: 'myParagraph9', buttonId: 'myButton9' },
      { paragraphId: 'myParagraph10', buttonId: 'myButton10' },
      // Добавьте больше пар идентификаторов по мере необходимости
    ];
  
    for (let i = 0; i < pairs.length; i++) {
      const paragraphId = pairs[i].paragraphId;
      const buttonId = pairs[i].buttonId;
  
      const paragraph = document.getElementById(paragraphId);
      const button = document.getElementById(buttonId);
  
      if (paragraph && button) {
        button.addEventListener('click', () => {
          const textToCopy = paragraph.textContent;
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          console.log(`Текст из параграфа ${paragraphId} был скопирован в буфер обмена!`);
        });
      } else {
        console.log(`Элемент с идентификатором ${paragraphId} или кнопка с идентификатором ${buttonId} не найдены.`);
      }
    }
  }
  
  // Пример использования функции:
  copyTextFromParagraphs();
  